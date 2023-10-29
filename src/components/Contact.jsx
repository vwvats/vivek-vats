import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { phone, mail, gitlab } from "../assets";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <div
        data-sal="slide-right"
        data-sal-duration="750"
        data-sal-delay="250"
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl h-[480px]"
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Me</h3>

        <div className="flex items-center mt-10">
          <a href="tel:8149912611">
            <div className="green-pink-gradient p-[2px] rounded-md transition duration-500 ease-in-out hover:scale-110">
              <img
                src={phone}
                alt="phone icon"
                className="w-12 h-12 p-2 bg-primary rounded-md max-[320px]:w-8 max-[320px]:h-8 max-[320px]:p-1"
              />
            </div>
          </a>
          <p className="ml-5 text-lg max-[320px]:text-sm">(+91) 81499-12611</p>
        </div>

        <div className="flex items-center mt-10">
          <a href="mailto:contact@vivekvats.in" target="_blank">
            <div className="green-pink-gradient p-[2px] rounded-md transition duration-500 ease-in-out hover:scale-110">
              <img
                src={mail}
                alt="mail icon"
                className="w-12 h-12 p-2 bg-primary rounded-md max-[320px]:w-8 max-[320px]:h-8 max-[320px]:p-1"
              />
            </div>
          </a>
          <p className="ml-5 text-lg max-[320px]:text-sm">
            contact@vivekvats.in
          </p>
        </div>

        <div className="flex items-center mt-10">
          <a href="https://gitlab.com/vivekvats" target="_blank">
            <div className="green-pink-gradient p-[2px] rounded-md transition duration-500 ease-in-out hover:scale-110">
              <img
                src={gitlab}
                alt="gitlab icon"
                className="w-12 h-12 p-2 bg-primary rounded-md max-[320px]:w-8 max-[320px]:h-8 max-[320px]:p-1"
              />
            </div>
          </a>
          <p className="ml-5 text-lg max-[320px]:text-sm">
            gitlab.com/vivekvats
          </p>
        </div>
      </div>

      <div
        data-sal="slide-left"
        data-sal-duration="750"
        data-sal-delay="250"
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
