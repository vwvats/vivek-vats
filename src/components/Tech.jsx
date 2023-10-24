import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technology</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 green-pink-gradient mt-20 p-10 rounded-[20px]">
        {technologies.map((tech) => (
          <div
            className={`md:w-28 md:h-28 w-24 h-24 rounded-xl bg-black ${
              tech.name === "Three JS" ? "p-1" : "p-3"
            }`}
            key={tech.name}
          >
            <img
              src={tech.icon}
              className="h-[100%] w-[100%]"
              title={tech.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
