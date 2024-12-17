import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import SubHeading from "@components/subHeading/SubHeading";
import Paragraph from "@components/paragraph/Paragraph";
import { useEffect, useState } from "react";
import { CoursesDetail } from "@customTypes/course";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { scrollUP } from "@components/footer/Footer";

const CoursesGallery = () => {
  const [courses, setCourses] = useState<CoursesDetail[]>([]);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await apiClient.get(endpoints.getAllCourses);
        setCourses(response.data);
      } catch (error) {
        setMessage({
          errorMessage: ErrorFormatter(error),
          successMessage: null,
        });
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 my-6">
      {/* Category Left */}
      <div className="left flex-1">
        {/* <h1 className="hidden lg:block text-green font-bold mb-4">
            Categories
          </h1> */}
        <div
          className="flex whitespace-nowrap items-center lg:items-start gap-4 overflow-x-auto overflow-y-hidden lg:flex-col"
          style={{ scrollbarWidth: "none" }}
        >
          <SubHeading>All Courses</SubHeading>
          {courses.map((item)=>(
             <Link to={`/course/${item._id}`} className="text-wrap">{item.title}</Link>
          ))}
         
        </div>

        <div className=" hidden lg:flex flex-col gap-4 font-light underline mt-12 text-dark">
          <Link to="/book-consultation" onClick={scrollUP}>Book a consultation</Link>
          {/* <Link to="/">Dashboards</Link> */}
          <Link to="/">Request a project</Link>
          <Link to="/">Speak to someone</Link>
          <Link to="/">Apply for scholarship</Link>
          <Link to="/">Submit CV</Link>
        </div>
      </div>

      {/* Profucts right */}
      <div className="right flex-[4]">
        <AlertMessage alert={message} />
        <div className="w-full mb-4 font-bold flex flex-col-reverse md:flex-row gap-4 py-4 md:py-0 items-center justify-between ">
          <Paragraph className="hidden lg:block"> {courses.length} Courses Available</Paragraph>

          <div className=" flex items-center pl-2 text-xs border rounded-sm py-2 w-full md:w-52">
            <BsSearch className="text-md mr-1" />
            <input
              type="search"
              name=""
              placeholder="Search here"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Product cards */}
        <div className="bottom">
          <div className="productCards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((item)=>(
              <CourseCard course={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesGallery;
