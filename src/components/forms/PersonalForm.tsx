import { PersonalInfoFields } from "../../types";
import Form from "../UI/form";
import Input from "../UI/input";
import { TFormData } from "../../types";
interface IPersonalForm {
  handlePersonalInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: TFormData;
}
export default function PersonalForm({
  handlePersonalInfoChange,
  formData,
}: IPersonalForm) {
  return (
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
  );
}
