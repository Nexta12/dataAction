import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import { scrollUP } from "@components/footer/Footer";
import Input from "@components/form/Input";
import SimpleTextArea from "@components/form/SimpleTextArea";
import SubHeading from "@components/subHeading/SubHeading";
import { CoursesDetail } from "@customTypes/course";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { paths } from "@routes/paths";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleCourseRegister = () => {
    const { slug } = useParams();
     const navigate = useNavigate();
   

  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [choiceDate, setChoiceDate] = useState("");

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

    const [course, setCourse] = useState<CoursesDetail>({
      _id: "",
      title: "",
      slug: "",
      totalModules: "",
      experienceLevel: "",
      snippet: "",
      duration: "",
      description: "",
      images: [],
      courseOutline: [],
      whatYoudLearn: [],
      weeklyTimeRequirement: "",
      price: "",
      totalEnrolled: "",
    });

    useEffect(() => {
        const fetchCourse = async () => {
          try {
            const response = await apiClient.get(
              `${endpoints.getOneCourseBySlug}/${slug}`,
            );
    
            setCourse(response.data);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        };
    
        fetchCourse();
      }, [slug]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formDetails = {
      applicantName,
      applicantEmail,
      phoneNumber,
      choiceDate,
      comment,
      cost: course.price,
      trainingType: course.title
    };

    try {
     const response =  await apiClient.post(endpoints.applyForTraining, formDetails);

      setMessage({
        errorMessage: null,
        successMessage:
          "Successfully, Redirecting to payment page",
      });

      setApplicantName("");
      setApplicantEmail("");
      setChoiceDate("");
      setPhoneNumber("");
      setComment("");
      scrollUP()
      setTimeout(()=>{
        navigate(`${paths.payment}/${response.data._id}`)
      },3000)
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
    <PublicPageContainer gradientDirection="45deg">
      <div className="w-full xl:w-[80%] p-5 bg-white mx-auto">
        <AlertMessage alert={message} />
        <SubHeading className="text-center !mb-10">You are signing up for "{course.title}" </SubHeading>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input
              type="text"
              label="Full Name *"
              placeholder="Full Name"
              name="applicantName"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
            <Input
              type="email"
              label="Email *"
              placeholder="Email"
              name="applicantEmail"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input
              type="text"
              label="Phone Number"
              placeholder="Phone No"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

             <Input
              type="date"
              label="Preferred Start Date*"
              name="choiceDate"
               className="!text-black/55"
              value={choiceDate}
              onChange={(e) => setChoiceDate(e.target.value)}
            />

          
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
           
          </div>

          <SimpleTextArea
            label="Comment"
            placeholder="Your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="h-32"
          />
          <SubmitButton
            label="Submit"
            className="text-white !rounded-md w-[180px] mx-auto"
            isLoading={loading}
            cost={`${course.price}`}
          />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default SingleCourseRegister;
