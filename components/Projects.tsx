import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/3dPinCard";
import { AnimatedTooltip } from "./ui/Tooltip";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small Selection of <br />
        <span className="text-purple">Recent Projects </span>
      </h1>
      <div className="flex  flex-wrap  items-center justify-center p-4 gap-30  sm:gap-x-24 sm:gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] mt-28 sm:mt-0 lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]
          "
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[40vh] sm:h-[40vh]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl  ">
                  <img
                    src={img}
                    alt={img}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-3">
                {" "}
                {title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2
               "
              >
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex  items-center  ">
                  <AnimatedTooltip items={iconLists} />
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#Cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
