import { SubmitButton } from "@components/button/SubmitButton";
import Select from "@components/form/Select";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { ProjectDetails } from "@customTypes/projects";
import { FormEvent, useEffect, useState } from "react";

interface FilterSectionProps {
  projects: ProjectDetails[];
  allProjects: ProjectDetails[]; // To keep track of the unfiltered data
  setProjects: React.Dispatch<React.SetStateAction<ProjectDetails[]>>;
}

const FilterSection = ({ allProjects, setProjects }: FilterSectionProps) => {
  // Initial States
  const [industry, setIndustry] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("");

  //  Filter AllProducts Based on Items
  const [filteredTitles, setFilteredTitles] = useState<ProjectDetails[]>([]);

  // Group projects by industry and calculate counts
  const industryCounts = allProjects.reduce<Record<string, number>>(
    (acc, item) => {
      const industry = item.industry.toLowerCase();
      acc[industry] = (acc[industry] || 0) + 1;
      return acc;
    },
    {},
  );

  // Get Purified Select Option Values from Projects to file the select Inputs for Industry, Ttile and Difficulty Levels

  const IndustryOptions = Array.from(
    new Map(
      allProjects.map((item) => [
        item.industry,
        {
          title: item.industry,
          _id: item._id,
          count: industryCounts[item.industry.toLowerCase()],
        },
      ]),
    ).values(),
  );

  const TitleOptions = Array.from(
    new Map(
      allProjects.map((item) => [
        item.title,
        { title: item.title, _id: item._id },
      ]),
    ).values(),
  );

  const DifficultyOptions = Array.from(
    new Map(
      allProjects.map((item) => [
        item.difficultyLevel,
        { title: item.difficultyLevel, _id: item._id },
      ]),
    ).values(),
  );

  const latestTitle = Array.from(
    new Map(
      filteredTitles.map((item) => [
        item.title,
        { title: item.title, _id: item._id },
      ]),
    ).values(),
  );

  const TitleToUse = industry || difficultyLevel ? latestTitle : TitleOptions;

  useEffect(() => {
    if (industry) {
      const filteredProjects = industry
        ? allProjects.filter(
            (project) =>
              project.industry.toLowerCase() === industry.toLowerCase(),
          )
        : allProjects;

      setFilteredTitles(filteredProjects);
    }
    if (difficultyLevel) {
      const filteredProjects = difficultyLevel
        ? allProjects.filter(
            (project) => project.difficultyLevel === difficultyLevel,
          )
        : allProjects;

      setFilteredTitles(filteredProjects);
      setIndustry("");
    }
  }, [industry, difficultyLevel]);

  // Reset filters when industry changes
  const handleIndustryChange = (selectedIndustry: string) => {
    setIndustry(selectedIndustry);

    setTitle(""); // Reset title filter
    setDifficultyLevel(""); // Reset difficulty level filter
  };

  // Combined filter function
  const handleFilters = () => {
    const filtered = allProjects.filter((project) => {
      return (
        (industry
          ? project.industry.toLowerCase() === industry.toLowerCase()
          : true) &&
        (title
          ? project.title.toLowerCase().includes(title.toLowerCase())
          : true) &&
        (difficultyLevel ? project.difficultyLevel === difficultyLevel : true)
      );
    });
    setProjects(filtered);
  };

  // Reapply filters whenever industry, title, or difficulty level changes
  useEffect(() => {
    handleFilters();
  }, [industry, title, difficultyLevel]);

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
    handleFilters();
  }

  return (
    <div className="">
      <Heading className="text-4xl xl:text-5xl">
        Data Projects To Get You Started
      </Heading>
      <Paragraph className="mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        commodi quis, sit dolore ad omnis...
      </Paragraph>
      <div className="flex flex-col gap-4 md:block relative bg-[url('/images/aboutPage/header.png')] bg-cover bg-center w-full p-5 h-96 xl:h-72">
        {/* Add an overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <form method="post" onSubmit={handleSubmit}>
          <div className="relative w-full z-10 m-auto md:my-14 flex flex-col md:flex-row items-center justify-around gap-4 bg-transparentWhite p-5">
            <div className="flex-1 w-full">
              <Select
                options={IndustryOptions}
                placeholder="Industry"
                name="industry"
                value={industry}
                onChange={(e) => handleIndustryChange(e.target.value)}
              />
            </div>
            <div className="flex-1 w-full">
              <Select
                options={TitleToUse}
                placeholder="Project Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex-1 w-full">
              <Select
                options={DifficultyOptions}
                placeholder="Difficulty Level"
                name="difficultyLevel"
                value={difficultyLevel}
                onChange={(e) => setDifficultyLevel(e.target.value)}
              />
            </div>
            <div className="flex-[0.5] flex w-full">
              <SubmitButton
                label="Search"
                className="md:ml-auto w-full md:w-[80%] !rounded-md"
              />
            </div>
          </div>
        </form>

        {IndustryOptions.length > 0 && (
          <div className="bg-white relative z-10 mt-6 xl:mt-14 p-5 xl:p-10 rounded-sm w-full xl:w-[80%] mx-auto">
            <div
              className="flex items-center justify-center gap-8 overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {IndustryOptions.map((item, index) => (
                <div key={index + 1} className="flex flex-col items-center">
                  <SubHeading className="whitespace-nowrap capitalize text-black">
                    {item.title}
                  </SubHeading>
                  <span className="text-xs bg-gray w-10 flex items-center justify-center rounded px-5">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
