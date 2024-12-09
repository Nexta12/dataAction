import ButtonLink from "@components/button/ButtonLink"
import { paths } from "@routes/paths"


const CourseCard = () => {
  return (
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
  )
}

export default CourseCard