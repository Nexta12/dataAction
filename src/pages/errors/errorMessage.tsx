import { useEffect, useState } from "react";

export type ErrorMessageProps = {
  errorMessage?: string | null;
  successMessage?: string | null;
};

type AlertMessageProp = {
  alert: ErrorMessageProps;
};

export const AlertMessage = ({ alert }: AlertMessageProp) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (alert.errorMessage || alert.successMessage) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [alert]);

  if (!visible) return null;

  return (
    <div
      className={`flex items-center p-2 mb-2 rounded-lg border w-fit mx-auto ${
        alert.errorMessage
          ? " text-red-500 border-red-700"
          : "bg-green-500 text-white  border-green-700"
      }`}
      role="alert"
    >
      <div className="ms-3 text-sm font-medium ">
        {alert.errorMessage || alert.successMessage}
      </div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-transparent text-dark rounded-lg p-1.5 hover:bg-white hover:bg-opacity-20 inline-flex items-center justify-center h-8 w-8"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        <svg
          className="w-3 h-3 text-danger hover:animate-spinOnce"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};
