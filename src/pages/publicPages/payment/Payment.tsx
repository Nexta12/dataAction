
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Heading from "@components/heading/Heading";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  const [data, setData] = useState({
    _id: "",
    applicantName: "",
    applicantEmail: "",
    paymentFor: "",
    choiceDate: "",
    price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        // Try to fetch from all three endpoints until data is retrieved
        for (const endpoint of [
          `${endpoints.getConsultationById}/${id}`,
          `${endpoints.getSingleTrainingApplication}/${id}`,
          `${endpoints.getSingleProjectSales}/${id}`,
        ]) {
          try {
            response = await apiClient.get(endpoint);
            if (response.data) {
              const {
                _id,
                applicantName,
                applicantEmail,
                consultationType,
                trainingType,
                projectName,
                choiceDate,
                cost,
                price,
                createdAt,
              } = response.data;

              setData({
                _id,
                applicantName,
                applicantEmail,
                paymentFor: consultationType || trainingType || projectName,
                choiceDate: choiceDate || createdAt,
                price: price || cost,
              
              });

              return;
            }
          } catch (_) {
            continue; // Skip to the next endpoint if there's an error
          }
        }

        // If no data was retrieved, set an error message
        setMessage({
          errorMessage: "Failed to fetch data for payment.",
          successMessage: null,
        });
      } catch (error) {
        setMessage({
          errorMessage: ErrorFormatter(error),
          successMessage: null,
        });
      }
    };

    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const paymentDetails = {
      applicantName: data.applicantName,
      applicantEmail: data.applicantEmail,
      paymentFor: data.paymentFor,
      amount: data.price,
      paymentPurposeId: data._id,
    };

    setLoading(true);
    try {
      const response = await apiClient.post(endpoints.checkout, paymentDetails);

       window.location.href = response.data; // Redirect to payment URL
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
    <PublicPageContainer
      className="flex flex-col md:flex-row items-start justify-between gap-12 lg:h-[100vh]"
      gradientDirection="45deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
    >
      <div className="left flex-1">
        <Heading
          className="xmd:text-left text-center font-semibold"
          text="Consultation Service Payment"
        />
        <div className="flex justify-center items-center">
          <img src="/assets/card.png" alt="Payment Illustration" />
        </div>
      </div>

      <div className="right flex-1 bg-transparentWhite p-2 lg:p-10 rounded-sm w-full">
        <AlertMessage alert={message} />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Heading text="Verification" className="text-center" />

          <Input
            className="bg-gray cursor-none"
            value={`Payment for ${data.paymentFor || ""}`}
            disabled
          />
          <Input
            className="bg-gray cursor-none"
            value={data.applicantName || ""}
            disabled
          />
          <Input
            className="bg-gray cursor-none"
            value={data.applicantEmail || ""}
            disabled
          />
          <Input
            className="bg-gray cursor-none"
            label="Start Date"
            value={
              data.choiceDate
                ? new Date(data.choiceDate).toLocaleDateString()
                : ""
            }
            disabled
          />
          <SubmitButton
            className="w-full text-white"
            isLoading={loading}
            cost={
              data.price
                ? `${data.price} with Stripe`
                : " Checkout With Stripe"
            }
          >
            {loading ? "Please Wait..." : "Checkout With Stripe"}
          </SubmitButton>
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Payment;

