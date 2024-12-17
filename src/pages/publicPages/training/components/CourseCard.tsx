import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import ButtonLink from "@components/button/ButtonLink";
import { scrollUP } from "@components/footer/Footer";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { CoursesDetail } from "@customTypes/course";
import { paths } from "@routes/paths";
import { useState } from "react";
import { FaPoundSign } from "react-icons/fa";

interface CourseCardProps {
  course: CoursesDetail;
}

const handleDownload = async (courseId: string, setDownloading: React.Dispatch<React.SetStateAction<boolean>>) => {
  setDownloading(true);

  try {
    await apiClient.post(`${endpoints.downloadOutline}/${courseId}`);
    console.log("Download successful");
  } catch (error) {
    console.error(error);
    alert("An error occurred while downloading the course outline.");
  } finally {
    setDownloading(false);
  }
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [downloading, setDownloading] = useState<boolean>(false);

  return (
    <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full flex flex-col justify-between">
      <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
        <img src={course?.images[0]?.url} alt="Images" className="w-full h-full object-cover" />
      </div>

      <div className="text-sm flex flex-col gap-3">
        <SubHeading className="capitalize">{course?.title}</SubHeading>
        <Paragraph>{course.snippet || "We are glad we are here"}</Paragraph>
        <div className="flex items-center justify-between">
          <Paragraph className="text-LightBlue flex gap-0 items-center">
            <FaPoundSign />
            {course.price}
          </Paragraph>
          <span className="text-2xs text-light">Payable upto 2 Instalments</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xs text-light font-bold">Duration: {course.duration}</span>
          <span className="text-2xs text-light">{course.weeklyTimeRequirement}</span>
        </div>
        <div className="text-2xs text-light">{course.totalEnrolled} Students enrolled</div>
      </div>

      <div className="flex text-xs items-center justify-between gap-4 mt-4">
        <ButtonLink
          to="/register"
          label="Register Now"
          className="hover:bg-dark"
          onClick={scrollUP}
        ></ButtonLink>

        <ButtonLink
          to={`${paths.courseDetails}/${course._id}`}
          label="View Details"
          onClick={scrollUP}
          className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
        ></ButtonLink>
      </div>

      {/* Download button */}
      <button
        onClick={() => handleDownload(course._id, setDownloading)}
        className="text-blue-500 my-3"
        disabled={downloading}
      >
        {downloading ? "Downloading..." : "Download Course outline"}
      </button>
    </div>
  );
};

export default CourseCard;
