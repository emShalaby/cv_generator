import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Input from "./components/UI/input";
import Form from "./components/UI/form";
import CvHeader from "./components/CV/cvHeader";
import "../styles/main.css";
import React, { useState } from "react";
import CvBody from "./components/CV/cvBody";
import Button from "./components/UI/button";
enum PersonalInfoFields {
  fullName = "fullName",
  phoneNumber = "phoneNumber",
  email = "email",
  address = "address",
}
enum EducationFields {
  school = "school",
  degree = "degree",
  startDate = "startDate",
  endDate = "endDate",
  location = "location",
}
enum ExperienceFields {
  workplaceName = "workplaceName",
  position = "position",
  startDate = "startDate",
  endDate = "endDate",
  location = "location",
  description = "description",
}
type TPersonalInfo = Record<PersonalInfoFields, string>;
export type TEducation = Record<EducationFields, string>;
export type TExperience = Record<ExperienceFields, string>;

interface IFormData {
  personalInfo: TPersonalInfo;
  education: TEducation[];
  experience: TExperience[];
}
const App = () => {
  const [formData, setFormData] = useState<IFormData>({
    personalInfo: {
      [PersonalInfoFields.fullName]: "",
      phoneNumber: "",
      email: "",
      address: "",
    },
    education: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
    experience: [
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
            [e.target.name]: e.target.value,
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
            { ...prevData.education[0], [e.target.name]: e.target.value },
          ],
        };
      }
      return prevData;
    });
  };
  const handlExperienceInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevData) => {
      if (prevData) {
        return {
          ...prevData,

          experience: [
            { ...prevData.experience[0], [e.target.name]: e.target.value },
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
              name={PersonalInfoFields.fullName}
              onChange={handlePersonalInfoChange}
            />
            <Input
              label={"Email"}
              type={"Email"}
              name={PersonalInfoFields.email}
              onChange={handlePersonalInfoChange}
            />
            <Input
              label={"Phone number"}
              type={"tel"}
              name={PersonalInfoFields.phoneNumber}
              onChange={handlePersonalInfoChange}
            />
            <Input
              label={"Addresss"}
              type="text"
              name={PersonalInfoFields.address}
              onChange={handlePersonalInfoChange}
            />
          </Form>
          <Form title={"Education"} id="education">
            <Input
              label={"School"}
              type={"Text"}
              name={EducationFields.school}
              onChange={handleEducationInfoChange}
            />
            <Input
              label={"Degree"}
              type={"text"}
              name={EducationFields.degree}
              onChange={handleEducationInfoChange}
            />
            <div className="flex gap-4">
              <Input
                label={"Start Date"}
                type="text"
                name={EducationFields.startDate}
                onChange={handleEducationInfoChange}
              />
              <Input
                label={"End Date"}
                type="text"
                name={EducationFields.endDate}
                onChange={handleEducationInfoChange}
              />
            </div>
            <Input
              label="Location"
              type="text"
              name={EducationFields.location}
              onChange={handleEducationInfoChange}
            />
            <Button
              title="Save"
              className="bg-blue-400 text-white px-3 py-1 self-end mt-3 rounded-md"
            ></Button>
          </Form>
          <Form title={"Experience"} id="experience">
            <Input
              label={"Workplace Name"}
              type={"Text"}
              onChange={handlExperienceInfoChange}
              name={ExperienceFields.workplaceName}
            />
            <Input
              label={"Position Title"}
              type={"text"}
              onChange={handlExperienceInfoChange}
              name={ExperienceFields.position}
            />
            <div className="flex gap-4">
              <Input
                label={"Start Date"}
                type={"text"}
                className="flex-1"
                name={ExperienceFields.startDate}
                onChange={handlExperienceInfoChange}
              />
              <Input
                label={"End Date"}
                type="text"
                className="flex-1 "
                name={ExperienceFields.endDate}
                onChange={handlExperienceInfoChange}
              />
            </div>
            <Input
              label={"Location"}
              type={"text"}
              name={ExperienceFields.location}
              onChange={handlExperienceInfoChange}
            />
            <Input
              label={"Description"}
              type={"text"}
              name={ExperienceFields.description}
              onChange={handlExperienceInfoChange}
            />
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
          <CvBody
            education={formData.education}
            experience={formData.experience}
          />
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
