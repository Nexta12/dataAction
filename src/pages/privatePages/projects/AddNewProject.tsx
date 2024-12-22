import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SubmitButton } from "@components/button/SubmitButton";
import { scrollUP } from "@components/footer/Footer";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SubHeading from "@components/subHeading/SubHeading";
import { DifficultyLevel } from "@customTypes/general";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AddNewProject = () => {
  const [courseOutline, setCourseOutline] = useState<File | null>(null);
  const courseOutlineInputRef = useRef<HTMLInputElement | null>(null);

  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const difficultyOptions = [
    { title: DifficultyLevel.beginner, _id: "1" },
    { title: DifficultyLevel.intermediate, _id: "2 " },
    { title: DifficultyLevel.advanced, _id: "3 " },
  ];

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [industry, setIndustry] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [keytext, setKeytext] = useState<string>("");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Prepare FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("industry", industry);
    formData.append("price", price.toString());
    formData.append("keytext", keytext);
    formData.append("purpose", purpose);
    formData.append("difficultyLevel", difficultyLevel);
    if (courseOutline) formData.append("dataset", courseOutline);

    try {
      await apiClient.post(endpoints.addNewProject, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage({
        errorMessage: null,
        successMessage: "Item added successfully",
      });

      setTitle("");
      setPrice(0);
      setIndustry("");
      setPurpose("");
      setKeytext("");
      setDifficultyLevel("");
      setCourseOutline(null);
      if (courseOutlineInputRef.current) {
        courseOutlineInputRef.current.value = "";
      }
      scrollUP();
    } catch (error) {
      console.log(error)
      setMessage({ errorMessage: ErrorFormatter(error), successMessage: null });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="bg-white w-full md:w-[90%] lg:w-[80%] m-auto p-4 lg:p-10 shadow rounded-lg">
        <FaArrowLeftLong
          onClick={() => handleGoBack()}
          className="cursor-pointer text-2xl text-dark"
        />
        <AlertMessage alert={message} />
        <div className="w-full flex items-center justify-center mb-4">
          <SubHeading className="">Add New Project</SubHeading>
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 lg:gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
            <Input
              name="title"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              name="price"
              type="number"
              label="Price £"
              value={price.toString()}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
            <Input
              name="industry"
              label="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
            <Select
              options={difficultyOptions}
              selectLabel="Difficulty Level"
              value={difficultyLevel}
              onChange={(e) => setDifficultyLevel(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
            <Input
              name="Purpose"
              type="text"
              label="Purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
            <Input
              name="keytext"
              type="text"
              label="Keyword"
              value={keytext}
              onChange={(e) => setKeytext(e.target.value)}
            />
          </div>
          <div className="my-4">
            <div className="text-sm font-bold font-Lexend text-black/60 mb-2">
              Upload Dataset (.xlsx, .csv)
            </div>
            <input
              type="file"
              name="dataset"
              ref={courseOutlineInputRef}
              accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const validExtensions = [".csv", ".xls", ".xlsx"];
                  const fileExtension = file.name.substring(
                    file.name.lastIndexOf("."),
                  );
                  if (!validExtensions.includes(fileExtension)) {
                    alert("Please upload a valid .csv, .xls, or .xlsx file.");
                    return;
                  }
                  setCourseOutline(file);
                }
              }}
              aria-label="Upload a dataset file in .xlsx or .csv format"
            />
          </div>
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

export default AddNewProject;
