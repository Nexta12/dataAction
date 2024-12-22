import { useEffect, useState } from "react";
import { SubmitButton } from "@components/button/SubmitButton";
import Input from "@components/form/Input";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { useNavigate, useParams } from "react-router-dom";
import { paths } from "@routes/paths";
import Paragraph from "@components/paragraph/Paragraph";

const ProjectSignup = () => {
  const { slug } = useParams();
  // Define state for each input
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  const [project, setProject] = useState({
     _id: "",
     title: "",
     industry: "", 
     price: "", 
     difficultyLevel: "",
     purpose: "",
     dataset: [],
     slug: "",
     keytext: "",
     soldProjectId: ""

  })

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await apiClient.get(`${endpoints.getSingleProjectBySlug}/${slug}`)
        setProject(response.data)
      } catch (error) {
        setMessage({ errorMessage: ErrorFormatter(error) });
      }
    };

    fetchProject();
  }, [slug]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formDetails = {
      applicantName,
      applicantEmail,
      comment,
      projectIndustry: project.industry,
      projectName: project.title,
      soldProjectId: project._id,
      cost: project.price,
    };

    try {
      const response = await apiClient.post(
        endpoints.createProjectSales,
        formDetails,
      );

      setMessage({
        errorMessage: null,
        successMessage:
          "Schedule booked successfully, Redirecting to payment page",
      });

      setApplicantName("");
      setApplicantEmail("");
      setComment("");
      navigate(`${paths.payment}/${response.data._id}`);
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
    <div className="relative bg-[url('/images/aboutPage/header.png')] bg-cover bg-center w-full px-3 h-[150vh] lg:h-[100vh]">
      {/* Add an overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full xl:w-1/2 flex flex-col gap-0 mx-auto py-5">
        <Heading
          className="text-center text-white font-Lexend !text-[38px] !xl:text-[50px] !font-extrabold"
          text={`Sign Up to get ${project.title}`}
        />
        <Paragraph
          className="text-white text-center font-semibold text-sm"
          text="Buying One of our projects will enhance your chances of repositioning to career in today's competitive world"
        />
      </div>
      <div className="relative z-10 w-full xl:w-[60%] p-8 bg-white mx-auto rounded-sm lg:px-14">
        <AlertMessage alert={message} />

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

          <SimpleTextArea
            label="Comment"
            placeholder="Your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="h-28"
          />
          <SubmitButton
            label="Submit"
            className="text-white !rounded-md w-[180px] mx-auto text-sm"
            isLoading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default ProjectSignup;
