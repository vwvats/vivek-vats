import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      data-sal="slide-right"
      data-sal-duration="500"
      data-sal-delay={index * 250}
      className="w-full rounded-[20px] p-[2px] green-pink-gradient shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] text-center">{title}</h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div data-sal="slide-down" data-sal-duration="500">
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </div>

      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-delay="250"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Software Engineer with 5 years of experience building web,
        cross-platform mobile, and blockchain applications. Have contributed to
        all aspects of software products - design, development, testing,
        deployment, maintenance - in both enterprise and consumer domains. My
        primary areas of expertise are web & mobile frontends and TypeScript,
        Node, & React are the technologies I’m most proficient in.
      </div>

      <div className="mt-20 flex flex-wrap gap-10 place-content-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
