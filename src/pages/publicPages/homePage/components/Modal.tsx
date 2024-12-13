import { IoClose } from "react-icons/io5";
import UpcommingEvents from "./UpcommingEvents";
import { useEffect, useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const MODAL_LIMIT = 2;
    const RESET_TIME = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    const now = Date.now();
    const modalData = JSON.parse(localStorage.getItem("modalData") || "{}");

    let { count = 0, timestamp = now } = modalData;

    // Check if 2 hours have passed since the last modal display
    if (now - timestamp > RESET_TIME) {
      count = 0; // Reset count
      timestamp = now; // Update timestamp
    }

    if (count < MODAL_LIMIT) {
      const timer = setTimeout(() => {
        setOpen(true);
        // Increment count and store updated data
        localStorage.setItem(
          "modalData",
          JSON.stringify({ count: count + 1, timestamp }),
        );
      }, 5000);

      const closeTimer = setTimeout(() => {
        setOpen(false);
      }, 25000);

      return () => {
        clearTimeout(timer);
        clearTimeout(closeTimer);
      };
    }
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-dark bg-opacity-60 z-50 flex items-center justify-center">
          <div className="w-[95%] md:w-[80%] lg:w-[60%] xl:w-[40%] bg-[#c7e8f2] p-6 rounded-xl z-50 relative">
            <IoClose
              className="text-2xl absolute top-5 right-5 cursor-pointer hover:animate-spinOnce "
              onClick={handleClose}
            />
            <UpcommingEvents />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
