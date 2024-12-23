import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import { scrollUP } from "@components/footer/Footer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import { CoursesDetail } from "@customTypes/course";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useEffect, useState } from "react";

const Register = () => {
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [choiceDate, setChoiceDate] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(today.getDate()).padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}`);
  }, []);

  const [courses, setCourses] = useState<CoursesDetail[]>([]);

  useEffect(()=>{
   const fetchServices = async() =>{
    try {
       const response = await apiClient.get(endpoints.getAllCourses)
       setCourses(response.data)
    } catch (error) {
      setMessage({errorMessage: ErrorFormatter(error), successMessage: null})
    }
   }
   fetchServices()
  },[])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formDetails = {
      applicantName,
      applicantEmail,
      trainingType,
      phoneNumber,
      choiceDate,
      comment,
    };

    try {
      await apiClient.post(endpoints.applyForTraining, formDetails);

      setMessage({
        errorMessage: null,
        successMessage:
          "Successfull, We will get in touch shortly",
      });

      setApplicantName("");
      setApplicantEmail("");
      setTrainingType("");
      setChoiceDate("");
      setPhoneNumber("");
      setComment("");
      scrollUP()
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
    <PublicPageContainer gradientDirection="45deg">
      <div className="w-full xl:w-[80%] p-5 bg-white mx-auto">
        <AlertMessage alert={message} />
        <Heading className="text-center">Register for Training</Heading>

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
            <Input
              type="text"
              label="Phone Number"
              placeholder="Phone No"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Select
              options={courses}
              selectLabel="Training Type"
              name="trainingType"
              value={trainingType}
              onChange={(e) => setTrainingType(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input
              type="date"
              label="Preferred Start Date*"
              name="choiceDate"
               className="!text-black/55"
               min={currentDate}
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
            // cost={`${serviceCost}`}
          />
        </form>
       
      </div>
    </PublicPageContainer>
  );
};

export default Register;
