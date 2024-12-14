import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Input from "@components/form/Input";
import Heading from "@components/heading/Heading";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  const [consultType, setConsultType] = useState({
    title: "",
    price: "",
    consultationType: "",
    applicantName: "",
    applicantEmail: "",
    choiceDate: "",
  });

  useEffect(() => {
    const fetchConsultationType = async () => {
      try {
        const response = await apiClient.get(
          `${endpoints.getConsultationById}/${id}`,
        );
        setConsultType(response.data);
      } catch (error) {
        setMessage({
          errorMessage: ErrorFormatter(error),
          successMessage: null,
        });
      }
    };
    if (id) fetchConsultationType();
  }, [id]);

  return (
    <PublicPageContainer
      className=" flex flex-col md:flex-row items-start justify-between gap-12 lg:h-[100vh]"
      gradientDirection="45deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
    >
      <div className="left flex-1 ">
        <Heading
          className=" xmd:text-left text-center font-semibold"
          text="Consultation service Payment"
        />
        <div className="flex justify-center items-center">
          <img src="/assets/card.png" alt="about data action" />
        </div>
      </div>

      <div className="right flex-1 bg-transparentWhite p-2 lg:p-10 rounded-sm ">
        <AlertMessage alert={message} />
        <form action="" className="flex flex-col gap-4">
          <Heading text="Verification" className="text-center" />
          <Input
            placeholder=""
            value={`Payment for ${consultType.consultationType}`}
          />
          <Input placeholder="" value={consultType.applicantName} />
          <Input placeholder="" value={consultType.applicantEmail} />
          <Input
           label="Start Date"
            value={
              consultType.choiceDate
                ? new Date(consultType.choiceDate).toLocaleDateString()
                : ""
            }
          />
          <SubmitButton
            className="w-full text-white"
            cost={`${consultType.price} with Stripe`}
          >
            Checkout With Stripe
          </SubmitButton>
        </form>
      </div>
    </PublicPageContainer>
  );
};

export default Payment;
