import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import { countries } from "../../../../dummyData/countries";

const Register = () => {
  const countriesData = countries;
  const consultationData = [
    { label: "Short Consultation", value: "Short Consultation" },
    { label: "Long Consultation", value: "Long Consultation" },
    { label: "Private Consultion", value: "Private Consultion" },
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
              options={countriesData}
              selectLabel="Country of Residence"
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Select
              options={consultationData}
              selectLabel="Consultation Type"
              onChange={handleChange}
            />

            <Input type="date" label="Preffered Start Date" />
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

export default Register;
