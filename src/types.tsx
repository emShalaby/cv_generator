export enum PersonalInfoFields {
  fullName = "fullName",
  phoneNumber = "phoneNumber",
  email = "email",
  address = "address",
}
export enum EducationFields {
  school = "school",
  degree = "degree",
  startDate = "startDate",
  endDate = "endDate",
  location = "location",
  id = "id",
}
export enum ExperienceFields {
  workplaceName = "workplaceName",
  position = "position",
  startDate = "startDate",
  endDate = "endDate",
  location = "location",
  description = "description",
  id = "id",
}
export type TPersonalInfo = Record<PersonalInfoFields, string>;
export type TEducation = Record<EducationFields, string>;
export type TExperience = Record<ExperienceFields, string>;
export type TFormData = {
  personalInfo: TPersonalInfo;
  education: TEducation[];
  experience: TExperience[];
};
