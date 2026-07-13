import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="font-titleFont grid grid-cols-1 lgl:grid-cols-2 gap-12 lgl:gap-16"
    >
      <div>
        <div className="py-10 lgl:py-14 flex flex-col gap-3">
          <p className="text-sm text-designColor tracking-[4px]">Recent Experience</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Unlocking Opportunities</h2>
        </div>
        <div className="w-full flex flex-col gap-8">
          <ResumeCard
            title="Aspiring Software Developer"
            subTitle="Passionate about Crafting Solutions"
            result="Exciting Challenges"
            des="As a recent graduate, I am poised to embark on a fulfilling journey as a Software Developer. My passion lies in crafting innovative solutions using cutting-edge technologies. Excited to take on challenges that push the boundaries of what's possible in the world of software development."
          />
          
          {/* Highlighting Skills */}
          <div className="pl-9 py-2 overflow-x-hidden">
            <p className="text-sm uppercase font-medium  text-designColor">Key Skills</p>
            <p className="mt-2">
              Proficient in a versatile set of technologies, including React, JavaScript, HTML, and CSS. Possess a strong foundation in problem-solving and a keen eye for design. Eager to contribute these skills to create impactful and user-centric applications.
            </p>
          </div>

          {/* Emphasizing Willingness to Learn */}
          <div className="pl-9 py-2 overflow-x-hidden">
            <p className="text-sm uppercase font-medium text-designColor">Continuous Learning</p>
            <p className="mt-2">
              Committed to continuous learning, I thrive in dynamic environments where I can expand my knowledge and skills. Eager to embrace new technologies and contribute to projects that foster both personal and professional growth.
            </p>
          </div>

          {/* Expressing Enthusiasm for Collaborative Work */}
          <div className="pl-9 py-2 overflow-x-hidden">
            <p className="text-sm uppercase font-medium  text-designColor">Collaborative Spirit</p>
            <p className="mt-2">
              Recognizing the power of collaboration, I am enthusiastic about working in a team-oriented setting. Excited to bring my skills to a collaborative environment where creativity and innovation flourish.
            </p>
          </div>
        </div>
      </div>

      {/* Previous Education */}
      <div>
        <div className="py-10 lgl:py-14 flex flex-col gap-3">
          <p className="text-sm text-designColor tracking-[4px]">Educational Background</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Learning Excellence</h2>
        </div>
        <div className="w-full flex flex-col gap-8">
          <ResumeCard
            title="Moringa School of Software Engineering Graduate"
            subTitle="Excelled in Intensive Software Engineering Program"
            result="Distinction"
            des="Proud graduate of Moringa School, a prestigious institution for software engineering. Successfully completed an intensive program, gaining practical skills and hands-on experience in cutting-edge technologies."
          />
          
          {/* Emphasizing Self-Taught Enthusiasm */}
          <div className="pl-9 py-2 overflow-x-hidden">
            <p className="text-sm uppercase font-medium  text-designColor">Self-Taught Enthusiast</p>
            <p className="mt-2">
              Demonstrating a strong commitment to continuous learning, I am a self-taught enthusiast. Actively engaged in staying abreast of the latest technologies and industry trends, passionate about pushing boundaries and embracing new challenges.
            </p>
          </div>

          {/* Versatility in Technologies */}
          <div className="pl-9 py-2 overflow-x-hidden">
            <p className="text-sm uppercase font-medium  text-designColor">Versatile Developer</p>
            <p className="mt-2">
              Showcase proficiency in various technologies, including Django, Flask, React, and JavaScript. Adaptable and versatile, possessing a strong foundation in both back-end and front-end development.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
