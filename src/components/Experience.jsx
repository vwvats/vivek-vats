import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { download, resume } from "../assets";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white md:text-[24px] text-[22px] font-semibold">
          {experience.title}
        </h3>
        <span
          className="text-secondary md:text-[18px] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </span>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 md:text-[16px] text-[15px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className="w-fit mx-auto mt-8 green-pink-gradient p-[2px] rounded-xl">
        <a
          href={resume}
          download="vivek-vats-resume"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-tertiary flex justify-between items-center px-6 py-3 rounded-xl">
            <img
              src={download}
              alt="download sign"
              className="md:w-10 md:h-10 w-6 h-6 mr-4"
            />
            <span className="md:text-lg text-base text-white">
              Download Resume
            </span>
          </button>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
