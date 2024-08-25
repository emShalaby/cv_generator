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
    <div className="flex flex-[10] flex-col bg-white p-10">
      <div className="mt-4 flex justify-center bg-gray-100 text-xl font-bold">
        <h2>Education</h2>
      </div>
      <div id="education" className="min-h-[100px] pt-3">
        {education?.map((item, index) => {
          const { degree, endDate, location, school, startDate } = item;
          return (
            <div className="flex flex-1 gap-3" key={index}>
              <div className="w-[200px]">
                <p className="min-h-[30px] break-words">
                  {startDate} - {endDate}
                </p>
                <p className="break-words">{location}</p>
              </div>
              <div className="w-[100%]">
                <p className="min-h-[30px] break-words text-lg font-bold">
                  {school}
                </p>
                <p className="break-words">{degree}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center bg-gray-100 text-xl font-bold">
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
            <div className="flex flex-1 gap-3" key={index}>
              <div className="w-[200px]">
                <p className="min-h-[30px] break-words">
                  {startDate} - {endDate}
                </p>
                <p className="break-words">{location}</p>
              </div>

              <div className="w-[100%]">
                <p className="min-h-[30px] break-words text-lg font-bold">
                  {workplaceName}
                </p>
                <p className="min-h-[30px] break-words">{position}</p>
                <p className="break-words">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
