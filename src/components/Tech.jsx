import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Technology</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((tech) => (
          <div
            className="p-[2px] green-pink-gradient rounded-lg transition duration-500 ease-in-out hover:scale-105"
            key={tech.name}
          >
            <div className="p-3 md:w-28 md:h-28 w-24 h-24 bg-tertiary rounded-lg">
              <img
                src={tech.icon}
                title={tech.name}
                className={`h-[100%] w-[100%] ${
                  tech.name === "Next JS" ? "invert" : ""
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
