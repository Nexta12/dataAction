
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import DeleteModal from "@components/deleteConfirmation/DeleteModal";
import SubHeading from "@components/subHeading/SubHeading";
import Table, { Column } from "@components/table/Table";
import { StudentsProfile } from "@customTypes/trainingData";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useEffect, useRef, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";


const TrainingSignUps = () => {
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);
  const [data, setData] = useState<StudentsProfile[]>([]);
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
        await apiClient.delete(`${endpoints.deleteTrainingRequest}/${itemToDelete}`);

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
        const response = await apiClient.get<StudentsProfile[]>(
          endpoints.getAllTrainingsRequests,
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

  const columns: Column<StudentsProfile>[] = [
    { key: "applicantName", header: "Name" },
    { key: "applicantName", header: "Email" },
    { key: "phoneNumber", header: "Phone" },
    { key: "trainingType", header: "Interest" },
    { key: "choiceDate", header: "Preferred Date" },
    { key: "cost", header: "Amount £" },
    { key: "comment", header: "Comment" },
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
  const keyExtractor = (row: StudentsProfile) => row._id;

  return (
    <div className="">
      <AlertMessage alert={message} />
      <DeleteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message="Are you Sure You want to this item ?"
      />
      <div className=" flex  items-center justify-between mb-8">
        <div className="flex-1">
          <SubHeading className="">Training Requests({data.length})</SubHeading>
        </div>
        <div className="flex-1">
       
        </div>
      </div>

      <Table data={data} columns={columns} keyExtractor={keyExtractor} />
      <div className="my-24">
      
      </div>
    </div>
  );
};

export default TrainingSignUps;
