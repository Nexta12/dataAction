import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { paths } from "@routes/paths";
import useAuthStore from "@store/authStore";
import { ReactNode, useState } from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { BsCaretDown, BsGraphUp, BsPeople } from "react-icons/bs";
import { FaList, FaObjectGroup, FaThList } from "react-icons/fa";
import { IoIosLogOut, IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import {
  MdDashboard,
  MdOutlineGroups2,
  MdOutlinePayments,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DashBoardMenu = [
  {
    title: "Overview",
    link: paths.adminDashboard,
    icon: MdDashboard,
  },
  {
    title: "Training Sign-ups",
    link: paths.traininRequests,
    icon: MdOutlineGroups2,
  },
  {
    title: "Consultations",
    link: paths.consultationRequests,
    icon: FaObjectGroup,
  },
  {
    title: "Contact Messages",
    link: paths.contactMessages,
    icon: FaThList,
  },
  {
    title: "Services",
    link: paths.services,
    icon: FaList,
  },
  {
    title: "Payments",
    link: paths.paymentList,
    icon: MdOutlinePayments,
  },
  {
    title: "Courses",
    link: paths.courses,
    icon: BsGraphUp,
  },
  {
    title: "Our Team",
    link: paths.users,
    icon: BsPeople,
  },
  {
    title: "Projects",
    link: paths.projectsList,
    icon: BsPeople,
  },
  {
    title: "Logout",
    link: "#",
    icon: IoIosLogOut,
  },
];

interface AdminContent {
  children: ReactNode;
}

const AdminContainer = ({ children }: AdminContent) => {
  const [sidepanel, setSidepanel] = useState(false);
  const { user } = useAuthStore();

  const location = useLocation();
  const pathname = location.pathname;
  const { logout } = useAuthStore();

  const handleSidepanel = () => setSidepanel(!sidepanel);

  const handleLogout = async () => {
    logout();
    await apiClient.post(endpoints.logout);
  };

  const navigate = useNavigate()

  return (
    <section className="w-full m-0 p-0 bg-admingray relative">
      {/* Header */}
      <div className="header bg-admingray p-8  xl:px-3 mb-2 shadow flex gap-6 items-center justify-between sticky top-0 z-50 ">
        <div className="left flex items-center  gap-4 md:gap-12">
          {!sidepanel ? (
            <LuMenu className=" md:hidden text-xl" onClick={handleSidepanel} />
          ) : (
            <IoMdClose
              className="md:hidden text-xl rounded-full border border-danger"
              onClick={handleSidepanel}
            />
          )}
          <Link to={paths.Index} >
          <div className="logo flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-9" />
            <span className="font-bold">DataActions</span>
          </div>
          </Link>
          <div className="hidden xl:flex items-center gap-2 w-[350px]  border border-gray p-2">
            <BiSearch />
            <input
              type="text"
              placeholder="Search here"
              className="flex-grow h-full bg-transparent border-none outline-none focus:outline-none"
            />
          </div>
        </div>

        <div className="right flex items-center gap-4">
          <div className="relative flex items-center cursor-pointer">
            <BiBell className="text-lg" />
            <span className="w-5 h-5 rounded-full bg-danger text-white flex items-center justify-center text-xs font-bold absolute top-[-10px] right-0">
              2
            </span>
            <BsCaretDown className="mt-4 text-xs ml-0 hidden" />
          </div>
          <div className="hidden xl:flex flex-col text-xs text-right">
            <span className="font-bold">
              {user?.firstName} {user?.lastName}{" "}
            </span>
            <span>{user?.role}</span>
          </div>
          <div className="userAvater w-8 h-8 rounded-full flex items-center justify-center object-cover cursor-pointer">
            <img
              src="/assets/p1.png"
              alt="phote"
              className="w-8 h-8 rounded-full flex items-center justify-center object-cover"
            />
          </div>
        </div>
      </div>
       
      <div className="mainbody flex items-start gap-8 relative">
        {/* Sidebar  For Desktop*/}
        <div className="sidebar hidden md:block sticky top-0 flex-1 shadow bg-white border-r-2 border-LightBlue xl:pl-3   text-dark h-[100vh] ">
          <ul className="m-0 p-0 flex flex-col gap-1">
            {DashBoardMenu.map((item, index) => {
              const isActive =
                pathname === item.link || pathname.includes(item.link);

              if (item.title === "Logout") {
                return (
                  <li
                    onClick={handleLogout}
                    key={index}
                    className="flex items-center gap-2 cursor-pointer p-3 hover:bg-dark hover:text-white"
                  >
                    <item.icon className="" />{" "}
                    <span>{item.title}</span>
                  </li>
                );
              }
              return (
                <li
                  onClick={()=> navigate(item.link)}
                  key={index}
                  className={`flex items-center gap-2 cursor-pointer p-3 hover:bg-dark hover:text-white
                   ${isActive ? "bg-dark text-white" : ""}`}
                >
                  <item.icon className="" />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="conntentBody flex-[4] w-full px-4">{children}</div>
      </div>

      {/* Sidepanel For Mobile */}
      <div
        className={`drawer h-[90vh] bg-white transition-all duration-300 absolute top-[80px] md:hidden w-full ${!sidepanel && "-translate-x-full xl:translate-x-0"} `}
      >
        <ul className="m-0 flex flex-col gap-2 w-full text-md text-dark pt-6 fixed top-[80px] bg-white ">
          {DashBoardMenu.map((item, index) => {
            const isActive =
              pathname === item.link || pathname.includes(item.link);
            if (item.title === "Logout") {
              return (
                <li
                  onClick={handleLogout}
                  key={index}
                  className="flex items-center gap-3 cursor-pointer p-2 hover:bg-dark hover:text-white"
                >
                  <item.icon className="" />{" "}
                  <span>{item.title}</span>
                </li>
              );
            }

            return (
              <li
                key={index}
                onClick={()=> { navigate(item.link), handleSidepanel()}}
                className={`flex items-center gap-3 cursor-pointer p-2 hover:bg-dark hover:text-white
                 ${isActive ? "bg-dark text-white" : ""}`}
              >
                <item.icon className="" />{" "}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AdminContainer;
