import { ExperienceFields, TExperience } from "../../types";
import Form from "../UI/form";
import Input from "../UI/input";
import TextArea from "../UI/textArea";
interface IExperienceForm {
  handlExperienceInfoChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEventHandler<HTMLTextAreaElement>,
  ) => void;
  selectedExpItem: TExperience;
}
export default function ExperienceForm({
  handlExperienceInfoChange,
  selectedExpItem,
}: IExperienceForm) {
  return (
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
    </Form>
  );
}
