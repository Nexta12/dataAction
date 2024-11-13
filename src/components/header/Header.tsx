import { MenuItem, menuTitles } from '@customTypes/menuItems';
import { paths } from '@routes/paths';
import { IoMenuSharp } from 'react-icons/io5';

const menuItems: MenuItem[] = [
  { title: menuTitles.Home, link: paths.Index },
  { title: menuTitles.About, link: paths.About },
  { title: menuTitles.Training, link: paths.Training },
  { title: menuTitles.Consultation, link: paths.Consultation },
  { title: menuTitles.Marketplace, link: paths.Marketplace },
  { title: menuTitles.Contact, link: paths.Contact }
];

const Header = () => {
  return (
    <header className="bg-gray sticky top-0 px-3 py-6 sm:p-6 xmd:p-8 mlg:p-10 lg:p-16 xmd:flex xmd:items-center xmd:gap-4 xmd:px-12 overflow-x-hidden lg:justify-between xxl:px-[150px] z-50">
      <div className="flex items-center relative w-full xmd:w-[10%] ">
        <div className="w-[10%] text-left xmd:hidden">
          <IoMenuSharp className="text-3xl" />
        </div>

        <div className="absolute left-[35%] transform -translate-x-[10%] flex items-center gap-1 xmd:left-0">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 xmd:w-16 xmd:h-16" />
          <span className="font-bold">DataActions</span>
        </div>
      </div>

      <div className="hidden xmd:flex xmd:w-[90%] xmd:absolute xmd:left-[35%] xmd:transform -translate-x-[10%] gap-4 font-bold tracking-wide lg:w-[80%]">
        {menuItems.map((item) => (
          <a
            href={item.link}
            key={item.title}
            className="transition-all duration-100 ease-in-out hover:text-slate-400"
          >
            {item.title}
          </a>
        ))}
      </div>
      <a href={paths.Register}>
        <div className=" hidden lg:block lg:w-[10%] xxl:text-end">
          <span className="bg-LightBlue text-white text-sm py-2 px-6 rounded-md">Register</span>
        </div>
      </a>
      {/* Mobile drawer */}
    </header>
  );
};

export default Header;
