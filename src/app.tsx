import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Input from "./components/UI/input";
import Form from "./components/UI/form";
import CvHeader from "./components/CV/cvHeader";
import "../styles/main.css";
import React, { useState } from "react";
import CvBody from "./components/CV/cvBody";
import Button from "./components/UI/button";
interface IPersonalInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
}
export interface IEducation {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}
export interface IExperience {
  workplaceName: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}
interface IFormData {
  personalInfo: IPersonalInfo;
  education: IEducation[];
  workExperience: IExperience[];
}
const App = () => {
  const [formData, setFormData] = useState<IFormData>({
    personalInfo: { fullName: "", phoneNumber: "", email: "", address: "" },
    education: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
    workExperience: [
      {
        workplaceName: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
  });
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => {
      if (prevData) {
        return {
          ...prevData,
          personalInfo: {
            ...prevData.personalInfo,
            [e.target.id]: e.target.value, //why did we use square brackets instead of curly ones
          },
        };
      }
      return prevData;
    });
  };

  const handleEducationInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevData) => {
      if (prevData) {
        return {
          ...prevData,

          education: [
            { ...prevData.education[0], [e.target.id]: e.target.value },
          ],
        };
      }
      return prevData;
    });
  };
  return (
    <div className="bg-[#EFF0F3]  min-w-[800px]  " id="app">
      <main className="flex p-10 gap-[5px] 2xl:justify-center  ">
        <section
          id="cv-input"
          className=" flex flex-col gap-5  max-w-[505px] flex-1  "
        >
          <Form title={"Personal information"} id="personalInfo">
            <Input
              label={"Full name"}
              type={"Text"}
              id="fullName"
              onChange={handlePersonalInfoChange}
            />
            <Input
              label={"Email"}
              type={"Email"}
              id="email"
              onChange={handlePersonalInfoChange}
            />
            <Input
              label={"Phone number"}
              type={"tel"}
              id="phoneNumber"
              onChange={handlePersonalInfoChange}
            />
            <Input
              label={"Addresss"}
              type="text"
              id="address"
              onChange={handlePersonalInfoChange}
            />
          </Form>
          <Form title={"Education"} id="education">
            <Input
              label={"School"}
              type={"Text"}
              id="school"
              onChange={handleEducationInfoChange}
            />
            <Input
              label={"Degree"}
              type={"text"}
              id="degree"
              onChange={handleEducationInfoChange}
            />
            <div className="flex gap-4">
              <Input
                label={"Start Date"}
                type={"date"}
                className=""
                id="startDate"
                onChange={handleEducationInfoChange}
              />
              <Input
                label={"End Date"}
                type="date"
                className=""
                id="endDate"
                onChange={handleEducationInfoChange}
              />
            </div>
            <Input
              label="Location"
              type="text"
              id="location"
              onChange={handleEducationInfoChange}
            />
            <Button
              title="Save"
              className="bg-blue-400 text-white px-3 py-1 self-end mt-3 rounded-md"
            ></Button>
          </Form>
          <Form title={"Experience"} id="experience">
            <Input label={"Workplace Name"} type={"Text"} />
            <Input label={"Position Title"} type={"text"} />
            <div className="flex gap-4">
              <Input label={"Start Date"} type={"date"} className="flex-1" />
              <Input label={"End Date"} type="date" className="flex-1 " />
            </div>
            <Input label={"Location"} type={"text"} />
            <Input label={"Description"} type={"text"} />
          </Form>
        </section>{" "}
        <section
          id="cv-output"
          className=" min-w-[440px] flex-[3] max-w-[850px] flex flex-col"
        >
          <CvHeader
            name={formData.personalInfo.fullName}
            email={formData.personalInfo.email}
            phone={formData.personalInfo.phoneNumber}
            address={formData.personalInfo.address}
          ></CvHeader>
          <CvBody education={formData.education} />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

const DOCUMENT = document.getElementById("root");
if (DOCUMENT) {
  createRoot(DOCUMENT).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
