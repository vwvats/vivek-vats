import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

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
          <p className={`${styles.heroSubText} mt-2 max-w-md`}>
            I am{" "}
            <span className="text-[#915EFF] text-[22px] font-semibold">
              Vivek
            </span>{" "}
            - a programmer passionate about creating exceptional software.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
