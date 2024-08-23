import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Input from "./components/input";
import Form from "./components/form";
import CvHeader from "./components/cvHeader";
import "../styles/main.css";
import React, { useState } from "react";
interface IPersonalInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
}
interface IEducation {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}
interface IExperience {
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => {
      if (prevData) {
        return {
          ...prevData,
          personalInfo: {
            ...prevData.personalInfo,
            [e.target.id]: e.target.value,
          },
        };
      }
      return prevData;
    });
  };
  return (
    <div className="bg-[#EFF0F3]   min-w-[800px] h-[100vh]" id="app">
      <main className="flex p-10 gap-[5px] ">
        <section id="cv-input" className=" flex flex-col gap-5  max-w-[505px] flex-1  ">
          <Form title={"Personal information"} id="personalInfo">
            <Input
              label={"Full name"}
              type={"Text"}
              id="fullName"
              onChange={handleChange}
            />
            <Input
              label={"Phone number"}
              type={"tel"}
              id="phoneNumber"
              onChange={handleChange}
            />
            <Input
              label={"Email"}
              type={"Email"}
              id="email"
              onChange={handleChange}
            />
            <Input
              label={"Addresss"}
              type="text"
              id="address"
              onChange={handleChange}
            />
          </Form>
          <Form title={"Eductaion"} id="education">
            <Input label={"School"} type={"Text"} />
            <Input label={"Degree"} type={"text"} />
            <div className="flex gap-4">
              <Input label={"Start Date"} type={"date"} className="" />
              <Input label={"End Date"} type="date" className="" />
            </div>
            <Input label="Location" type="text" />
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
        <section id="cv-output" className=" min-w-[440px] flex-[3] max-w-[850px]">
          <CvHeader
            name={formData.personalInfo.fullName}
            email={formData.personalInfo.email}
            phone={formData.personalInfo.phoneNumber}
            address={formData.personalInfo.address}
          ></CvHeader>
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
