import { useState } from "react";
import { MenuItem, menuTitles } from "@customTypes/menuItems";
import { paths } from "@routes/paths";
import { BiMenuAltRight } from "react-icons/bi";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaAngleRight, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import ButtonLink from "@components/button/ButtonLink";

const menuItems: MenuItem[] = [
  { title: menuTitles.Home, link: paths.Index },
  { title: menuTitles.About, link: paths.About },
  { title: menuTitles.Training, link: paths.Training },
  { title: menuTitles.Consultation, link: paths.Consultation },
  { title: menuTitles.Marketplace, link: paths.Marketplace },
  { title: menuTitles.Contact, link: paths.Contact },
];

const Header = () => {
  const [sidepanel, setSidepanel] = useState(false);
  const handleSidepanel = () => setSidepanel(!sidepanel);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="bg-gray flex items-center justify-between px-[20px] py-[30px] xs:px-[40px] md:px-[30px] mlg:px-[40px] z-50 relative">
      <Link to={paths.Index}>
        <div className="flex items-center gap-1 font-bold  text-lg">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[32px] h-[36px] md:w-[30px] md:h-[46px] mlg:w-[46px] mlg:h-[56px]"
          />
          <span className="md:text-sm mlg:text-xl">DataActions</span>
        </div>
      </Link>

      <div className=" hidden md:flex items-center gap-4 font-Lexend md:text-xs mlg:text-sm lg:text-lg">
        {menuItems.map((item) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={item.title}
              to={item.link}
              className={`transform transition-transform duration-150 hover:scale-105 ${isActive ? "font-extrabold" : ""}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex w-40 md:w-20">
        <ButtonLink to={paths.Register} label="Register" className="w-full" />
      </div>

      <BiMenuAltRight
        className="text-3xl md:hidden"
        onClick={handleSidepanel}
      />
      {/* Sidepanel */}
      <div
        className={`bg-lightgray absolute w-[100vw] top-0 right-0 h-screen px-[40px] py-[30px] transition-all duration-300 ${!sidepanel && "-translate-x-full xl:translate-x-0"} md:hidden `}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1 font-bold  text-lg">
            <img src="/logo.png" alt="Logo" className="w-[32px] h-[36px]" />
            <span>DataActions</span>
          </div>
          <IoMdClose className="text-3xl" onClick={handleSidepanel} />
        </div>

        <div className="menuItems flex flex-col gap-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <div
                key={item.title}
                className={`flex items-center justify-between py-[10px] px-[12px] rounded-sm fz-[14px] font-light tracking-wide ${isActive ? "bg-dark text-white" : ""}`}
              >
                <Link to={item.link} onClick={handleSidepanel}>
                  {item.title}
                </Link>
                <FaAngleRight className="text-gray" />
              </div>
            );
          })}
        </div>
        <ButtonLink to={paths.Register} label="Register" className="w-full" />

        <div className="mt-2 flex flex-col gap-4 items-center">
          <span>Email@email.com</span>
          <span>+12393783939</span>
          <div className="flex items-center gap-4">
            <FaFacebook />
            <FaTwitter />
            <BsInstagram />
            <FaTiktok />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
