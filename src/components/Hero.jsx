import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { arrowDown } from "../assets";

const Hero = () => {
  const greetings = ["Hello", "नमस्ते", "こんにちは", "Grüße"];
  const [greeting, setGreeting] = useState(greetings[0]);
  useEffect(() => {
    const greetInterval = setInterval(() => {
      const index =
        greeting === "Hello"
          ? 1
          : greeting === "नमस्ते"
          ? 2
          : greeting === "こんにちは"
          ? 3
          : 0;
      setGreeting(greetings[index]);
    }, 1000);

    return () => clearInterval(greetInterval);
  }, [greeting]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>
            {greeting}!
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 md:max-w-[90%] lg:max-w-md`}
          >
            I am <span className="text-[#915EFF] font-semibold">Vivek</span> - a
            programmer passionate about creating exceptional software.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <img
            src={arrowDown}
            alt="arrow pointing down"
            className="w-16 h-16 mb-1 animate-bounce"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
