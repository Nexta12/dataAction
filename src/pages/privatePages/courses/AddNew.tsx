import React, { useRef, useState } from "react";
import { SubmitButton } from "@components/button/SubmitButton";
import Input from "@components/form/Input";
import Select from "@components/form/Select";
import SimpleTextArea from "@components/form/SimpleTextArea";
import Heading from "@components/heading/Heading";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";

const AddNewCourse = () => {
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [courseOutline, setCourseOutline] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null,
  );
  const courseOutlineInputRef = useRef<HTMLInputElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [modules, setModules] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [timeRequirement, setTimeRequirement] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [studentLearningPoints, setStudentLearningPoints] = useState<string[]>(
    [],
  );
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const selectOptions = [
    { title: "Advanced", _id: "1" },
    { title: "Intermediate", _id: "2" },
    { title: "Beginners", _id: "3" },
    { title: "Absolute Beginners", _id: "4" },
  ];

  // Handle file selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverImage(file);
      // Generate a preview URL
      const previewURL = URL.createObjectURL(file);
      setCoverImagePreview(previewURL);
    }
  };

  // Remove selected file
  const removeImage = () => {
    setCoverImage(null); // Clear the file
    setCoverImagePreview(null); // Clear the preview
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const inputValue = event.target.value;
    setTextareaValue(inputValue);

    // Split by new lines, trim spaces, and filter empty lines
    const linesArray = inputValue
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    setStudentLearningPoints(linesArray); // Update the array of points
  };

  const handleCourseOutlineChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
     setCourseOutline(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Prepare FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("duration", duration);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("totalModules", modules);
    formData.append("experienceLevel", level);
    formData.append("weeklyTimeRequirement", timeRequirement);

    // Append cover image and course outline if available
    if (coverImage) formData.append("images", coverImage);
    if (courseOutline) formData.append("courseOutline", courseOutline);

    // Append what students would learn (array as JSON string)
    formData.append("whatYoudLearn", JSON.stringify(studentLearningPoints));

    setLoading(true);

    try {
      await apiClient.post(endpoints.addNewCourse, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage({
        errorMessage: null,
        successMessage: "Course created successfully",
      });

      setCoverImage(null);
      setCourseOutline(null);
      setCoverImagePreview(null);
      setTitle("");
      setPrice("");
      setModules("");
      setDuration("");
      setLevel("");
      setTimeRequirement("");
      setDescription("");
      setTextareaValue("")
      setStudentLearningPoints([]);
        // Clear file input
    if (courseOutlineInputRef.current) {
        courseOutlineInputRef.current.value = "";
      }
    } catch (error) {
      setMessage({ errorMessage: ErrorFormatter(error), successMessage: null });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <FaArrowLeftLong
        onClick={() => handleGoBack()}
        className="cursor-pointer text-2xl text-dark"
      />
      <AlertMessage alert={message} />
      <Heading className="text-center">Create Course</Heading>
      <form method="post" onSubmit={handleSubmit}>
        {/* File Upload Section */}
        <div className="mb-6">
          <div className="text-sm font-bold font-Lexend text-black/60 mb-2">
            Cover Image (jpg, jpeg, png)
          </div>
          <div className="flex items-center gap-4">
            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="hidden"
            />
            {/* Custom Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Select Cover Image
            </button>
          </div>

          {/* Preview Section */}
          {coverImagePreview && (
            <div className="mt-4">
              <img
                src={coverImagePreview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={removeImage}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>

        {/* Remaining Form */}
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-between mb-4">
          <Input
            label="Title*"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex items-center gap-4 justify-between">
            <Input
              label="Price £*"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              label="No of Modules"
              name="totalModules"
              value={modules}
              onChange={(e) => setModules(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4">
          <Input
            label="Course Duration*"
            name="duration"
            placeholder="Eg: 4 weeks"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <Select
            options={selectOptions}
            selectLabel="Experience Level"
            name="experienceLevel"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
          <Input
            label="Weekly Time Requirement"
            name="weeklyTimeRequirement"
            placeholder="Eg: 3 hours a week"
            value={timeRequirement}
            onChange={(e) => setTimeRequirement(e.target.value)}
          />
        </div>

        <SimpleTextArea
          label="What Students would Learn"
          placeholder="Each Point should start in a new line"
          className="h-32"
          name="whatYoudLearn"
          value={textareaValue}
          onChange={handleTextareaChange}
        />
        {/* Preview Points (Optional) */}
        {studentLearningPoints.length > 0 && (
          <div className="mb-4">
            <h4 className="font-bold mb-2">Preview:</h4>
            <ul className="list-disc ml-5">
              {studentLearningPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        <SimpleTextArea
          label="Detailed Course Description"
          placeholder=""
          className="h-52"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="my-4">
          <div className="text-sm font-bold font-Lexend text-black/60 mb-2">
            Upload Course Outline (PDF only)
          </div>
          <input
            type="file"
            name="courseOutline"
            ref={courseOutlineInputRef}
            accept="application/pdf"
            onChange={handleCourseOutlineChange}
          />
        </div>
        <SubmitButton
          label="Create Course"
          isLoading={loading}
          className="mt-3 mb-12 w-full"
        />
      </form>
    </div>
  );
};

export default AddNewCourse;
