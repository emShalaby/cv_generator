import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Input from "./components/input";
import Form from "./components/form";
import "../styles/main.css";
const DOCUMENT = document.getElementById("root");
if (DOCUMENT) {
  createRoot(DOCUMENT).render(
    <StrictMode>
      <div className="bg-[#EFF0F3]" id="app">
        <header id="header">
          <h1 id="header-text">CV APPLICATION GENERATOR</h1>
        </header>
        <main className="flex p-10">
          <section id="cv-input" className="flex-1 flex flex-col gap-5">
            <Form title={"Personal information"} id="personal-information">
              <Input label={"Full name"} type={"Text"} />
              <Input label={"Phone number"} type={"tel"} />
              <Input label={"Email"} type={"Email"} />
              <Input label={"Addresss"} type="text" />
            </Form>
            <Form title={"Eductaion"} id="education">
              <Input label={"School"} type={"Text"} />
              <Input label={"Degree"} type={"text"} />
              <div className="flex gap-4">
                <Input label={"Start Date"} type={"date"} className="flex-1" />
                <Input label={"End Date"} type="date" className="flex-1 " />
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
              <Input label={"Position Title"} type={"text"} />
              <Input label={"Description"} type={"text"} />

            </Form>
          </section>{" "}
          <section id="cv-output" className="flex-1"></section>
        </main>
        <footer></footer>
      </div>
    </StrictMode>
  );
}
