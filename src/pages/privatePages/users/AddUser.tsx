import React, { useState } from "react";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import { SubmitButton } from "@components/button/SubmitButton";
import { UserRole } from "@customTypes/user";
import SubHeading from "@components/subHeading/SubHeading";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@store/authStore";

const AddUser = () => {
  const { user } = useAuthStore();
  
  const StatffRoles = [
    { title: UserRole.staff, _id: "staff" },
    { title: UserRole.accounts, _id: "accounts" },
    { title: UserRole.editor, _id: "editor" },
  ];
  
  if (user?.role === UserRole.superAdmin) {
    StatffRoles.push(
      { title: UserRole.admin, _id: "admin" },
      { title: UserRole.superAdmin, _id: "superAdmin" }
    );
  }
  

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = {
      email,
      firstName,
      lastName,
      password,
      role,
    };
    setLoading(true);
    try {
      await apiClient.post(endpoints.addNewStaff, userDetails);

      setMessage({
        errorMessage: null,
        successMessage: "New staff added successfully",
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setRole("");
      setPassword("");
    } catch (error) {
      setMessage({ errorMessage: ErrorFormatter(error), successMessage: null });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="bg-white w-full md:w-[90%] lg:w-[80%] m-auto p-4 lg:p-10 shadow-lg rounded-lg">
        <FaArrowLeftLong
          onClick={() => handleGoBack()}
          className="cursor-pointer text-2xl text-dark"
        />
        <AlertMessage alert={message} />
        <div className="w-full flex items-center justify-center mb-4">
          <SubHeading className="">Add New Staff</SubHeading>
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 lg:gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
            <Input
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
            <Input
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Select
            options={StatffRoles}
            selectLabel="Set User Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <SubmitButton
            isLoading={loading}
            label="Submit"
            className="bg-dark hover:bg-LightBlue w-[220px] mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
