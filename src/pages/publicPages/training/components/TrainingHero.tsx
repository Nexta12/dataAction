import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import SubHeading from "@components/subHeading/SubHeading";
import { CoursesDetail } from "@customTypes/course";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const TrainingHero = () => {
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [choiceDate, setChoiceDate] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(today.getDate()).padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}`);
  }, []);


   const [courses, setCourses] = useState<CoursesDetail[]>([]);

   useEffect(()=>{
    const fetchServices = async() =>{
     try {
        const response = await apiClient.get(endpoints.getAllCourses)
        setCourses(response.data)
     } catch (error) {
       setMessage({errorMessage: ErrorFormatter(error), successMessage: null})
     }
    }
    fetchServices()
   },[])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formDetails = {
      applicantName,
      applicantEmail,
      trainingType,
      phoneNumber,
      choiceDate,
      comment,
    };

    try {
      await apiClient.post(endpoints.applyForTraining, formDetails);

      setMessage({
        errorMessage: null,
        successMessage:
          "Successfull, We will get in touch shortly",
      });

      setApplicantName("");
      setApplicantEmail("");
      setTrainingType("");
      setChoiceDate("");
      setPhoneNumber("");
      setComment("");
    } catch (error) {
      setMessage({
        errorMessage: ErrorFormatter(error),
        successMessage: null,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start  bg-[linear-gradient(to_right,_#c7e8f2,_#EDE7F4_20%,_#c7e8f2)] px-4 md:px-0">
      <div className="left flex-1 w-full">
        <Heading className="text-center" text="Empowering Your Skills" />
        <div className="w-full flex items-center">
          <div className="h-48 bg-[#706363] w-full hidden xl:block ml-[-250px]"></div>
          <img
            src="/assets/trainingImage.png"
            alt="training"
            className=" w-full xl:w-[80%] block ml-auto z-20"
          />
        </div>
      </div>

      <div className=" flex-[1.5] w-full bg-dark p-3 ">
        <div className=" hidden mx-auto  xl:flex items-center justify-center gap-4 text-white/75 bg-dark/25  text-sm">
          <Marquee className="py-3" pauseOnHover>
            <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
              Data Analytics
            </span>
            <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
              Power Platform
            </span>
            <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
              Power Automate
            </span>
            <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
              UI/UX Design
            </span>
            <span className=" px-3 py-1 cursor-pointer hover:bg-slate-600">
              Data Analytics
            </span>
          </Marquee>
        </div>
        <div className="formBox mx-auto w-full md:w-[80%] mt-10">
          <AlertMessage alert={message} />
          <SubHeading
            className=" xmd:text-left text-center font-light font-Lexend text-white/75"
            text="Register for one of our tech courses today!"
          />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
              <Input
                type="text"
                placeholder="Full Name*"
                className="bg-[#EDE7F4]"
                name="applicantName"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email*"
                className="bg-[#EDE7F4]"
                name="applicantEmail"
                value={applicantEmail}
                onChange={(e) => setApplicantEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
              <Input
                type="text"
                placeholder="Phone No"
                className="bg-[#EDE7F4]"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <Input
                type="date"
                name="choiceDate"
                className="bg-[#EDE7F4] !text-black/55"
                value={choiceDate}
                min={currentDate}
                onChange={(e) => setChoiceDate(e.target.value)}
                required
              />

              <Select
                options={courses}
                className="bg-[#EDE7F4] text-sm capitalize"
                name="trainingType"
                value={trainingType}
                onChange={(e) => setTrainingType(e.target.value)}
              />
            </div>
            <SimpleTextArea
              className="bg-[#EDE7F4] h-20"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="mb-2">
              <SubmitButton
                label="submit"
                isLoading={loading}
                className="px-6 text-white w-[200px] rounded-lg  mx-auto lg:ml-0"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainingHero;
