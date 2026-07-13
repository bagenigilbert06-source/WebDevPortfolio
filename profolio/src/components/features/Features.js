import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Features = () => {
  const handleDownloadCV = () => {
    // Implement the logic to trigger the download here
    // For example, you can create a link element and programmatically click it
    const link = document.createElement('a');
    link.href = '/path/to/Bageni_Gilbert_CV.pdf'; // Replace with the actual path to your CV
    link.download = 'Bageni_Gilbert_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="text-center mb-10">
        <Title title="Features" des="What I Do" ClassName="text-designColor" desClassName="text-yellow-400" />
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
        {/* Download CV Button */}
        <button
          onClick={handleDownloadCV}
          className="mt-4 inline-block px-6 py-3 text-lg font-medium text-white bg-designColor rounded-md transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring focus:border-designColor"
        >
          Download CV
        </button>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <p className="text-gray-500 text-lg mb-4">
          Follow me on social media for updates and more!
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/your-profile"
            className="text-xl text-designColor hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com/your-profile" 
            className="text-xl text-designColor hover:text-gray-300 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="text-xl text-designColor hover:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
