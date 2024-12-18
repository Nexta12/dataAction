import apiClient from "@api/apiClient"
import { endpoints } from "@api/endpoints"
import ButtonLink from "@components/button/ButtonLink"
import PublicPageContainer from "@components/container/PublicPageContainer"
import SubHeading from "@components/subHeading/SubHeading"
import { paths } from "@routes/paths"
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom"

const Cancelled = () => {
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
      await apiClient.post(endpoints.paymentCancelledVerification, {sessionId})
    }
   if(sessionId) sendPaymentVerification()
  },[sessionId])
  return (
    <PublicPageContainer className="py-40 flex h-[100vh]">
    <div className="m-auto p-5 xl:p-20 bg-white rounded-lg w-full lg:w-[60%] flex flex-col gap-4 items-center shadow-md">
      
        <FaTimes className="bg-danger/50 text-white w-20 h-20 flex items-center justify-center p-2 rounded-full font-extralight" />
    
     <SubHeading className="text-center">We are sorry to see you leave, we do hope you return soon <span className="text-green-500">to complete </span> your payment </SubHeading> 
      <div className="">
        <div className="flex items-center gap-3">
          <span>Transaction ID:</span>
          <span className="font-bold">{Date.now()}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Transaction Date:</span>
          <span className="font-bold">{new Date(Date.now()).toLocaleString()}</span>
        </div>
      </div>
      <ButtonLink to={paths.Index} label="Done" className="" />
    </div>
  </PublicPageContainer>
  )
}

export default Cancelled