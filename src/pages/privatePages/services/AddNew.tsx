import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SubHeading from "@components/subHeading/SubHeading";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AddNewService = () => {
  const categoryOptions = [
    {
      title: "Course",
      _id: "1",
    },
    {
      title: "Service",
      _id: "2",
    },
  ];

  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const Details = {
      title,
      price,
      category
    };
    setLoading(true);
    try {
      await apiClient.post(endpoints.addNewService, Details);

      setMessage({
        errorMessage: null,
        successMessage: "Item added successfully",
      });

      setTitle("");
      setPrice(0);
    } catch (error) {
      setMessage({ errorMessage: ErrorFormatter(error), successMessage: null });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="bg-white w-full md:w-[90%] lg:w-[80%] m-auto p-4 lg:p-10 shadow-lg rounded-lg">
        <FaArrowLeftLong
          onClick={() => handleGoBack()}
          className="cursor-pointer text-2xl text-dark"
        />
        <AlertMessage alert={message} />
        <div className="w-full flex items-center justify-center mb-4">
          <SubHeading className="">Add New Service</SubHeading>
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 lg:gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
            <Input
              name="title"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              name="price"
              type="Number"
              label="Price £"
              value={price.toString()}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <Select
            options={categoryOptions}
            value={category}
            name="category"
            selectLabel="Choose Classification"
            onChange={(e) => setCategory(e.target.value)}
          />
          <SubmitButton
            isLoading={loading}
            label="Submit"
            className="bg-dark hover:bg-LightBlue w-[220px] mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewService;
