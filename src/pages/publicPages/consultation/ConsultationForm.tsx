
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import { useState } from "react";

const Consultation = () => {
  // Define state for each input
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const consultationTypes = [
    { label: "Training & Development", value: "Training & Development" },
    { label: "CV Building", value: "CV Building" },
    { label: "Interview Prep", value: "Interview Prep" },
    { label: "Dashboard Development", value: "Dashboard Development" },
    { label: "Internship", value: "Internship" },
    { label: "Career Advice", value: "Career Advice" },
    { label: "Power App Development", value: "Power App Development" },
    { label: "Process Automation", value: "Process Automation" },
    { label: "Work Portfolio Development", value: "Work Portfolio Development" },
    { label: "SQL", value: "SQL" },
    { label: "Others", value: "Others" },
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const formData = { fullName, email, consultationType, preferredDate, comment };
    console.log("Form submitted with data:", formData);

    // Optionally, send the form data to an API or backend
    setSuccessMessage(" submitted successfully!");
    // Clear the form
    setFullName("");
    setEmail("");
    setConsultationType("");
    setPreferredDate("");
    setComment("");
  };

  return (
    <PublicPageContainer gradientDirection="45deg" className="h-screen">
      <div className="w-full xl:w-[80%] p-5 bg-white mx-auto">
        {successMessage && (
          <div className="w-full text-center text-md text-green-500">
            {successMessage}
          </div>
        )}

        <Heading className="text-center mb-4">Schedule a Consultation</Heading>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input
              type="text"
              label="Full Name"
              placeholder="Full Name"
              name="fullName"
              value={fullName}
              required={true}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Select
              options={consultationTypes}
              selectLabel="Preferred Consultation Type"
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
            />
            <Input
              type="date"
              label="Preferred Date"
              name="preferredDate"
              value={preferredDate}
              required={true}
              onChange={(e) => setPreferredDate(e.target.value)}
            />
          </div>

          <SimpleTextArea
            label="Comment"
            placeholder="Your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <SubmitButton label="Submit" className="text-white !rounded-md w-[180px] mx-auto" />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Consultation;

