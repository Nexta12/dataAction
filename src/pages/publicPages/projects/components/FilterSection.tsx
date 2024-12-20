import { SubmitButton } from "@components/button/SubmitButton";
import Select from "@components/form/Select";
import SubHeading from "@components/subHeading/SubHeading";
import { DifficultyLevel } from "@customTypes/general";
import {
  LuAlignCenterHorizontal,
  LuAlignVerticalJustifyEnd,
  LuAntenna,
  LuAperture,
} from "react-icons/lu";

const FilterSection = () => {
  const InterestAreas = [
    { title: "Real Esate", _id: "1" },
    { title: "Agriculture", _id: "2" },
    { title: "Aviation", _id: "3" },
  ];

  const difficultyLevel = [
    { title: DifficultyLevel.advanced, _id: "1" },
    { title: DifficultyLevel.beginner, _id: "2" },
    { title: DifficultyLevel.intermediate, _id: "3" },
  ];

  return (
    <div className=" flex flex-col gap-4 md:block relative bg-[url('/images/aboutPage/header.png')] bg-cover bg-center w-full p-5 h-80  ">
      {/* Add an overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative w-full z-10 m-auto md:my-14 flex flex-col md:flex-row items-center justify-around gap-4 bg-transparentWhite p-5">
        <div className=" flex-1 w-full">
          <Select options={InterestAreas} placeholder="Industry" />
        </div>
        <div className="flex-1 w-full">
          <Select options={difficultyLevel} placeholder="Difficulty Level" />
        </div>
        <div className="flex-[0.5] flex w-full">
          <SubmitButton
            label="Search"
            className="md:ml-auto w-full md:w-[80%] !rounded-md"
          />
        </div>
      </div>

      <div className=" relative z-10 bg-white w-full md:w-[90%] mx-auto p-2 xl:p-10 rounded-sm grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 ">
        <div className=" flex flex-col items-center">
          <LuAlignCenterHorizontal className="text-[30px] lg:text-[40px] text-black/60" />
          <SubHeading className="whitespace-nowrap" >Real Estate</SubHeading>
          <span className="text-xs px-4 py-1 bg-gray rounded-full ">2346</span>
        </div>
        <div className=" flex flex-col items-center">
          <LuAperture  className="text-[30px] lg:text-[40px] text-black/60"/>
          <SubHeading className="whitespace-nowrap" >Real Estate</SubHeading>
          <span className="text-xs px-4 py-1 bg-gray rounded-full ">2346</span>
        </div>
        <div className=" flex flex-col items-center">
          <LuAntenna className="text-[30px] lg:text-[40px] text-black/60" />
          <SubHeading className="whitespace-nowrap" >Real Estate</SubHeading>
          <span className="text-xs px-4 py-1 bg-gray rounded-full ">2346</span>
        </div>
        <div className=" flex flex-col items-center">
          <LuAlignVerticalJustifyEnd  className="text-[30px] lg:text-[40px] text-black/60"/>
          <SubHeading className="whitespace-nowrap" >Real Estate</SubHeading>
          <span className="text-xs px-4 py-1 bg-gray rounded-full ">2346</span>
        </div>
        <div className="hidden xl:flex flex-col items-center">
          <LuAlignVerticalJustifyEnd className="text-[30px] lg:text-[40px] text-black/60" />
          <SubHeading className="whitespace-nowrap" >Real Estate</SubHeading>
          <span className="text-xs px-4 py-1 bg-gray rounded-full ">2346</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
