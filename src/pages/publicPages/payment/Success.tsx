import ButtonLink from "@components/button/ButtonLink";
import PublicPageContainer from "@components/container/PublicPageContainer";
import SubHeading from "@components/subHeading/SubHeading";
import { paths } from "@routes/paths";
import { FaCheck} from "react-icons/fa";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";


const Success = () => {
  const { width, height } = useWindowSize();
  const location = useLocation();
  const navigate = useNavigate()
  const [sessionId, setSessionId] = useState<string | null>("")
  // Extract query parameters
  useEffect(() => {
    // Extract query parameters
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');
    if (sessionId) {
      setSessionId(sessionId)
    } else {
      navigate(paths.Index)
    }
  }, [location]);

  useEffect(()=>{
    const sendPaymentVerification = async ()=>{
      await apiClient.post(endpoints.paymentSuccessVerification, {sessionId})
    }
   if(sessionId) sendPaymentVerification()
  },[sessionId])


  return (
    <PublicPageContainer className="py-40 flex h-[100vh]">
      <Confetti width={width} height={height} recycle={true} />
      <div className="m-auto p-5 xl:p-20 bg-white rounded-lg w-full lg:w-[60%] flex flex-col gap-4 items-center shadow-md">
        
          <FaCheck className="bg-LightBlue text-white w-20 h-20 flex items-center justify-center p-2 rounded-full font-extralight" />
      
       <SubHeading className="text-center">You Sent Money <span className="text-green-500">Successfully </span>to</SubHeading> 
        <div className="logo flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-9" />
          <span className="font-bold">DataActions</span>
        </div>
    
          <div className="text-lg text-LightBlue">
            Please Check your email for further Instructions
          </div>
   
        <ButtonLink to={paths.Index} label="Done" />
      </div>
    </PublicPageContainer>
  );

};

export default Success;
