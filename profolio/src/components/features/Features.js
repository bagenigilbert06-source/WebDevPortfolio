import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="text-center mb-10">
        <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-lg leading-loose">
          Explore more features and services I offer to enhance your digital experience.
        </p>
        <a
          href="https://docs.google.com/document/d/1RDwbfRI5gCiI-Fz8tLELkRD38jncq3zTRNo48iA-sSw/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 text-lg font-medium text-white bg-designColor rounded-md transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring focus:border-designColor"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Features;
