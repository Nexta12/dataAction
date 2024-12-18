import { useEffect, useState } from "react";
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { ServicesDetail } from "@customTypes/Services";
import { useNavigate } from "react-router-dom";
import { paths } from "@routes/paths";

const Consultation = () => {
  // Define state for each input
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [choiceDate, setChoiceDate] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  const [services, setServices] = useState<ServicesDetail[]>([]);
  const [serviceCost, setServiceCost] = useState<string | number | undefined>('')

  useEffect(()=>{
    if(consultationType){
      const choiceService = services.find((item) => item.title === consultationType);
      setServiceCost(choiceService?.price)
      
    }

  },[consultationType, services])

  // Fetch Services
  
  useEffect(()=>{
   const fetchServices = async() =>{
    try {
       const response = await apiClient.get(endpoints.getAllServices)
       setServices(response.data)
    } catch (error) {
      setMessage({errorMessage: ErrorFormatter(error), successMessage: null})
    }
   }
   fetchServices()
  },[])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formDetails = {
      applicantName,
      applicantEmail,
      consultationType,
      choiceDate,
      comment,
      price: serviceCost
    };

    try {
     const response =  await apiClient.post(endpoints.bookConsultation, formDetails);

      setMessage({
        errorMessage: null,
        successMessage:
          "Schedule booked successfully, Redirecting to payment page",
      });

      setApplicantName("");
      setApplicantEmail("");
      setConsultationType("");
      setChoiceDate("");
      setComment("");
      setTimeout(()=>{
        navigate(`${paths.payment}/${response.data._id}`)
      },3000)
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
    <PublicPageContainer gradientDirection="45deg" className="lg:h-[100vh]">
      <div className="w-full xl:w-[80%] p-5 bg-white mx-auto">
        <AlertMessage alert={message} />
        <Heading className="text-center mb-4">Schedule a Consultation</Heading>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input
              type="text"
              label="Full Name *"
              placeholder="Full Name"
              name="applicantName"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
            <Input
              type="email"
              label="Email *"
              placeholder="Email"
              name="applicantEmail"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Select
              options={services}
              selectLabel="Preferred Consultation Type*"
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
            />
            <Input
              type="date"
              label="Preferred Date*"
              name="choiceDate"
              className="!text-black/55"
              value={choiceDate}
              onChange={(e) => setChoiceDate(e.target.value)}
            />
          </div>

          <SimpleTextArea
            label="Comment"
            placeholder="Your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="h-32"
          />
          <SubmitButton
            label="Submit"
            className="text-white !rounded-md w-[180px] mx-auto"
            isLoading={loading}
            cost={`${serviceCost}`}
          />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Consultation;
