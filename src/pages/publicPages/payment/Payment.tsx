
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

  const [consultType, setConsultType] = useState({
    title: "",
    price: "",
    consultationType: "",
    applicantName: "",
    applicantEmail: "",
    choiceDate: "",
  });

  const [trainingType, setTrainingType] = useState({
    applicantName: "",
    applicantEmail: "",
    trainingType: "",
    phoneNumber: "",
    choiceDate: "",
    comment: "",
    cost: "",
  });

  useEffect(() => {
    const fetchConsultationType = async () => {
      try {
        const response = await apiClient.get(
          `${endpoints.getConsultationById}/${id}`
        );
        setConsultType(response.data);
      } catch (error) {
        setMessage({
          errorMessage: ErrorFormatter(error),
          successMessage: null,
        });
      }
    };

    if (id) fetchConsultationType();
  }, [id]);

  useEffect(() => {
    const fetchTrainingType = async () => {
      try {
        const response = await apiClient.get(
          `${endpoints.getSingleTrainingApplication}/${id}`
        );
        setTrainingType(response.data);
      } catch (error) {
        setMessage({
          errorMessage: ErrorFormatter(error),
          successMessage: null,
        });
      }
    };

    if (id) fetchTrainingType();
  }, [id]);

  // Determine which data to display
  const displayType = consultType != undefined
    ? {
        applicantName: consultType.applicantName,
        applicantEmail: consultType.applicantEmail,
        consultationType: consultType.consultationType,
        choiceDate: consultType.choiceDate,
        price: consultType.price,
      }
    : {
        applicantName: trainingType.applicantName,
        applicantEmail: trainingType.applicantEmail,
        consultationType: trainingType.trainingType,
        choiceDate: trainingType.choiceDate,
        price: trainingType.cost,
      };


      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const paymentDetails = {
          applicantName: displayType.applicantName,
          applicantEmail: displayType.applicantEmail,
          paymentFor: displayType.consultationType,
          amount: displayType.price
        }
         setLoading(true)
        try {
         const response = await apiClient.post(endpoints.checkout, paymentDetails)

          const paymentUrl = response.data

          window.location.href = paymentUrl
          
        } catch (error) {
          console.log(error)
          setMessage({errorMessage: ErrorFormatter(error)})
        }finally{
          setLoading(false)
        }
      }

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
          <img src="/assets/card.png" alt="about data action" />
        </div>
      </div>

      <div className="right flex-1 bg-transparentWhite p-2 lg:p-10 rounded-sm w-full">
        <AlertMessage alert={message} />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Heading text="Verification" className="text-center" />

          <Input
            placeholder=""
            value={`Payment for ${displayType.consultationType || ""}`}
          />
          <Input placeholder="" value={displayType.applicantName || ""} />
          <Input placeholder="" value={displayType.applicantEmail || ""} />
          <Input
            label="Start Date"
            value={
              displayType.choiceDate
                ? new Date(displayType.choiceDate).toLocaleDateString()
                : ""
            }
          />
          <SubmitButton
            className="w-full text-white"
            isLoading={loading}
            cost={`${
              displayType.price ? `${displayType.price} with Stripe` : " Checkout With Stripe"
            }`}
          >
            {loading ? "Please Wait..." : "Checkout With Stripe"}
            
          </SubmitButton>
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Payment;

