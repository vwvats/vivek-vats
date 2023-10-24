import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { phone, mail, gitlab } from "../assets";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl md:h-[440px] h-[350px]"
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Me</h3>
        <div className="flex items-center mt-10">
          <a href="tel:8149912611">
            <img
              src={phone}
              alt="phone icon"
              className="w-10 h-10 mr-5 green-pink-gradient rounded-md p-1"
            />
          </a>
          <p className="text-lg">(+91) 81499-12611</p>
        </div>
        <div className="flex items-center mt-10">
          <a href="mailto:contact@vivekvats.in" target="_blank">
            <img
              src={mail}
              alt="mail icon"
              className="w-10 h-10 mr-5 green-pink-gradient rounded-md p-1"
            />
          </a>
          <p className="text-lg">contact@vivekvats.in</p>
        </div>
        <div className="flex items-center mt-10">
          <a href="https://gitlab.com/vivekvats" target="_blank">
            <img
              src={gitlab}
              alt="gitlab icon"
              className="w-10 h-10 mr-5 green-pink-gradient rounded-md p-1"
            />
          </a>
          <p className="text-lg">gitlab.com/vivekvats</p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
