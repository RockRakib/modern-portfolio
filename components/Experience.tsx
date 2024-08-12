import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 mt-10" id="testimonials">
      <h1 className="heading">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>

      <div className="w-full mt-16 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            borderRadius="1.7rem"
            duration={Math.floor(Math.random() * 10000 + 10000)}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            key={id}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16 "
              />
              <div className="lg:ms-5">
                <h1 className="text-xl md:text-2xl text-start font-bold  ">
                  {title}
                </h1>
                <p className="text-start text-white-100 font-semibold mt-3">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
