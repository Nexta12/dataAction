import React, { ChangeEvent }  from "react"
import { SubmitButton } from "@components/button/SubmitButton"
import PublicPageContainer from "@components/container/PublicPageContainer"
import Input from "@components/form/Input"
import Heading from "@components/heading/Heading"
import { GiPadlock } from "react-icons/gi"
import { Link, useNavigate } from "react-router-dom"
import useAuthStore from "@store/authStore"

export type LoginDetails = {
    email: string;
    password: string;
  };

const Login = () => {
    const [values, setValues] = React.useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { login, error, isLoading, setError } = useAuthStore();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
       const { name, value} = event.target;
       setValues({...values, [name]: value})
       setError(null)
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement> ) =>{
        e.preventDefault();
        const data: LoginDetails = { email: values.email, password: values.password};
        await login(data, navigate)
    }

  return (
    <PublicPageContainer className="h-[80vh] flex">

          <div className=" w-full md:w-[80%] lg:w-[50%] bg-transparentWhite m-auto p-4 lg:p-10 shadow rounded-sm ">
              <div className="w-full mb-4 flex items-center justify-center">
              {error && <div className="text-danger">{error}</div>}
              <Heading className="flex items-center">Admin Login <GiPadlock title="Secured by Nexta digital Securities" className="text-yellow-400"/> </Heading>
              </div>
              <form method="post" className="flex flex-col gap-4"  onSubmit={handleSubmit} >
                 <Input type="email" placeholder="Email" name="email" label="Email" value={values.email} onChange={handleChange} autoFocus/>
                 <Input type="password" placeholder="Password" name="password" label="Password" value={values.password} onChange={handleChange} />
                <SubmitButton className=" " isLoading={isLoading} >Submit</SubmitButton>
              </form>
              <div className="mt-4 flex items-center gap-4">
                <span>Forgotten Password ?</span>
                <Link to="/forgot-password" className="text-LightBlue">Click Here</Link>
              </div>

          </div>
   
    </PublicPageContainer>
  )
}

export default Login