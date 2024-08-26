import CvBody from "./cvBody";
import CvHeader from "./cvHeader";
import { IFormData } from "../../app";

export default function CV({ Data }: { Data: IFormData }) {
  return (
    <div>
      <CvHeader
        name={Data.personalInfo.fullName}
        email={Data.personalInfo.email}
        phone={Data.personalInfo.phoneNumber}
        address={Data.personalInfo.address}
      ></CvHeader>
      <CvBody education={Data.education} experience={Data.experience} />
    </div>
  );
}
