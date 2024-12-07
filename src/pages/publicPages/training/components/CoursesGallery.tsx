import ButtonLink from "@components/button/ButtonLink";
import PublicPageContainer from "@components/container/PublicPageContainer";
import { paths } from "@routes/paths";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const CoursesGallery = () => {
  return (
    <PublicPageContainer>
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

              <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  flex flex-col justify-between ">
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={"/assets/rectangle.png"}
                    alt="earphone"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-sm flex flex-col gap-3">
                  <span className="font-bold capitalize text-dark">
                    Power BI powerful
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet ad numquam quibusdam exercitationem facere{" "}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-LightBlue font-semibold">$200</span>
                    <span className="text-2xs text-light">
                      Payable upto 2 Instalments
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xs text-light font-bold">
                      Duration: 12weeks
                    </span>
                    <span className="text-2xs text-light">6hrs per week</span>
                  </div>
                  <div className="text-2xs text-light">
                    56 Students enrolled
                  </div>
                </div>

                <div className="flex text-xs items-center justify-between gap-4 mt-4">
                  <ButtonLink
                    to="/register"
                    label="Register Now"
                    className="hover:bg-dark"
                  ></ButtonLink>

                  <ButtonLink
                    to={`${paths.courseDetails}/sdhhsjsksk`}
                    label="View Details"
                    className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                  ></ButtonLink>
                </div>
                <div className=" text-2xs my-3">Download Course outline</div>
              </div>
              <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  flex flex-col justify-between ">
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={"/assets/rectangle.png"}
                    alt="earphone"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-sm flex flex-col gap-3">
                  <span className="font-bold capitalize text-dark">
                    Power BI powerful
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet ad numquam quibusdam exercitationem facere{" "}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-LightBlue font-semibold">$200</span>
                    <span className="text-2xs text-light">
                      Payable upto 2 Instalments
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xs text-light font-bold">
                      Duration: 12weeks
                    </span>
                    <span className="text-2xs text-light">6hrs per week</span>
                  </div>
                  <div className="text-2xs text-light">
                    56 Students enrolled
                  </div>
                </div>

                <div className="flex text-xs items-center justify-between gap-4 mt-4">
                  <ButtonLink
                    to="/register"
                    label="Register Now"
                    className="hover:bg-dark"
                  ></ButtonLink>

                  <ButtonLink
                    to={`${paths.courseDetails}/sdhhsjsksk`}
                    label="View Details"
                    className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                  ></ButtonLink>
                </div>
                <div className=" text-2xs my-3">Download Course outline</div>
              </div>
              <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  flex flex-col justify-between ">
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={"/assets/rectangle.png"}
                    alt="earphone"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-sm flex flex-col gap-3">
                  <span className="font-bold capitalize text-dark">
                    Power BI powerful
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet ad numquam quibusdam exercitationem facere{" "}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-LightBlue font-semibold">$200</span>
                    <span className="text-2xs text-light">
                      Payable upto 2 Instalments
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xs text-light font-bold">
                      Duration: 12weeks
                    </span>
                    <span className="text-2xs text-light">6hrs per week</span>
                  </div>
                  <div className="text-2xs text-light">
                    56 Students enrolled
                  </div>
                </div>

                <div className="flex text-xs items-center justify-between gap-4 mt-4">
                  <ButtonLink
                    to="/register"
                    label="Register Now"
                    className="hover:bg-dark"
                  ></ButtonLink>

                  <ButtonLink
                    to={`${paths.courseDetails}/sdhhsjsksk`}
                    label="View Details"
                    className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                  ></ButtonLink>
                </div>
                <div className=" text-2xs my-3">Download Course outline</div>
              </div>
              <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  flex flex-col justify-between ">
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={"/assets/rectangle.png"}
                    alt="earphone"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-sm flex flex-col gap-3">
                  <span className="font-bold capitalize text-dark">
                    Power BI powerful
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet ad numquam quibusdam exercitationem facere{" "}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-LightBlue font-semibold">$200</span>
                    <span className="text-2xs text-light">
                      Payable upto 2 Instalments
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xs text-light font-bold">
                      Duration: 12weeks
                    </span>
                    <span className="text-2xs text-light">6hrs per week</span>
                  </div>
                  <div className="text-2xs text-light">
                    56 Students enrolled
                  </div>
                </div>

                <div className="flex text-xs items-center justify-between gap-4 mt-4">
                  <ButtonLink
                    to="/register"
                    label="Register Now"
                    className="hover:bg-dark"
                  ></ButtonLink>

                  <ButtonLink
                    to={`${paths.courseDetails}/sdhhsjsksk`}
                    label="View Details"
                    className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                  ></ButtonLink>
                </div>
                <div className=" text-2xs my-3">Download Course outline</div>
              </div>
              <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  flex flex-col justify-between ">
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={"/assets/rectangle.png"}
                    alt="earphone"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-sm flex flex-col gap-3">
                  <span className="font-bold capitalize text-dark">
                    Power BI powerful
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet ad numquam quibusdam exercitationem facere{" "}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-LightBlue font-semibold">$200</span>
                    <span className="text-2xs text-light">
                      Payable upto 2 Instalments
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xs text-light font-bold">
                      Duration: 12weeks
                    </span>
                    <span className="text-2xs text-light">6hrs per week</span>
                  </div>
                  <div className="text-2xs text-light">
                    56 Students enrolled
                  </div>
                </div>

                <div className="flex text-xs items-center justify-between gap-4 mt-4">
                  <ButtonLink
                    to="/register"
                    label="Register Now"
                    className="hover:bg-dark"
                  ></ButtonLink>

                  <ButtonLink
                    to={`${paths.courseDetails}/sdhhsjsksk`}
                    label="View Details"
                    className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                  ></ButtonLink>
                </div>
                <div className=" text-2xs my-3">Download Course outline</div>
              </div>
              <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  flex flex-col justify-between ">
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={"/assets/rectangle.png"}
                    alt="earphone"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-sm flex flex-col gap-3">
                  <span className="font-bold capitalize text-dark">
                    Power BI powerful
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet ad numquam quibusdam exercitationem facere{" "}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-LightBlue font-semibold">$200</span>
                    <span className="text-2xs text-light">
                      Payable upto 2 Instalments
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xs text-light font-bold">
                      Duration: 12weeks
                    </span>
                    <span className="text-2xs text-light">6hrs per week</span>
                  </div>
                  <div className="text-2xs text-light">
                    56 Students enrolled
                  </div>
                </div>

                <div className="flex text-xs items-center justify-between gap-4 mt-4">
                  <ButtonLink
                    to="/register"
                    label="Register Now"
                    className="hover:bg-dark"
                  ></ButtonLink>

                  <ButtonLink
                    to={`${paths.courseDetails}/sdhhsjsksk`}
                    label="View Details"
                    className="bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                  ></ButtonLink>
                </div>
                <div className=" text-2xs my-3">Download Course outline</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default CoursesGallery;
