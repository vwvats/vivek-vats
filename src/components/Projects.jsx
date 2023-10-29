import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { gitlab, signal } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  repoLink,
  liveLink,
}) => {
  return (
    <Tilt
      className="lg:w-[360px] md:w-[420px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <div
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-delay={index * 100}
        className="bg-tertiary p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-semibold text-[24px]">{name}</h3>
          <div className="flex mt-2 mb-3">
            <div
              onClick={() => window.open(repoLink, "_blank")}
              className="flex justify-center items-center cursor-pointer green-pink-gradient p-[1px] rounded-md"
            >
              <img
                src={gitlab}
                alt="source code"
                className="w-8 h-8 bg-primary p-[5px] rounded-md"
              />
            </div>
            {liveLink === "" ? null : (
              <div
                onClick={() => window.open(liveLink, "_blank")}
                className="flex justify-center items-center cursor-pointer ml-3 green-pink-gradient p-[1px] rounded-md"
              >
                <img
                  src={signal}
                  alt="live demo"
                  className="w-8 h-8 bg-primary p-[5px] rounded-md"
                />
              </div>
            )}
          </div>
          <p className="mt-2 text-secondary text-[15px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <>
      <div data-sal="slide-down" data-sal-duration="500">
        <p className={styles.sectionSubText}>Projects</p>
        <h2 className={styles.sectionHeadText}>Portfolio</h2>
      </div>

      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-delay="250"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A few samples of my work that showcase the breadth and depth of my
        experience. Each one is described briefly with links to live demos and
        source code.
      </div>

      <div className="mt-20 flex flex-wrap gap-8 place-content-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
