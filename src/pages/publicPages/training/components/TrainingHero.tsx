import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import Heading from "@components/heading/Heading";

const TrainingHero = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <PublicPageContainer
      className=""
      gradientColors={["#EDE7F4", "#EDE7F4", "#EDE7F4"]}
    >
      <div className="flex flex-col md:flex-row items-start">

        <div className="left flex-1">
          <Heading
            className="xmd:text-[35px] md:text-[20px] text-xlg xmd:text-left text-center"
            text="Empowering Your Skills"
          />
           <div className="w-full flex items-center">
              <div className="h-36 bg-[#706363] w-full hidden md:block"></div>
               <img src="/assets/trainingImage.png" alt="training" className=" w-full lg:w-[80%] block ml-auto z-20" />
           </div>
        </div>
        <div className=" flex-[1.5] bg-dark py-3 md:ml-[-50px]  md:pl-4 p-4">
           <div className="flex items-center justify-center gap-4 text-white/75 bg-dark/25 flex-wrap text-sm">
              <span className=" px-3 py-1 cursor-pointer border hover:border-gray">Data Analytics</span>
              <span className=" px-3 py-1 cursor-pointer border hover:border-gray">Power Platform</span>
              <span className=" px-3 py-1 cursor-pointer border hover:border-gray">Power Automate</span>
              <span className=" px-3 py-1 cursor-pointer border hover:border-gray">UI/UX Design</span>
              <span className=" px-3 py-1 cursor-pointer border hover:border-gray">Data Analytics</span>
           </div>
           <div className="formBox mx-auto w-full md:w-[80%] mt-10">
           <Heading
            className=" text-sm xmd:text-[25px] text-xlg xmd:text-left text-center font-light font-Lexend text-white/75"
            text="Register for one of our tech courses today!"
          />
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
                <Input className="bg-[#EDE7F4]" placeholder="Full Name"/>
                <Input className="bg-[#EDE7F4]" placeholder="Email"/>
               </div>
                <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
                 <Select options={options} className="bg-[#EDE7F4] text-sm" placeholder="Select Project Area"/>
                <Input className="bg-[#EDE7F4]" placeholder="Email"/>
               </div>
               <div className="my-4">
                <SubmitButton label="submit" className="px-6 rounded text-white"/>
               </div>
            </form>
           </div>
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default TrainingHero;
