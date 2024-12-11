import { useState } from "react";
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import { consultationTypes } from "@customTypes/consultationTypes";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { ErrorFormatter } from "@pages/errors/errorFormatter";

const Consultation = () => {
  // Define state for each input
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [choiceDate, setChoiceDate] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

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
    };

    try {
      await apiClient.post(endpoints.bookConsultation, formDetails);

      setMessage({
        errorMessage: null,
        successMessage: "Schedule booked successfully, We will revert as soon as possible",
      });

      setApplicantName("");
      setApplicantEmail("");
      setConsultationType("");
      setChoiceDate("");
      setComment("");
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
              options={consultationTypes}
              selectLabel="Preferred Consultation Type*"
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
            />
            <Input
              type="date"
              label="Preferred Date*"
              name="choiceDate"
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
          />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Consultation;
