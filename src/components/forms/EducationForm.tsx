import { EducationFields, TEducation } from "../../types";
import Form from "../UI/form";
import Input from "../UI/input";
interface IEducationForm {
  handleEducationInfoChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEventHandler<HTMLTextAreaElement>,
  ) => void;
  selectedEduItem: TEducation;
}
export default function EducationForm({
  handleEducationInfoChange,
  selectedEduItem,
}: IEducationForm) {
  return (
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
    </Form>
  );
}
