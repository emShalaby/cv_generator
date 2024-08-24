import { IEducation, IExperience } from "../../app";

interface ICvBody {
  education?: IEducation[];
  experience?: IExperience[];
}

function CvEducation(props: IEducation) {
  return <div></div>;
}
function CvExperience(props: IExperience) {}

export default function CvBody({ education }: ICvBody) {
  return (
    <div className="flex flex-col flex-[10]">
      <div className="bg-gray-300 justify-center flex mt-4 text-xl font-bold ">
        <h2>Education</h2>
      </div>
      <div id="education">
        {education?.map((item, index) => {
          const { degree, endDate, location, school, startDate } = item;
          return (
            <div className="flex gap-3" key={index}>
              <div className="flex flex-col">
                {degree}
                {endDate}
              </div>
              <div className="flex flex-col">
                {location}
                {school}
                {startDate}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-300 justify-center flex mt-4 text-xl font-bold">
        <h2>Experience</h2>
      </div>
    </div>
  );
}
