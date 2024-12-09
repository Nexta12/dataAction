import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import Heading from "@components/heading/Heading";


const Payment = () => {
  const options = [
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
  return (
    <PublicPageContainer
      className=" flex flex-col md:flex-row justify-between gap-12"
      gradientDirection="45deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
    >
      <div className="left flex-1 ">
        <Heading
          className=" xmd:text-left text-center font-semibold"
          text="Consultation service Payment"
        />
        <div className="flex justify-center items-center">
        <img src="/assets/card.png" alt="about data action" />
        </div>
      </div>

      <div className="right flex-1 ">
         <form action="">
            <Heading text="Payment"/>
            <Select options={options} placeholder="Payment For:"/>
            <Input placeholder="0000 0000 0000 0000"/>
            <div className="flex items-center justify-between gap-4">
            <Input placeholder="23 / 04" label="Expiring Date:"/>
            <Input placeholder="23 / 04" label="CVV:"/>
            </div>
            <SubmitButton>Pay $10</SubmitButton>
         </form>
      </div>

    </PublicPageContainer>
  );
};

export default Payment;
