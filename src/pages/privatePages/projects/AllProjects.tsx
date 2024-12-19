
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
                className="block mb-2"
                onClick={() => alert("Comming Soon !")}
              >
                View
              </Link>
            
                <>
                  <Link
                    to={`${paths.editAdmin}/${row._id}`}
                    className="block mb-2"
                  >
                    Edit
                  </Link>
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
         <div className=" flex flex-col-reverse md:flex-row items-center justify-between mb-8">
      <div className="flex-1">
        <SubHeading className="hidden lg:block">
          All Projects
        </SubHeading>
      </div>
      <div className="flex-1">
        <div className="w-[220px] ml-auto">
          <ButtonLink
            to={paths.addNewProduct}
            label="Add New"
            className="ml-auto bg-dark"
            icon={BiPlus}
          />
        </div>
      </div>
    </div>

      <Table data={data} columns={columns} keyExtractor={keyExtractor} />
    </div>
  );
};

export default AllProjects;
