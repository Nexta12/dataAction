import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { DateFormatter } from "@utils/helpers";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const SingleMessage = () => {
  const navigate = useNavigate();
  const {id } = useParams()
   const [message, setMessage] = useState<ErrorMessageProps>({
      errorMessage: null,
      successMessage: null,
    });

  const [singlemessage, setSingleMessage] = useState({
    name: '',
    email: '',
    message: '',
    createdAt: ''

  })

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(()=>{
   const fetchMessage = async() =>{
     try {
        const response = await apiClient.get(`${endpoints.getSingleMessage}/${id}`)
        setSingleMessage(response.data)
        
     } catch (error) {
        setMessage({errorMessage: ErrorFormatter(error)})
     }
   }
   if(id) fetchMessage()
  },[])

  return (
    <div className="flex">
      <div className="bg-white/45 w-full p-4 lg:p-10  rounded-lg">
       <AlertMessage alert={message} />
        <FaArrowLeftLong
          onClick={() => handleGoBack()}
          className="cursor-pointer text-2xl text-dark"
        />
        <div className="w-full flex items-center justify-between mb-4">
           <div className="letf">
             <SubHeading className="!mb-0">{singlemessage?.name}</SubHeading>
              <span className="text-sm">{singlemessage?.email}</span>
           </div>
           <Paragraph className="text-sm" >{DateFormatter(singlemessage.createdAt)}</Paragraph>
        </div>
        <div className="">
         {singlemessage?.message}
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
