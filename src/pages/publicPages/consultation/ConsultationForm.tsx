import { useEffect, useState } from "react";
import { SubmitButton } from "@components/button/SubmitButton";
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
import Paragraph from "@components/paragraph/Paragraph";

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

  const [currentDate, setCurrentDate] = useState("");


  const [services, setServices] = useState<ServicesDetail[]>([]);
  const [serviceCost, setServiceCost] = useState<string | number | undefined>('')

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(today.getDate()).padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}`);
  }, []);

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
      navigate(`${paths.payment}/${response.data._id}`)
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
    <div className="relative bg-[url('/images/aboutPage/header.png')] bg-cover bg-center w-full px-3 h-[150vh] lg:h-[100vh]">
    {/* Add an overlay */}
    <div className="absolute inset-0 bg-black/50"></div>
   
    <div className="relative z-10 w-full xl:w-1/2 flex flex-col gap-0 mx-auto py-5">
      <Heading
        className="text-center text-white font-Lexend !text-[38px] !xl:text-[50px] !font-extrabold"
        text="Schedule a Consultation"
      />
      <Paragraph
        className="text-white text-center font-semibold text-sm"
        text="To inquire about our services or request support, please use the consultation form below, or contact us directly through call or WhatsApp message"
      />
    </div>
    <div className="relative z-10 w-full xl:w-[60%] p-8 bg-white mx-auto rounded-sm lg:px-14">
      <AlertMessage alert={message} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          <Input
            type="text"
            label="Full Name *"
            placeholder="Full Name"
            name="applicantName"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            required
          />
          <Input
            type="email"
            label="Email *"
            placeholder="Email"
            name="applicantEmail"
            value={applicantEmail}
            onChange={(e) => setApplicantEmail(e.target.value)}
            required
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
            placeholder="preferred Date"
            className="!text-black/55 !w-full"
            value={choiceDate}
            min={currentDate}
            onChange={(e) => setChoiceDate(e.target.value)}
            required
          />
        </div>

        <SimpleTextArea
          label="Comment"
          placeholder="Your comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="h-28"
        />
        <SubmitButton
          label="Submit"
          className="text-white !rounded-md w-[180px] mx-auto text-sm"
          isLoading={loading}
          cost={`${serviceCost}`}
        />
      </form>
    </div>

  </div>


  );
};

export default Consultation;
