import apiClient from "@api/apiClient"
import { endpoints } from "@api/endpoints"
import ButtonLink from "@components/button/ButtonLink"
import DeleteModal from "@components/deleteConfirmation/DeleteModal"
import SubHeading from "@components/subHeading/SubHeading"
import Table, { Column } from "@components/table/Table"
import { CoursesDetail } from "@customTypes/course"
import { UserRole } from "@customTypes/user"
import { ErrorFormatter } from "@pages/errors/errorFormatter"
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage"
import { paths } from "@routes/paths"
import useAuthStore from "@store/authStore"
import { useEffect, useRef, useState } from "react"
import { BiPlus } from "react-icons/bi"
import { FaEllipsisVertical } from "react-icons/fa6"


const Courses = () => {

  const { user } = useAuthStore();
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);
  const [data, setData] = useState<CoursesDetail[]>([]);
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
        await apiClient.delete(`${endpoints.deleteCourse}/${itemToDelete}`);

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
        const response = await apiClient.get<CoursesDetail[]>(
          endpoints.getAllCourses,
        );
        setData(response.data);
      } catch (err) {
        setMessage({errorMessage: ErrorFormatter(err), successMessage: null})
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

  const columns: Column<CoursesDetail>[] = [
    { key: "title", header: "Course Title" },
    { key: "price", header: "Price £" },
    { key: "duration", header: "Duration" },
    { key: "totalEnrolled", header: "Enrolled Students" },
    { key: "snippet", header: "Description" },
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
            
              {(user?.role === UserRole.superAdmin) && (
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
              )}
            </div>
          )}
        </div>
      ),
    },
  ];
  const keyExtractor = (row: CoursesDetail) => row._id;



  return (
    <div className="">
       <AlertMessage alert={message}/>
       <DeleteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message="Are you Sure You want to this this Course ?"
      />
    <div className=" flex  items-center justify-between mb-8">
      <div className="flex-1">
        <SubHeading className="">All Courses( {data.length}) </SubHeading>
      </div>
      <div className="flex-1">
        <div className="w-fit !py-1 lg:w-[220px] ml-auto !text-[12px]">
          <ButtonLink
            to={paths.addNewCourse}
            label="Add New"
            className="ml-auto bg-dark "
            icon={BiPlus}
          />
        </div>
      </div>
    </div>

    <Table data={data} columns={columns} keyExtractor={keyExtractor} />
  </div>
  )
}

export default Courses