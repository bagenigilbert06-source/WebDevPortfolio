import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { profileImg } from '../../assets/index';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-72 object-cover object-top rounded-lg mb-2 border border-white/5"
        src={profileImg}
        alt="Bageni Gilbert"
        width="1050"
        height="1498"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">BAGENI GILBERT</h3>
        <p className="text-lg font-normal text-gray-400">Full Stack Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a passionate Full Stack Developer dedicated to creating innovative solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254 746 741 719</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">bagenigilbert@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
