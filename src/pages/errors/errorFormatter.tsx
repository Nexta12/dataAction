import { AxiosError } from "axios";

export const ErrorFormatter = (error: unknown): string => {
  const axiosError = error as AxiosError;

  const errorMessage =
    typeof axiosError.response?.data === "string"
      ? axiosError.response.data
      : "Internal Server Error";

  return errorMessage;
};
