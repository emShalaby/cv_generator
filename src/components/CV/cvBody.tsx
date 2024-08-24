import { TEducation, TExperience } from "../../app";

interface ICvBodyProps {
  education?: TEducation[];
  experience?: TExperience[];
}

function CvEducation(props: TEducation) {
  return <div></div>;
}
function CvExperience(props: TExperience) {}

export default function CvBody({ education, experience }: ICvBodyProps) {
  return (
    <div className="flex flex-col flex-[10] bg-white p-10">
      <div className="bg-gray-100 justify-center flex mt-4 text-xl font-bold ">
        <h2>Education</h2>
      </div>
      <div id="education" className="min-h-[100px] pt-3">
        {education?.map((item, index) => {
          const { degree, endDate, location, school, startDate } = item;
          return (
            <div className="flex gap-3 flex-1" key={index}>
              <div className="flex flex-col w-[30%] flex-wrap">
                <p className=" min-h-[30px]">
                  {startDate} - {endDate}
                </p>
                <p>{location}</p>
              </div>
              <br />
              <div className="flex flex-col  ">
                <p className="min-h-[30px] font-bold text-lg w-[50%]">
                  {school}
                </p>
                <p className="">{degree}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-100 justify-center flex mt-4 text-xl font-bold">
        <h2>Experience</h2>
      </div>
      <div id="experience">
        {experience?.map((item, index) => {
          const {
            workplaceName,
            position,
            location,
            endDate,
            startDate,
            description,
          } = item;
          return (
            <div className="flex gap-3 flex-1" key={index}>
              <div className="flex flex-col w-[30%] flex-wrap">
                <p className=" min-h-[30px]">
                  {startDate} - {endDate}
                </p>
                <p>{location}</p>
              </div>
              <br />
              <div className="flex flex-col  ">
                <p className="min-h-[30px] font-bold text-lg w-[50%]">
                  {workplaceName}
                </p>
                <p className="min-h-[30px]">{position}</p>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
