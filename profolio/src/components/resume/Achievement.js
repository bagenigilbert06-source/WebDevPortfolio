import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="font-titleFont grid grid-cols-1 lgl:grid-cols-2 gap-12 lgl:gap-16"
    >
      <div>
        <div className="py-10 lgl:py-14 flex flex-col gap-3">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Development</h2>
        </div>
        <div className="w-full flex flex-col gap-8">
          <ResumeCard
            title="Software Engineer"
            subTitle="Specializing in Django, Flask, React, and JavaScript"
            result="Success"
            des="In my professional journey, I have specialized in the art of software engineering, focusing on technologies such as Django, Flask, React, and JavaScript. I've played a pivotal role in successful projects, delivering innovative solutions and showcasing expertise in full-stack development."
          />
          <ResumeCard
            title="Continuous Learning and Innovation"
            subTitle="Striving for excellence in web development"
            result="Success"
            des="I am a firm believer in the power of continuous learning. Keeping abreast of the latest technologies and best practices is my commitment. This dedication has been instrumental in achieving success in the dynamic field of web development."
          />
        </div>
      </div>
      <div>
        <div className="py-10 lgl:py-14 flex flex-col gap-3">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Educational Journey</h2>
        </div>
        <div className="w-full flex flex-col gap-8">
          <ResumeCard
            title="Graduated with Honors in Software Engineering"
            subTitle="Pursuing Excellence in Academics"
            result="Success"
            des="I graduated with honors in Software Engineering, showcasing my dedication to academic excellence. My educational journey has laid a solid foundation for my skills in software development, and I continue to apply and expand my knowledge in every endeavor."
          />
          <ResumeCard
            title="Passion for Innovative Problem Solving"
            subTitle="Thriving in the World of Algorithms and Code"
            result="Success"
            des="My passion for innovative problem-solving has driven me to excel in algorithmic thinking and coding challenges. Whether it's solving complex algorithms or designing efficient solutions, I embrace challenges and constantly strive for improvement in the world of software engineering."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
