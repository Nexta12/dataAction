import React, { useEffect, useState } from "react";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import { SubmitButton } from "@components/button/SubmitButton";
import { UserRole } from "@customTypes/user";
import SubHeading from "@components/subHeading/SubHeading";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import useAuthStore from "@store/authStore";

const EditUser = () => {
  const { user: activeUser } = useAuthStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const StatffRoles = [
    { label: UserRole.admin, value: UserRole.admin },
    { label: UserRole.staff, value: UserRole.staff },
    { label: UserRole.accounts, value: UserRole.accounts },
    { label: UserRole.superAdmin, value: UserRole.superAdmin },
    { label: UserRole.editor, value: UserRole.editor },
  ];
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  const [password, setPassword] = useState("");

  const handleGoBack = () => {
    return navigate(-1);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiClient.get(`${endpoints.getUser}/${id}`);
        setUser(response.data);
      } catch (error) {
        setMessage({
          errorMessage: "Error fetching user",
          successMessage: null,
        });
      }
    };

    if (id) fetchUser();
  }, [id]);

  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = {
      ...user,
      password, // Spread all user details to submit
    };
    setLoading(true);
    try {
      await apiClient.put(`${endpoints.updateUser}/${id}`, userDetails);

      setMessage({
        errorMessage: null,
        successMessage: "Updated successfully",
      });
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
          <SubHeading className="">Edit Staff Account</SubHeading>
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
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <Input
              name="lastName"
              label="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
            <Input
              type="email"
              name="email"
              label="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {activeUser?.role === UserRole.superAdmin && (
            <Select
              options={StatffRoles}
              selectLabel="Set User Role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
          )}

          <SubmitButton
            isLoading={loading}
            label="Update"
            className="bg-dark hover:bg-LightBlue w-[220px] mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default EditUser;
