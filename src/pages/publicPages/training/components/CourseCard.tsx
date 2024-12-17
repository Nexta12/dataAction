import React, { useState } from "react";
import { endpoints } from "@api/endpoints";
import ButtonLink from "@components/button/ButtonLink";
import { scrollUP } from "@components/footer/Footer";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { CoursesDetail } from "@customTypes/course";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { paths } from "@routes/paths";
import { FaPoundSign } from "react-icons/fa";

interface CourseCardProps {
  course: CoursesDetail;
}

const handleDownload = (
  courseId: string,
  setDownloading: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage: React.Dispatch<React.SetStateAction<ErrorMessageProps>>
) => {
  setDownloading(true);

  try {
    const downloadUrl = `${import.meta.env.VITE_API_BASE_URL}${endpoints.downloadOutline}/${courseId}`;
    window.location.href = downloadUrl;
  } catch (error) {
    setMessage({
      successMessage: null,
      errorMessage: "Failed to initiate the download.",
    });
  } finally {
    setDownloading(false);
  }
};


const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  return (
    <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full flex flex-col justify-between">
      {/* Error or success message */}
      <AlertMessage alert={message} />

      {/* Course image */}
      <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
        <img
          src={course?.images[0]?.url || "/assets/rectangle.png"}
          alt="Images"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course details */}
      <div className="text-sm flex flex-col gap-3">
        <SubHeading className="capitalize">{course?.title}</SubHeading>
        <Paragraph>{course.snippet || "We are glad we are here"}...more</Paragraph>
        <div className="flex items-center justify-between">
          <Paragraph className="text-LightBlue flex gap-0 items-center font-Lexend text-xl">
            <FaPoundSign className="text-sm" />
            {course.price}
          </Paragraph>
          <span className="text-2xs text-light">Payable up to 2 Instalments</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xs text-light font-bold">
            Duration: {course.duration}
          </span>
          <span className="text-2xs text-light">{course.weeklyTimeRequirement}</span>
        </div>
        <div className="text-2xs text-light">{course.totalEnrolled} Students enrolled</div>
      </div>

      {/* Action buttons */}
      <div className="flex text-xs items-center justify-between gap-4 mt-4">
        <ButtonLink
          to="/register"
          label="Register Now"
          className="hover:bg-dark"
          onClick={scrollUP}
        ></ButtonLink>

        <ButtonLink
          to={`${paths.courseDetails}/${course.slug}`}
          label="View Details"
          onClick={scrollUP}
          className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
        ></ButtonLink>
      </div>

      {/* Download button */}
      <button
        onClick={() => handleDownload(course._id, setDownloading, setMessage)}
        className={`text-blue-500 my-3 ${
          downloading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={downloading}
      >
        {downloading ? "Downloading..." : "Download Course Outline"}
      </button>
    </div>
  );
};

export default CourseCard;
