import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";

const Consultation = () => {
  const consultTationType = [
    { label: "Training & Development", value: "Training & Development" },
    { label: "CV Building", value: "CV Building" },
    { label: "Interview Prep", value: "Interview Prep" },
    { label: "Dashboard Development", value: "Dashboard Development" },
    { label: "Internship", value: "Internship" },
    { label: "Career Advice", value: "Career Advice" },
    { label: "Power App Development", value: "Power App Development" },
    { label: "Process Automation", value: "Process Automation" },
    {
      label: "Work Portfolio Development",
      value: "Work Portfolio Development",
    },
    { label: "Others", value: "Others" },
  ];

  const handleChange = () => {
    console.log("ello");
  };
  return (
    <PublicPageContainer gradientDirection="45deg">
      <div className="w-full xl:w-[80%] p-5 bg-white mx-auto">
        <Heading className="text-center">Schedule a Consultation</Heading>

        <form action="" method="post" className="flex flex-col gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input type="text" label="Full Name" placeholder="Full Name" />
            <Input type="email" label="Email" placeholder="Email" />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Select
              options={consultTationType}
              selectLabel="Preferred Consultation Type"
              onChange={handleChange}
            />

            <Input type="date" label="Preferred Date" />
          </div>

          <SimpleTextArea label="Comment" placeholder="Your comment here" />
          <SubmitButton label="Submit" className="text-white !rounded-md" />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Consultation;
