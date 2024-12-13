import { SubmitButton } from "@components/button/SubmitButton";
import { paths } from "@routes/paths";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaArrowRight, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";

export const scrollUP = () => {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer: React.FC = () => (
  <main className="py-[35px] px-[30px] md:px-[40px] lg:px-[80px] gap-4 bg-dark text-gray flex flex-col md:flex-row  md:justify-between">
    <div className="flex-1 flex flex-col gap-3 text-sm">
      <Link to="/" onClick={scrollUP}>
        <div className="flex items-center gap-1 font-bold  text-lg">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[45px] md:w-[32px] h-[46px] md:h-[36px] bg-gray"
          />
          <span>DataActions</span>
        </div>
      </Link>
      <span>dataaction@gmail.com</span>
      <span>+1234567890</span>
      <div className="flex items-center gap-4 mt-2 text-sm">
        <FaFacebook />
        <FaTwitter />
        <BsInstagram />
        <FaTiktok />
        <BsLinkedin />
      </div>
    </div>

    <div className=" flex-[2] flex items-center justify-around text-xs md:text-sm">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold capitalize">Company</h1>
        <Link to={paths.Index} onClick={scrollUP}>
          Home
        </Link>
        <Link to={paths.About} onClick={scrollUP}>
          About us
        </Link>
        <Link to={paths.Training} onClick={scrollUP}>
          Services
        </Link>
        <Link
          to={paths.Login}
          className="flex gap-1 items-center"
          onClick={scrollUP}
        >
          Admin Login
          <GiPadlock
            title="Secured by Nexta digital Securities"
            className="text-yellow-300"
          />{" "}
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold capitalize">Services</h1>
        <Link to={paths.Training} onClick={scrollUP}>
          Training
        </Link>
        <Link to={paths.Consultation} onClick={scrollUP}>
          Consultation
        </Link>
        <Link to={paths.Marketplace}>Marketplace</Link>
        <Link to={paths.Index}>Student Portfolio</Link>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold capitalize">Discover</h1>
        <Link to={paths.Index} onClick={scrollUP}>
          Book a consultation
        </Link>
        <Link to={paths.Index} onClick={scrollUP}>
          Apply for Scholarship
        </Link>
        <Link to={paths.Training} onClick={scrollUP}>
          Request a project
        </Link>
        <Link to={paths.payment} onClick={scrollUP}>
          Payment
        </Link>
      </div>
    </div>

    <div className="flex-1 flex flex-col text-wrap gap-4 text-xs md:text-sm ">
      <span>
        By clicking on submit, you have given us the right to send insights and
        promotional news.
      </span>
      <input
        type="text"
        placeholder="Email address"
        className="rounded-sm p-2 text-dark ring-0 border-none focus:ring-0 focus:border-none outline-none bg-gray "
      />
      <SubmitButton label="Submit" icon={FaArrowRight} className="w-[50%]" />
    </div>
  </main>
);

export default Footer;
