import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import ButtonLink from "@components/button/ButtonLink";
import SubHeading from "@components/subHeading/SubHeading";
import Table, { Column } from "@components/table/Table";
import { AdminProfile } from "@customTypes/user";
import { paths } from "@routes/paths";
import { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Users = () => {
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);
  const [data, setData] = useState<AdminProfile[]>([]);
  const popupRef = useRef<HTMLDivElement | null>(null);

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

  const handleDelete = (value: string) => {
    console.log(value);
  };

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
              <Link to={`${paths.editAdmin}/${row._id}`} className="block mb-2">
                Edit
              </Link>
              <Link to={`/view/${row._id}`} className="block mb-2">
                View
              </Link>
              <button
                onClick={() => handleDelete(row._id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];
  const keyExtractor = (row: AdminProfile) => row._id;

  return (
    <div className="">
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between mb-8">
        <div className="flex-1">
          <SubHeading className="hidden lg:block">All Admin Users</SubHeading>
        </div>
        <div className="flex-1">
          <ButtonLink
            to={paths.addNewAdmin}
            label="Add User"
            className="w-[220px] ml-auto bg-dark"
            icon={BiPlus}
            
          />
        </div>
      </div>

      <Table data={data} columns={columns} keyExtractor={keyExtractor} />
    </div>
  );
};

export default Users;
