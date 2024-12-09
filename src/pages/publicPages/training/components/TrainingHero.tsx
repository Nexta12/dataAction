import { SubmitButton } from "@components/button/SubmitButton";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import Marquee from "react-fast-marquee";

const TrainingHero = () => {
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
    { label: "SQL", value: "SQL" },
  ];

  return (


      <div className="flex flex-col lg:flex-row items-start  bg-[linear-gradient(to_right,_#c7e8f2,_#EDE7F4_20%,_#c7e8f2)] px-4 md:px-0">
        <div className="left flex-1 w-full">
          <Heading
            className="xmd:text-[35px] md:text-[20px] lg:text-md  text-center"
            text="Empowering Your Skills"
          />
          <div className="w-full flex items-center">
            <div className="h-48 bg-[#706363] w-full hidden xl:block ml-[-250px]"></div>
            <img
              src="/assets/trainingImage.png"
              alt="training"
              className=" w-full xl:w-[80%] block ml-auto z-20"
            />
          </div>
        </div>

        <div className=" flex-[1.5] w-full bg-dark p-3 ">
          <div className=" hidden mx-auto  xl:flex items-center justify-center gap-4 text-white/75 bg-dark/25  text-sm">
            <Marquee className="py-3" pauseOnHover>
              <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
                Data Analytics
              </span>
              <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
                Power Platform
              </span>
              <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
                Power Automate
              </span>
              <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
                UI/UX Design
              </span>
              <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
                Data Analytics
              </span>
            </Marquee>
          </div>
          <div className="formBox mx-auto w-full md:w-[80%] mt-10">
            <Heading
              className=" text-sm xmd:text-[25px] text-xlg xmd:text-left text-center font-light font-Lexend text-white/75"
              text="Register for one of our tech courses today!"
            />
            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
                <Input className="bg-[#EDE7F4]" placeholder="Full Name" />
                <Input className="bg-[#EDE7F4]" placeholder="Email" />
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
                <Input className="bg-[#EDE7F4]" placeholder="Phone" />
                <Select
                  options={options}
                  className="bg-[#EDE7F4] text-sm"
                  placeholder="Preferred Course"
                />
              </div>
              <SimpleTextArea className="bg-[#EDE7F4] h-20" placeholder="Comment"/>
              <div className="mb-2">
                <SubmitButton
                  label="submit"
                  className="px-6 text-white w-[200px] rounded-lg "
                />
              </div>
            </form>
          </div>
        </div>
      </div>

 
  );
};

export default TrainingHero;
