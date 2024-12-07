import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";

const Register = () => {
  const consultationData = [
    { label: "Data Analytics", value: "Data Analytics" },
    { label: "Power Apps Training", value: "Power Apps Training" },
    { label: "Power Automate", value: "Power Automate" },
    { label: "Power Virtual Assitant", value: "Power Virtual Assitant" },
    { label: "Microsoft Excel", value: "Microsoft Excel" },
    { label: "Power BI Training", value: "Power BI Training" },
    { label: "UI/UX Training", value: "UI/UX Training" },
    { label: "Excel Crash Course", value: "Excel Crash Course" },
    { label: "Business Analysis", value: "Business Analysis" },
  ];
  const handleChange = () => {
    console.log("ello");
  };

  return (
    <PublicPageContainer gradientDirection="45deg">
      <div className="w-full xl:w-[80%] p-5 bg-white mx-auto">
        <Heading className="text-center">Register for Training</Heading>

        <form action="" method="post" className="flex flex-col gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input type="text" label="Full Name" placeholder="Full Name" />
            <Input type="email" label="Email" placeholder="Email" />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input type="text" label="Phone Number" placeholder="Phone No" />
            <Select
              options={consultationData}
              selectLabel="Training Type"
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input type="date" label="Preffered Start Date" />
          </div>

          <SimpleTextArea label="Comment" placeholder="Your comment here" />
          <SubmitButton
            label="Submit"
            className="text-white !rounded-md"
          />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Register;
