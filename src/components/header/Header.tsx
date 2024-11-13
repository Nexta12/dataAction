import { useState } from 'react';
import { MenuItem, menuTitles } from '@customTypes/menuItems';
import { paths } from '@routes/paths';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaAngleRight, FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
// import { useLocation } from 'react-router-dom';

const menuItems: MenuItem[] = [
  { title: menuTitles.Home, link: paths.Index },
  { title: menuTitles.About, link: paths.About },
  { title: menuTitles.Training, link: paths.Training },
  { title: menuTitles.Consultation, link: paths.Consultation },
  { title: menuTitles.Marketplace, link: paths.Marketplace },
  { title: menuTitles.Contact, link: paths.Contact }
];

const Header = () => {
  const [sidepanel, setSidepanel] = useState(false);
  const handleSidepanel = () => setSidepanel(!sidepanel);
  // const location = useLocation();
  //  const pathname = location.pathname;
  const pathname = paths.Index;

  return (
    <header className="bg-gray flex items-center justify-between py-[30px] px-[40px] z-50 relative">
      <div className="flex items-center gap-1 font-bold  text-lg">
        <img src="/logo.png" alt="" className="w-[32px] h-[36px]" />
        <span>DataActions</span>
      </div>
      
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat autem itaque iste magni tenetur neque iure deserunt quibusdam est eaque, dolorum ipsa earum. Dolores error numquam quas nesciunt illum.
        </div>

        <a
          href=""
          className="hidden md:flex items-center justify-center h-[48px] bg-LightBlue text-white py-[6px] px-[14px] rounded-md my-4 text-[20px]"
        >
          Register
        </a>

      <BiMenuAltRight className="text-3xl md:hidden" onClick={handleSidepanel} />
       {/* Sidepanel */}
      <div
        className={`bg-lightgray absolute w-[100vw] top-0 right-0 h-screen px-[40px] py-[30px] transition-all duration-300 ${sidepanel && '-translate-x-full xl:translate-x-0'} md:hidden `}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1 font-bold  text-lg">
            <img src="/logo.png" alt="" className="w-[32px] h-[36px]" />
            <span>DataActions</span>
          </div>
          <IoMdClose className="text-3xl" onClick={handleSidepanel} />
        </div>

        <div className="menuItems flex flex-col gap-3">
          {menuItems.map((item) => {
            const isActive = item.link === pathname;
            // const isActive = pathname === item.link || paths.Index;
            return (
              <div
                key={item.title}
                className={`flex items-center justify-between py-[10px] px-[12px] rounded-sm fz-[14px] font-light tracking-wide ${isActive ? 'bg-dark text-white' : ''}`}
              >
                <a href={item.link}>{item.title}</a>
                <FaAngleRight className="text-gray" />
              </div>
            );
          })}
        </div>
        <a
          href=""
          className="flex items-center justify-center h-[48px] bg-LightBlue text-white py-[6px] px-[14px] rounded-md my-4 text-[20px]"
        >
          Register
        </a>

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
