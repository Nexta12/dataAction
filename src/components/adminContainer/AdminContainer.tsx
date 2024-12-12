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
import { useLocation } from "react-router-dom";

const DashBoardMenu = [
  {
    title: "Overview",
    link: paths.adminDashboard,
    icon: MdDashboard,
  },
  {
    title: "Course Registration",
    link: "#",
    icon: MdOutlineGroups2,
  },
  {
    title: "Consultations",
    link: "#",
    icon: FaObjectGroup,
  },
  {
    title: "Dashboards",
    link: "#",
    icon: FaThList,
  },
  {
    title: "Blogs",
    link: "#",
    icon: FaList,
  },
  {
    title: "Payments",
    link: "#",
    icon: MdOutlinePayments,
  },
  {
    title: "Analytics",
    link: "#",
    icon: BsGraphUp,
  },
  {
    title: "Users",
    link: paths.users,
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

  return (
    <section className="w-full m-0 p-0 bg-admingray relative">
      {/* Header */}
      <div className="header bg-admingray p-5 md:p-10  xl:px-3 mb-6 shadow flex gap-6 items-center justify-between sticky top-0 z-50 ">
        <div className="left flex items-center  gap-4 md:gap-12">
          {!sidepanel ? (
            <LuMenu className=" md:hidden text-xl" onClick={handleSidepanel} />
          ) : (
            <IoMdClose
              className="md:hidden text-xl rounded-full border border-danger"
              onClick={handleSidepanel}
            />
          )}

          <div className="logo flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-9" />
            <span className="font-bold">DataActions</span>
          </div>
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

      <div className="mainbody flex items-start gap-8">
        {/* Sidebar */}
        <div className="sidebar hidden md:block flex-1 shadow bg-white border-r-2 border-LightBlue xl:pl-3 pt-4 h-[80vh] text-md text-dark">
          <ul className="m-0 p-0 flex flex-col gap-2">
            {DashBoardMenu.map((item, index) => {
                 const isActive = pathname === item.link || pathname.includes(item.link);

              if (item.title === "Logout") {
                return (
                  <li
                    onClick={handleLogout}
                    key={index}
                    className="flex items-center gap-3 cursor-pointer p-3 hover:bg-dark hover:text-white"
                  >
                    <item.icon className="" />{" "}
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              }
              return (
                <li
                  key={index}
                  className={`flex items-center gap-3 cursor-pointer p-3 hover:bg-dark hover:text-white
                   ${isActive ? "bg-dark text-white" : ''}`}>
                  <item.icon className="" />{" "}
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="conntentBody flex-[5] w-full px-4">{children}</div>
      </div>

      {/* Sidepanel */}
      <div
        className={`drawer h-[90vh] bg-white transition-all duration-300 absolute top-[80px] md:hidden w-full ${!sidepanel && "-translate-x-full xl:translate-x-0"} `}
      >
        <ul className="m-0 pl-3 flex flex-col gap-2 w-full text-md text-dark pt-6">
          {DashBoardMenu.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 cursor-pointer  p-3  hover:bg-dark hover:text-white"
              onClick={handleSidepanel}
            >
              <item.icon className="" /> <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdminContainer;
