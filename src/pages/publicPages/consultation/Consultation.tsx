import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";

const Consultation = () => {
  const consultTationType = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
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
            <Input type="text" label="Phone Number" placeholder="Phone No" />
            <Input type="text" label="Location" placeholder="Location" />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Select
              options={consultTationType}
              selectLabel="Consultation Type"
              onChange={handleChange}
            />

            <div className="w-full flex  items-center justify-between gap-3">
              <Input type="date" label="Schedule" />
              <Input type="time" label="Time" />
            </div>
          </div>

          <SimpleTextArea label="Comment" placeholder="Your comment here" />
          <SubmitButton
            label="Submit and Make Payment"
            className="text-white !rounded-md"
          />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Consultation;
