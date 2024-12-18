import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useState } from "react";
import { IoMdCall, IoMdSend } from "react-icons/io";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formDetails = {
      name,
      email,
      message: comment,
    };
    try {
      await apiClient.post(endpoints.sendContactMessage, formDetails);

      setMessage({
        errorMessage: null,
        successMessage: "Message Sent We will revert as soon as possible",
      });

      setName("");
      setEmail("");
      setComment("");
    } catch (error) {
      setMessage({ errorMessage: ErrorFormatter(error), successMessage: null });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicPageContainer gradientDirection="45deg" className="pt-0  !px-0  ">
      <div className="bg-[url('/assets/students.png')] bg-cover bg-center w-full lg:h-[500px] px-3 lg:mb-40 ">
        <div className="w-full xl:w-[50%] flex flex-col gap-0 mx-auto py-5">
          <Heading
            className=" text-center text-white  font-Lexend"
            text="Contact Us"
          />
          <Paragraph
            className="text-white text-center font-semibold"
            text="To inquire about our services or request support, please use the contact form below, or contact us directly through call or WhatsApp message"
          />
        </div>

        <div className="w-full xl:w-[60%] bg-lightgray mx-auto rounded-lg p-3 lg:p-10 shadow">
          {/* form box */}
          <div className="flex flex-col-reverse lg:flex-row items-start gap-8 ">
            <div className="left flex-1 flex flex-col gap-4 w-full">
              <div className="top bg-white p-5 shadow-sm rounded-lg flex flex-col gap-2 ">
                <Paragraph>Call us directly at</Paragraph>
                <SubHeading>+1 234 567 890</SubHeading>
                <SubmitButton
                  label="Call Us Directly"
                  icon={IoMdCall}
                  className="w-[180px] mt-2 text-white !rounded-lg mx-auto md:ml-0 text-sm"
                />
              </div>
              <div className="bottom bg-white p-5 shadow-sm rounded-lg flex flex-col gap-2 ">
                <SubHeading>Chat with our support team</SubHeading>
                <Paragraph>
                  If you’d prefer to chat with our support team, we’re online
                  Monday to Friday whatever your time zone.
                </Paragraph>
                <SubmitButton
                  label="Chat on WhatsApp"
                  icon={IoMdSend}
                  className="w-[180px] mt-2 text-white !rounded-lg !px-2 mx-auto text-sm"
                />
              </div>
            </div>

            <div className="right flex-[1.5] bg-white/75 md:shadow-sm rounded-lg w-full md:p-5">
              <AlertMessage alert={message} />
              <Heading className="text-center">Send a Message</Heading>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 text-xs w-full"
              >
                <Input
                  label="Name*"
                  placeholder="Your name here"
                  className="md:py-3"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Email*"
                  type="email"
                  placeholder="Your email here"
                  className="md:py-3"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SimpleTextArea
                  name="comment"
                  label="Message*"
                  placeholder="Your message here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <SubmitButton
                  label="Submit"
                  className="w-[180px] text-white !rounded-lg mt-4 mx-auto"
                  isLoading={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default ContactUs;
