import PublicPageContainer from "@components/container/PublicPageContainer"
import { paths } from "@routes/paths"
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

const CoursesGallery = () => {
  return (
   <PublicPageContainer>
    <div className="flex flex-col lg:flex-row gap-4 my-6">
      {/* Category Left */}
      <div className="left flex-1">
        <h1 className="text-green font-bold mb-4">Categories</h1>
        <div className=" text-xs py-4 px-6 flex flex-wrap lg:flex-col gap-1 lg:gap-3 font-light ">
          <h1 className="hidden md:block font-bold">All Courses</h1>
          <h1 className="">Products 123</h1>
          <h1 className="">Products 123</h1>
          <h1 className="">Products 123</h1>
          <h1 className="">Products 123</h1>
          <h1 className="">Products 123</h1>
          <h1 className="">Products 123</h1>
          <h1 className="">Products 123</h1>
          <h1 className="">Products 123</h1>
          {/* {[...new Set(products.map(item=> item.category))].map((category, index)=>(
              <Link to={`/product/category/${category}`} key={index}>{category}</Link>
            
          ))} */}
         
        </div>

        <div className="text-xs py-4 px-6 flex flex-wrap lg:flex-col gap-1 lg:gap-3 font-light ">

               <Link to="/">Dashboards</Link>
               <Link to="/">Request A project</Link>
               <Link to="/">Request A project</Link>
               <Link to="/">Request A project</Link>
               <Link to="/">Request A project</Link>
               <Link to="/">Request A project</Link>
               <Link to="/">Request A project</Link>
        
        </div>
      </div>

      {/* Profucts right */}
      <div className="right flex-[4]">
        <div className="w-full mb-4 font-bold flex flex-col-reverse md:flex-row gap-4 py-4 md:py-0 items-center justify-between ">
          <h1 className="text-sm font-extralight">30 Products Listed</h1>

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
          <div className="productCards flex flex-wrap gap-4">
        
            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>
            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>
            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>

            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>
            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>
            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>
            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>
            <div className="bg-transparentWhite p-2 mb-6 rounded-md w-full  md:w-[48.8%] lg:w-[45%] xl:w-[23.7%] flex flex-col justify-between ">

              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img src={'/assets/rectangle.png' } alt="earphone" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm flex flex-col gap-3">
                <span className="font-bold capitalize text-dark">Power BI powerful</span>
                <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad numquam quibusdam exercitationem facere </span>
                <div className="flex items-center justify-between">
                <span className="text-LightBlue font-semibold">$200</span>
                <span className="text-2xs text-light">Payable upto 2 Instalments</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-2xs text-light font-bold">Duration: 12weeks</span>
                <span className="text-2xs text-light">6hrs per week</span>
                </div>
                <div className="text-2xs text-light">
                    56 Students enrolled
                </div>
              </div>
             
              <div className="flex text-xs items-center justify-between flex-wrap gap-3 mt-4">
                <Link
                  to={``}
                  className=" bg-LightBlue py-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-dark"
                >
                 Register Now
                </Link>
                <Link
                  to={`${paths.courseDetails}/sdhhsjsksk`}
                  className=" bg-dark py-2 px-3 text-white hover:bg-green transition-all duration-300 ease-in-out hover:bg-LightBlue"
                >
                  View Details
                </Link>
              </div>
               <div className=" text-2xs my-3">
                 Download Course outline
               </div>
            </div>

           
        
          </div>
        </div>
      </div>

    </div>
    </PublicPageContainer>
  )
}

export default CoursesGallery