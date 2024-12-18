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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCourseRegister = () => {
    const { slug } = useParams();
     
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

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(today.getDate()).padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}`);
  }, []);

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
     await apiClient.post(endpoints.applyForTraining, formDetails);

      setMessage({
        errorMessage: null,
        successMessage:
          "Successfull, We will get in touch shortly",
      });

      setApplicantName("");
      setApplicantEmail("");
      setChoiceDate("");
      setPhoneNumber("");
      setComment("");
      scrollUP()
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
        <SubHeading className="text-center !mb-10 capitalize">You are signing up for "{course.title}" </SubHeading>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <Input
              type="text"
              label="Full Name *"
              placeholder="Full Name"
              name="applicantName"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              required
            />
            <Input
              type="email"
              label="Email *"
              placeholder="Email"
              name="applicantEmail"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
              required
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
              min={currentDate}
              onChange={(e) => setChoiceDate(e.target.value)}
              required
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
          />
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default SingleCourseRegister;
