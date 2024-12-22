import ButtonLink from "@components/button/ButtonLink";
import { scrollUP } from "@components/footer/Footer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { DifficultyLevel } from "@customTypes/general";
import { ProjectDetails } from "@customTypes/projects";
import { paths } from "@routes/paths";
import { FaLock, FaPoundSign } from "react-icons/fa";

interface ProjectCardProps {
  projects: ProjectDetails[];
}

const ProjectCardSection = ({ projects }: ProjectCardProps) => {
  return (
    <div className="mt-48 xl:mt-36 flex flex-col items-center ">
      <Heading className=" text-4xl xl:text-5xl text-center">
        Data Projects To Get You Started
      </Heading>
      <Paragraph className=" mb-10 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        commodi quis, sit dolore ad omnis Lorem ipsum dolor sit amet consectetur
      </Paragraph>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full">
        {projects.length > 0 ? (
          projects.map((item) => (
            <div
              key={item._id}
              className="singleCard  bg-white/80 p-5 flex flex-col gap-3 justify-between rounded-md shadow-sm relative"
            >
              <div className=" flex items-center justify-between w-full capitalize">
                <small className="px-3 py-2 rounded absolute -left-0 top-1">
                  {" "}
                  {item.industry} Project{" "}
                </small>
                <small
                  className={`${item.difficultyLevel === DifficultyLevel.beginner ? "text-LightBlue" : item.difficultyLevel === DifficultyLevel.intermediate ? "text-yellow-400" : "text-danger"} text-LightBlue  px-3 py-2 rounded absolute -right-0 top-1`}
                >
                  {item.difficultyLevel} Level{" "}
                </small>
              </div>

              <SubHeading className="text-center font-extrabold mt-10">
                {item.title}
              </SubHeading>
              <Paragraph className="text-sm italic text-center">
                {item.purpose}
              </Paragraph>
              <div className="flex items-center gap-1">
                <div className="flex items-center text-md font-bold">
                  <FaPoundSign />
                  {item.price}
                </div>
                <FaLock className="text-yellow-500 text-sm" />
              </div>
              <small className="text-danger">{item.keytext}</small>
              <ButtonLink onClick={scrollUP} to={`${paths.projectSignup}/${item.slug}`} label="Buy Now"/>
            </div>
          ))
        ) : (
          <>
            {" "}
            <span className="text-gray text-center text-lg">
              No Projects found
            </span>
          </>
        )}
      </div>
       <div className="pagination my-20">
         
       </div>
    </div>
  );
};

export default ProjectCardSection;
