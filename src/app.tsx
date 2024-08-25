import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Input from "./components/UI/input";
import Form from "./components/UI/form";
import CvHeader from "./components/CV/cvHeader";
import "../styles/main.css";
import React, { useState } from "react";
import CvBody from "./components/CV/cvBody";
import Button from "./components/UI/button";
import TextArea from "./components/UI/textArea";
import { v4 as uuidv4 } from "uuid";

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
  id = "id",
}
type TPersonalInfo = Record<PersonalInfoFields, string>;
export type TEducation = Record<EducationFields, string>;
export type TExperience = Record<ExperienceFields, string>;
const placeHolderValues = {
  name: "Josephine Meyers",
  email: "josephine.meyers@mail.co.uk",
  phone: "+44 3245 5521 5521",
  address: "London, UK",
  school: "London City University",
  degree: "Bachelors in Economics",
  eduStartDate: "08/2020",
  eduEndDate: "present",
  eduLocation: "New York City, US",
  workplaceName: "Umbrella Inc.",
  position: "UX & UI Designer",
  workStartDate: "08/2020",
  workEndDate: "present",
  workLocation: "New York City, US",
  description:
    "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
};
interface IFormData {
  personalInfo: TPersonalInfo;
  education: TEducation[];
  experience: TExperience[];
}
const App = () => {
  const [formData, setFormData] = useState<IFormData>({
    personalInfo: {
      [PersonalInfoFields.fullName]: placeHolderValues.name,
      [PersonalInfoFields.phoneNumber]: placeHolderValues.phone,
      [PersonalInfoFields.address]: placeHolderValues.address,
      [PersonalInfoFields.email]: placeHolderValues.email,
    },
    education: [
      {
        [EducationFields.school]: placeHolderValues.school,
        [EducationFields.degree]: placeHolderValues.degree,
        [EducationFields.startDate]: placeHolderValues.eduStartDate,
        [EducationFields.endDate]: placeHolderValues.eduEndDate,
        [EducationFields.location]: placeHolderValues.eduLocation,
      },
    ],
    experience: [
      {
        [ExperienceFields.workplaceName]: placeHolderValues.workplaceName,
        [ExperienceFields.position]: placeHolderValues.position,
        [ExperienceFields.startDate]: placeHolderValues.workStartDate,
        [ExperienceFields.endDate]: placeHolderValues.workEndDate,
        [ExperienceFields.description]: placeHolderValues.description,
        [ExperienceFields.location]: placeHolderValues.workLocation,
        [ExperienceFields.id]: String(uuidv4()),
      },
    ],
  });
  const [selectedExpItem, setSelectedExpItem] =
    useState<null | Partial<TExperience>>(null);
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
    e: React.ChangeEvent<HTMLInputElement>,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prevData) => {
      if (prevData && selectedExpItem) {
        const selectedItemIndex = prevData.experience.findIndex(
          (item) => item.id === selectedExpItem.id,
        );
        const clonedExperience = [...prevData.experience];
        clonedExperience[selectedItemIndex] = {
          ...clonedExperience[selectedItemIndex],
          [e.target.name]: e.target.value,
        };
        return {
          ...prevData,

          experience: clonedExperience,
        };
      }
      return prevData;
    });
  };
  return (
    <div className="min-w-[800px] bg-[#EFF0F3]" id="app">
      <main className="flex gap-[20px] p-10 2xl:justify-center">
        <section
          id="cv-input"
          className="flex max-w-[505px] flex-1 flex-col gap-5"
        >
          <Form title={"Personal information"} id="personalInfo">
            <Input
              label={"Full name"}
              type={"Text"}
              name={PersonalInfoFields.fullName}
              onChange={handlePersonalInfoChange}
              value={formData.personalInfo.fullName}
            />
            <Input
              label={"Email"}
              type={"Email"}
              name={PersonalInfoFields.email}
              onChange={handlePersonalInfoChange}
              value={formData.personalInfo.email}
            />
            <Input
              label={"Phone number"}
              type={"tel"}
              name={PersonalInfoFields.phoneNumber}
              onChange={handlePersonalInfoChange}
              value={formData.personalInfo.phoneNumber}
            />
            <Input
              label={"Addresss"}
              type="text"
              name={PersonalInfoFields.address}
              onChange={handlePersonalInfoChange}
              value={formData.personalInfo.address}
            />
          </Form>
          <Form title={"Education"} id="education">
            <Input
              label={"School"}
              type={"Text"}
              name={EducationFields.school}
              onChange={handleEducationInfoChange}
              value={formData.education[0].school}
            />
            <Input
              label={"Degree"}
              type={"text"}
              name={EducationFields.degree}
              onChange={handleEducationInfoChange}
              value={formData.education[0].degree}
            />
            <div className="flex gap-4">
              <Input
                label={"Start Date"}
                type="text"
                name={EducationFields.startDate}
                onChange={handleEducationInfoChange}
                value={formData.education[0].startDate}
              />
              <Input
                label={"End Date"}
                type="text"
                name={EducationFields.endDate}
                onChange={(e) => {
                  handleEducationInfoChange(e);
                }}
                value={formData.education[0].endDate}
              />
            </div>
            <Input
              label="Location"
              type="text"
              name={EducationFields.location}
              onChange={handleEducationInfoChange}
              value={formData.education[0].location}
            />
            <Button
              title="Save"
              className="mt-3 self-end rounded-md bg-blue-400 px-3 py-1 text-white"
            ></Button>
          </Form>
          {!selectedExpItem ? (
            <div>
              {formData.experience.map((item, index) => {
                return (
                  <div key={index}>
                    <div onClick={() => setSelectedExpItem(item)}>
                      {item.workplaceName}
                    </div>
                  </div>
                );
              })}
              <Button
                title="Add"
                onclick={() => {
                  formData.experience.push({
                    [ExperienceFields.workplaceName]: "",
                    [ExperienceFields.position]: "",
                    [ExperienceFields.startDate]: "",
                    [ExperienceFields.endDate]: "",
                    [ExperienceFields.description]: "",
                    [ExperienceFields.location]: "",
                    [ExperienceFields.id]: String(uuidv4()),
                  });
                  setSelectedExpItem(
                    formData.experience[formData.experience.length - 1],
                  );
                }}
              />
            </div>
          ) : (
            <Form title={"Experience"} id="experience">
              <Input
                label={"Workplace Name"}
                type={"Text"}
                onChange={handlExperienceInfoChange}
                name={ExperienceFields.workplaceName}
                value={selectedExpItem.workplaceName}
              />
              <Input
                label={"Position Title"}
                type={"text"}
                onChange={handlExperienceInfoChange}
                name={ExperienceFields.position}
                value={selectedExpItem.position}
              />
              <div className="flex gap-4">
                <Input
                  label={"Start Date"}
                  type={"text"}
                  className="flex-1"
                  name={ExperienceFields.startDate}
                  onChange={handlExperienceInfoChange}
                  value={selectedExpItem.startDate}
                />
                <Input
                  label={"End Date"}
                  type="text"
                  className="flex-1"
                  name={ExperienceFields.endDate}
                  onChange={handlExperienceInfoChange}
                  value={selectedExpItem.endDate}
                />
              </div>
              <Input
                label={"Location"}
                type={"text"}
                name={ExperienceFields.location}
                onChange={handlExperienceInfoChange}
                value={selectedExpItem.location}
              />
              <TextArea
                label={"Description"}
                name={ExperienceFields.description}
                onChange={handlExperienceInfoChange}
                value={selectedExpItem.description}
                className="resize-y"
              />
              <Button
                title="Save"
                className="mt-3 self-end rounded-md bg-blue-400 px-3 py-1 text-white"
                onclick={() => {
                  formData.experience.push();
                  setSelectedExpItem(null);
                }}
              />
            </Form>
          )}
        </section>{" "}
        <section
          id="cv-output"
          className="flex min-w-[440px] max-w-[850px] flex-[3] flex-col"
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
    </StrictMode>,
  );
}
