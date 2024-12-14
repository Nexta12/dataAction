import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import ButtonLink from "@components/button/ButtonLink";
import DeleteModal from "@components/deleteConfirmation/DeleteModal";
import SubHeading from "@components/subHeading/SubHeading";
import Table, { Column } from "@components/table/Table";
import { AdminProfile, UserRole } from "@customTypes/user";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { paths } from "@routes/paths";
import useAuthStore from "@store/authStore";
import { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Users = () => {
  const { user } = useAuthStore();
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);
  const [data, setData] = useState<AdminProfile[]>([]);
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
        await apiClient.delete(`${endpoints.deleteUser}/${itemToDelete}`);

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
        const response = await apiClient.get<AdminProfile[]>(
          endpoints.getAllUsers,
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

  const columns: Column<AdminProfile>[] = [
    { key: "firstName", header: "First Name" },
    { key: "lastName", header: "Last Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
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
              {(user?.role === UserRole.superAdmin || user?.id === row._id) && (
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
              )}
            </div>
          )}
        </div>
      ),
    },
  ];
  const keyExtractor = (row: AdminProfile) => row._id;

  return (
    <div className="">
      <AlertMessage alert={message} />
      <DeleteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message="Are you Sure You want to this this User ?"
      />
      <div className=" flex  items-center justify-between mb-8">
        <div className="flex-1">
          <SubHeading className="">The Team</SubHeading>
        </div>
        <div className="flex-1">
          <div className="w-fit !py-1 lg:w-[220px] ml-auto !text-[12px]">
            <ButtonLink
              to={paths.addNewAdmin}
              label="Add User"
              className="ml-auto bg-dark "
              icon={BiPlus}
            />
          </div>
        </div>
      </div>

      <Table data={data} columns={columns} keyExtractor={keyExtractor} />
    </div>
  );
};

export default Users;
