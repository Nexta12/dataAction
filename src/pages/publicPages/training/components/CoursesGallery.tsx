import ButtonLink from "@components/button/ButtonLink";
import PublicPageContainer from "@components/container/PublicPageContainer";
import { paths } from "@routes/paths";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

const CoursesGallery = () => {
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
            <span className="font-bold">All Courses</span>

            <Link to="/">Data Analytics</Link>
            <Link to="/">Power Platform</Link>
            <Link to="/">Microsoft Excel</Link>
            <Link to="/">Web Development</Link>
            <Link to="/">Mobile App Development</Link>
            <Link to="/">Programming</Link>
            <Link to="/">UI/UX Design</Link>
          </div>

          <div className=" hidden lg:flex flex-col gap-4 font-light underline mt-12 text-dark">
            <Link to="/">Book a consultation</Link>
            {/* <Link to="/">Dashboards</Link> */}
            <Link to="/">Request a project</Link>
            <Link to="/">Speak to someone</Link>
            <Link to="/">Apply for scholarship</Link>
            <Link to="/">Submit CV</Link>
          </div>
        </div>

        {/* Profucts right */}
        <div className="right flex-[4]">
          <div className="w-full mb-4 font-bold flex flex-col-reverse md:flex-row gap-4 py-4 md:py-0 items-center justify-between ">
            <h1 className="hidden lg:block text-sm font-semibold">
              30 Products Listed
            </h1>

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

              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              <CourseCard/>
              <CourseCard/>

            </div>
          </div>
        </div>
      </div>
  
  );
};

export default CoursesGallery;
