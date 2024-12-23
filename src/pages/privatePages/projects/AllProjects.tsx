import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import ButtonLink from "@components/button/ButtonLink";
import DeleteModal from "@components/deleteConfirmation/DeleteModal";
import SubHeading from "@components/subHeading/SubHeading";
import Table, { Column } from "@components/table/Table";
import { ProjectDetails } from "@customTypes/projects";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { paths } from "@routes/paths";
import { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);
  const [data, setData] = useState<ProjectDetails[]>([]);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  // Delete User
  const [openModal, setOpenModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const handleDelete = (value: string) => {
    setOpenModal(true);
    setItemToDelete(value);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        // Make an API call to delete the item
        await apiClient.delete(`${endpoints.deleteProject}/${itemToDelete}`);

        // Remove the item from the list
        setData((prev) => prev.filter((user) => user._id !== itemToDelete));

        setOpenModal(false); // Close the modal
        setItemToDelete(null); // Reset the item to delete
      } catch (error) {
        setMessage({
          errorMessage: ErrorFormatter(error),
          successMessage: null,
        });
        setOpenModal(false); // Close the modal
        setItemToDelete(null); // Reset the item to delete
      }
    }
  };

  // Handle file download

  const handleDownload = (projectId: string ) => {
    try {
  
      const downloadUrl = `${import.meta.env.VITE_API_BASE_URL}${endpoints.downloadDataset}/${projectId}`;
      window.location.href = downloadUrl;
     
    } catch (error) {
      setMessage({
        successMessage: null,
        errorMessage: "Failed to initiate the download.",
      });
    } 
  };




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<ProjectDetails[]>(
          endpoints.getAllProjects,
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const togglePopup = (_id: string) => {
    setVisiblePopup((prev) => (prev === _id ? null : _id));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setVisiblePopup(null); // Dismiss popup
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const columns: Column<ProjectDetails>[] = [
    { key: "title", header: "Project Title" },
    { key: "industry", header: "Project Area" },
    { key: "difficultyLevel", header: "Difficulty Level" },
    { key: "price", header: "Cost" },
    { key: "purpose", header: "Purpose" },
    {
      key: "actions",
      header: "Actions",
      render: (_, row) => (
        <div className="relative flex items-center justify-center">
          <FaEllipsisVertical
            className="cursor-pointer"
            onClick={() => togglePopup(row._id)}
          />

          {visiblePopup === row._id && (
            <div
              ref={popupRef}
              className="absolute bg-white border rounded shadow p-2 top-[-4] right-0 z-10 flex items-center gap-3"
            >
              <Link
                to="#"
                className="mb-2 flex items-center text-LightBlue gap-2"
                onClick={() => handleDownload(row._id, )}
              >
                <FaDownload /> Dataset
              </Link>

              <>
                {/* <Link
                  to={`${paths.editAdmin}/${row._id}`}
                  className="block mb-2"
                >
                  Edit
                </Link> */}
                <button
                  onClick={() => handleDelete(row._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </>
            </div>
          )}
        </div>
      ),
    },
  ];
  const keyExtractor = (row: ProjectDetails) => row._id;

  return (
    <div className="">
      <AlertMessage alert={message} />
      <DeleteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message="Are you Sure You want to this this Item ?"
      />
      <div className="flex  md:flex-row gap-4 my-10 items-center">
        <SubHeading className=" hidden xl:block whitespace-nowrap w-full">
          All Projects
        </SubHeading>
        <ButtonLink
          className="w-64"
          to={paths.projectPurches}
          label=" Project Sales"
        />
        <ButtonLink
          to={paths.addNewProduct}
          label="Add New"
          className=" w-52 bg-dark"
          icon={BiPlus}
        />
      </div>

      <Table data={data} columns={columns} keyExtractor={keyExtractor} />
      <div className="my-32"></div>
    </div>
  );
};

export default AllProjects;
