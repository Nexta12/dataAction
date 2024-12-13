import React, { ReactNode } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

// Define the types for props and state
interface ErrorBoundaryProps {
  children: ReactNode; // The component's children
}

interface ErrorBoundaryState {
  hasError: boolean; // Track if an error occurred
}

// Define a functional handler for the "Go Back" button
const handleClick = () => {
  window.location.href = "/";
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Update the state when an error is caught
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  // Log the error details to the console or an external service
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  // Render the fallback UI if an error occurred
  render() {
    if (this.state.hasError) {
      return (
        <main className="h-screen w-screen bg-light-green/5 flex items-center justify-center overflow-hidden">
          <div className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-light-green/10 rounded-full p-4 flex items-center justify-center ring-3 ring-light-green">
            <div className="bg-white w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-sm shadow-2xl flex flex-col items-center justify-center">
              <h1 className="text-[50px] font-extrabold text-dark-gray">
                Oopss !!!
              </h1>
              <p className="font-bold my-2 text-danger">An Error occurred!</p>
              <p className="text-2xs md:text-sm">
                This isn't your fault, we will fix it shortly
              </p>
              <button
                onClick={handleClick}
                className="flex items-center mt-10 bg-green text-white rounded-sm py-2 px-3 transition-all duration-300 ease-in-out hover:bg-light-green text-sm"
              >
                <IoIosArrowRoundBack className="mr-1 text-lg" /> Go Back
              </button>
            </div>
          </div>
        </main>
      );
    }

    // If no error, render children
    return this.props.children;
  }
}

export default ErrorBoundary;
