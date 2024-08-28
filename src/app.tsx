import Input from "./components/UI/input";
import Form from "./components/UI/form";
import "./styles/main.css";
import React, { useState } from "react";
import CV from "./components/CV/CV";
import TextArea from "./components/UI/textArea";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/UI/card";
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
  id = "id",
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
  name: "Mohammed Shalaby",
  email: "mohammed.shalaby@mail.co.eg",
  phone: "+20 3245 5521 5521",
  address: "Mansoura, EG",
  school: "Mansoura University",
  degree: "Bachelors in Mechanical Engineering",
  eduStartDate: "08/2019",
  eduEndDate: "08/2024",
  eduLocation: "Mansoura, EG",
  workplaceName: "Umbrella Inc.",
  position: "UX & UI Designer",
  workStartDate: "08/2020",
  workEndDate: "present",
  workLocation: "New York City, US",
  description:
    "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
};
export interface IFormData {
  personalInfo: TPersonalInfo;
  education: TEducation[];
  experience: TExperience[];
}
export const App = () => {
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
        [EducationFields.id]: String(uuidv4()),
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
  const [selectedExpItem, setSelectedExpItem] = useState<null | TExperience>(
    null,
  );
  const [selectedEduItem, setSelectedEduItem] = useState<null | TEducation>(
    null,
  );
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prevData) => {
      if (prevData && selectedEduItem) {
        const selectedItemIndex = prevData.education.findIndex(
          (item) => item.id === selectedEduItem.id,
        );
        const clonedEducation = [...prevData.education];
        clonedEducation[selectedItemIndex] = {
          ...clonedEducation[selectedItemIndex],
          [e.target.name]: e.target.value,
        };
        return {
          ...prevData,

          education: clonedEducation,
        };
      }
      return prevData;
    });
  };
  const deleteSelectedEduItem = () => {
    setFormData((prevData) => {
      if (prevData && selectedEduItem) {
        const clonedEducation = [...prevData.education];

        clonedEducation.splice(clonedEducation.indexOf(selectedEduItem), 1);
        return {
          ...prevData,

          education: clonedEducation,
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
  const deleteSelectedExpItem = () => {
    setFormData((prevData) => {
      if (prevData && selectedExpItem) {
        const clonedExperience = [...prevData.experience];

        clonedExperience.splice(clonedExperience.indexOf(selectedExpItem), 1);
        return {
          ...prevData,

          experience: clonedExperience,
        };
      }
      return prevData;
    });
  };
  return (
    <div className=" " id="app">
      <main className="flex gap-3 bg-gray-200 p-10 2xl:justify-center ">
        <section
          id="cv-input"
          className="flex max-w-[505px] flex-1 flex-col gap-2 "
        >
          <Card title="Personal Details">
            <Form id="personalInfo">
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
          </Card>
          {!selectedEduItem ? (
            <Card title="Education">
              {formData.education.map((item) => {
                return (
                  <div key={uuidv4()}>
                    <div
                      className="mt-3 border-b-4 border-solid border-gray-100 p-2 text-lg font-semibold hover:cursor-pointer md:px-5 md:py-3"
                      onClick={() => {
                        setSelectedEduItem(item);
                        console.log("selected edu item:", item);
                      }}
                    >
                      {item.school}
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => {
                  const id = uuidv4();
                  setFormData((prevData) => {
                    if (prevData) {
                      const clonedEducation = [...prevData.education];
                      const newItem = {
                        [EducationFields.school]: "",
                        [EducationFields.degree]: "",
                        [EducationFields.startDate]: "",
                        [EducationFields.endDate]: "",
                        [EducationFields.location]: "",
                        [EducationFields.id]: id,
                      };
                      clonedEducation.push(newItem);
                      setSelectedEduItem(newItem);
                      return {
                        ...prevData,
                        education: clonedEducation,
                      };
                    }
                    return prevData;
                  });
                }}
                className="m-5 self-center rounded-full border-4 border-solid bg-white px-4 py-[5px] text-sm font-bold text-black"
              >
                + Education
              </button>
            </Card>
          ) : (
            <Card title="Education">
              <Form id="education">
                <Input
                  label={"School"}
                  type={"Text"}
                  onChange={handleEducationInfoChange}
                  name={EducationFields.school}
                  value={selectedEduItem.school}
                />
                <Input
                  label={"Degree"}
                  type={"text"}
                  onChange={handleEducationInfoChange}
                  name={EducationFields.degree}
                  value={selectedEduItem.degree}
                />
                <div className="flex gap-4">
                  <Input
                    label={"Start Date"}
                    type={"text"}
                    className="flex-1"
                    name={EducationFields.startDate}
                    onChange={handleEducationInfoChange}
                    value={selectedEduItem.startDate}
                  />
                  <Input
                    label={"End Date"}
                    type="text"
                    className="flex-1"
                    name={EducationFields.endDate}
                    onChange={handleEducationInfoChange}
                    value={selectedEduItem.endDate}
                  />
                </div>
                <Input
                  label={"Location"}
                  type={"text"}
                  name={EducationFields.location}
                  onChange={handleEducationInfoChange}
                  value={selectedEduItem.location}
                />
                <div className="width-[100%] flex">
                  <button
                    className="mt-3 self-start rounded-md bg-red-500 px-3 py-1 text-white"
                    onClick={() => {
                      deleteSelectedEduItem();
                      setSelectedEduItem(null);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="ml-auto mt-3 self-end rounded-md bg-blue-400 px-3 py-1 text-white"
                    onClick={() => setSelectedEduItem(null)}
                  >
                    Save
                  </button>
                </div>
              </Form>
            </Card>
          )}
          {!selectedExpItem ? (
            <Card title="Experience">
              {formData.experience.map((item) => {
                return (
                  <div key={uuidv4()}>
                    <div
                      className="mt-3 border-b-4 border-solid border-gray-100 p-2 text-lg font-semibold hover:cursor-pointer md:px-5 md:py-3"
                      onClick={() => setSelectedExpItem(item)}
                    >
                      {item.workplaceName}
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => {
                  const id = uuidv4();
                  setFormData((prevData) => {
                    if (prevData) {
                      const clonedExperience = [...prevData.experience];
                      const newItem = {
                        [ExperienceFields.description]: "",
                        [ExperienceFields.endDate]: "",
                        [ExperienceFields.startDate]: "",
                        [ExperienceFields.position]: "",
                        [ExperienceFields.location]: "",
                        [ExperienceFields.workplaceName]: "",
                        [ExperienceFields.id]: id,
                      };
                      clonedExperience.push(newItem);
                      setSelectedExpItem(newItem);
                      return {
                        ...prevData,
                        experience: clonedExperience,
                      };
                    }
                    return prevData;
                  });
                }}
                className="m-5 self-center rounded-full border-4 border-solid bg-white px-4 py-[5px] text-sm font-bold text-black"
              >
                + Experience
              </button>
            </Card>
          ) : (
            <Card title="Experience">
              <Form id="experience">
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
                <div className="width-[100%] flex">
                  <button
                    className="mt-3 self-start rounded-md bg-red-500 px-3 py-1 text-white"
                    onClick={() => {
                      deleteSelectedExpItem();
                      setSelectedExpItem(null);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="ml-auto mt-3 self-end rounded-md bg-blue-400 px-3 py-1 text-white"
                    onClick={() => setSelectedExpItem(null)}
                  >
                    Save
                  </button>
                </div>
              </Form>
            </Card>
          )}
        </section>{" "}
        <section
          id="cv-output"
          className="flex min-w-[440px] max-w-[850px] flex-[3] flex-col "
        >
          <CV Data={formData} />
        </section>
      </main>
    </div>
  );
};
