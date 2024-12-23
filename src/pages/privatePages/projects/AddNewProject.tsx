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
  const [dataset, setDataset] = useState<File[]>([]);
  const datasetInputRef = useRef<HTMLInputElement | null>(null);

  const [datasetDocs, setDatasetDocs] = useState<File[]>([]);
  const datasetDocsInputRef = useRef<HTMLInputElement | null>(null);

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
    { title: DifficultyLevel.intermediate, _id: "2" },
    { title: DifficultyLevel.advanced, _id: "3" },
  ];

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [industry, setIndustry] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [keytext, setKeytext] = useState<string>("");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("");

  // Hnadle File Uploads

  const handleDatasetDocsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newFiles = Array.from(event.target.files || []);
    setDatasetDocs((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDataSetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setDataset((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // Handle File Removal

  const handleFileRemoval = (index: number) => {
    setDatasetDocs((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleDataSetRemoval = (index: number) => {
    setDataset((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Handle File Submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("industry", industry);
    formData.append("price", price.toString());
    formData.append("keytext", keytext);
    formData.append("purpose", purpose);
    formData.append("difficultyLevel", difficultyLevel);
    dataset.forEach((file) => formData.append("dataset", file));
    datasetDocs.forEach((file) => formData.append("datasetDocs", file));

    try {
      await apiClient.post(endpoints.addNewProject, formData, {
        headers: { "Content-Type": "multipart/form-data" },
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
      setDataset([]);
      setDatasetDocs([]);
      if (datasetInputRef.current) datasetInputRef.current.value = "";
      if (datasetDocsInputRef.current) datasetDocsInputRef.current.value = "";
      scrollUP();
    } catch (error) {
      setMessage({ errorMessage: ErrorFormatter(error), successMessage: null });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="bg-white w-full md:w-[90%] lg:w-[80%] m-auto p-4 lg:p-10 shadow rounded-lg">
        <FaArrowLeftLong
          onClick={handleGoBack}
          className="cursor-pointer text-2xl text-dark"
        />
        <AlertMessage alert={message} />
        <div className="w-full flex items-center justify-center mb-4">
          <SubHeading>Add New Project</SubHeading>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:gap-4">
          {/* Inputs */}
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
              name="purpose"
              label="Purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
            <Input
              name="keytext"
              label="Keyword"
              value={keytext}
              onChange={(e) => setKeytext(e.target.value)}
            />
          </div>
          {/* File Inputs */}
          <div className="flex items-center flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col gap-4">
              {/* Custom Upload Button */}
              <label
                htmlFor="datasetInput"
                className="bg-dark text-white py-2 px-4 rounded-md cursor-pointer hover:bg-LightBlue w-fit"
              >
                Upload Datasets (.csv, .xlsx, .xls)
              </label>
              {/* Hidden File Input */}
              <input
                type="file"
                id="datasetInput"
                multiple
                accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={handleDataSetChange}
                className="hidden"
              />
              {/* File List */}
              <ul className="space-y-2">
                {dataset.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow"
                  >
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleDataSetRemoval(index)}
                      className="text-red-500 font-bold hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {/* Custom Upload Button */}
              <label
                htmlFor="datasetDocsInput"
                className="bg-dark text-white py-2 px-4 rounded-md cursor-pointer hover:bg-LightBlue w-fit"
              >
                Upload Dataset Instructions (.pdf)
              </label>
              {/* Hidden File Input */}
              <input
                type="file"
                id="datasetDocsInput"
                multiple
                ref={datasetDocsInputRef}
                accept=".pdf"
                onChange={handleDatasetDocsChange}
                className="hidden"
              />
              {/* File List */}
              <ul className="space-y-2">
                {datasetDocs.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow"
                  >
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleFileRemoval(index)}
                      title="Remove"
                      className="text-red-500 font-bold hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
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
