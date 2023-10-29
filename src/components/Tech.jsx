import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div data-sal="slide-down" data-sal-duration="500">
        <p className={`${styles.sectionSubText} text-center`}>Technology</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((tech) => (
          <div
            className="p-[2px] green-pink-gradient rounded-lg transition duration-500 ease-in-out hover:scale-110"
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
