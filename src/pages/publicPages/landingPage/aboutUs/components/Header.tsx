import Heading from '@components/heading/Heading';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[110px]">
      <div className="flex-1 order-1 md:order-2">
        <img src="/images/aboutPage/header.png" alt="about data action" />
      </div>

      <div className="flex-1 order-2 md:order-1">
        <Heading
          className="xmd:text-[39px] text-xlg xmd:text-left text-center"
          text="About DataAction"
        />
        <p className="xmd:mb-[45px] mb-[24px] mt-[8px] text-sm poppins xmd:text-left text-center">
          Your Partner in Tech Success
        </p>
        <p className="poppins text-sm xmd:text-left text-center">
          DataActions provides tech training and consultation for individuals and companies,
          equipping them with skills for real-world success. Our courses cover in-demand areas to
          help individuals land their dream jobs, while our consulting services support you in
          leveraging data-driven solutions. With a focus on practical expertise and career
          readiness, we empower growth at every level.
        </p>
      </div>
    </div>
  );
};

export default Header;
