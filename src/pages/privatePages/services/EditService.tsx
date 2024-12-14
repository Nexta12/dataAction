import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import Input from "@components/form/Input";
import SubHeading from "@components/subHeading/SubHeading";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

interface Service {
  title: string;
  price: number;
}

const EditService = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const [service, setService] = useState<Service>({
    title: "",
    price: 0,
  });


  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await apiClient.get(
          `${endpoints.getOneServiceById}/${id}`,
        );
        setService(response.data);
      } catch (error) {
        setMessage({
          errorMessage: "Error fetching item. Please try again.",
          successMessage: null,
        });
      }
    };

    if (id) fetchService();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await apiClient.put(`${endpoints.updateService}/${id}`, service);
      setMessage({
        errorMessage: null,
        successMessage: "Updated successfully",
      });
    } catch (error) {
      setMessage({
        errorMessage: ErrorFormatter(error),
        successMessage: null,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="bg-white w-full md:w-[90%] lg:w-[80%] m-auto p-4 lg:p-10 shadow-lg rounded-lg">
        <FaArrowLeftLong
          onClick={handleGoBack}
          className="cursor-pointer text-2xl text-dark"
        />
        <AlertMessage alert={message} />
        <div className="w-full flex items-center justify-center mb-4">
          <SubHeading>Edit Course/Service</SubHeading>
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
              value={service.title}
              onChange={(e) =>
                setService({ ...service, title: e.target.value })
              }
            />
            <Input
              name="price"
              type="number" // Corrected type
              label="Price (£)"
              value={service.price.toString()} // Convert number to string
              onChange={(e) =>
                setService({ ...service, price: Number(e.target.value) })
              }
            />
          </div>
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

export default EditService;
