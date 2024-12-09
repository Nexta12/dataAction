import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { IoMdCall, IoMdSend } from "react-icons/io";

const ContactUs = () => {
  return (
    <PublicPageContainer
      gradientDirection="45deg"
      className="pt-0  !px-0 lg:pb-[550px] xl:pb-72"
    >
      <div className="bg-[url('/assets/students.png')] bg-cover bg-center w-full lg:h-[500px] px-3 ">
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
                  className="w-[180px] mt-2 text-white !rounded-lg mx-auto md:ml-0"
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
                  className="w-[180px] mt-2 text-white !rounded-lg !px-2 mx-auto"
                />
              </div>
            </div>

            <div className="right flex-[1.5] bg-white/75 md:shadow-sm rounded-lg w-full md:p-5">
              <Heading className="text-center">Send a Message</Heading>
              <form
                action=""
                method="post"
                className="flex flex-col gap-2 text-xs w-full"
              >
                <Input
                  label="Name"
                  placeholder="Your name here"
                  className="md:py-3"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Your email here"
                  className="md:py-3"
                />
                <SimpleTextArea
                  name="message"
                  label="Message"
                  placeholder="Your message here"
                />
                <SubmitButton
                  label="Submit"
                  className="w-[180px] text-white !rounded-lg mt-4 mx-auto"
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
