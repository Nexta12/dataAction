import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import DeleteModal from "@components/deleteConfirmation/DeleteModal";
import SubHeading from "@components/subHeading/SubHeading";
import Table, { Column } from "@components/table/Table";
import { ProjectSalesDetails } from "@customTypes/projectSales";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaEllipsisVertical } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const ProjectSalesTable = () => {
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);
  const [data, setData] = useState<ProjectSalesDetails[]>([]);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  // Delete User
  const [openModal, setOpenModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDelete = (value: string) => {
    setOpenModal(true);
    setItemToDelete(value);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        // Make an API call to delete the item
        await apiClient.delete(`${endpoints.deleteProjectSales}/${itemToDelete}`);

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
        const response = await apiClient.get<ProjectSalesDetails[]>(
          endpoints.getAllProjectsSales,
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

  const columns: Column<ProjectSalesDetails>[] = [
    { key: "applicantName", header: "Name" },
    { key: "applicantEmail", header: "Email" },
    { key: "projectIndustry", header: "Project Area" },
    { key: "projectName", header: "Project Title" },
    { key: "cost", header: "Project Cost" },
    { key: "status", header: "Status",   render: (value) => {
      if (typeof value === "string") {
        // Determine the styles based on the value
        let bgClass = "";
        let textClass = "";

        switch (value) {
          case "Dataset Sent":
            bgClass = "bg-green-100";
            textClass = "text-green-800";
            break;
          case "Cancelled":
            bgClass = "bg-red-100";
            textClass = "text-red-800";
            break;
          case "Registration":
            bgClass = "bg-blue-100";
            textClass = "text-blue-800";
            break;
          default:
            // Fallback for unexpected values
            bgClass = "bg-gray-100";
            textClass = "text-gray-800";
        }

        return (
          <span
            className={`px-2 py-1 rounded text-sm font-medium ${bgClass} ${textClass}`}
          >
            {value}
          </span>
        );
      }

      // Fallback for unexpected types
      return null;
    },  },
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
  const keyExtractor = (row: ProjectSalesDetails) => row._id;

  return (
    <div className="">
      <AlertMessage alert={message} />
      <DeleteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message="Are you Sure You want to this this Item ?"
      />
      <div className=" my-5 flex items-center gap-10 justify-between ">
        <FaArrowLeftLong
          onClick={() => handleGoBack()}
          className="cursor-pointer text-2xl text-dark"
        />
        
        <SubHeading className=" whitespace-nowrap">
          Project Sales and Download details
        </SubHeading>
        
      </div>

      <Table data={data} columns={columns} keyExtractor={keyExtractor} />
      <div className="my-32"></div>
    </div>
  );
};

export default ProjectSalesTable;
