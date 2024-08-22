import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TextInput from "./components/input";
import Form from "./components/form";
import "../styles/main.css";
const DOCUMENT = document.getElementById("root");
if (DOCUMENT) {
  createRoot(DOCUMENT).render(
    <StrictMode>
      <header id="header">
        <h1 id="header-text">CV APPLICATION GENERATOR</h1>
      </header>
      <main>
        <section id="cv-input">
          <Form title={"Personal information"}>
            <TextInput label={"Name"} type={"Text"} />
            <TextInput label={"Phone number"} type={"tel"} />
            <TextInput label={"Email"} type={"Email"} />
            <TextInput label={"Addresss"} type="text" />
          </Form>
        </section>{" "}
        <section id="cv-output"></section>
      </main>
      <footer></footer>
    </StrictMode>
  );
}
