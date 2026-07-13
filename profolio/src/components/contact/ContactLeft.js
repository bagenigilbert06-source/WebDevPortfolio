import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
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
          Phone: <a href="tel:+254746741719" className="text-lightText hover:text-designColor">+254 746 741 719</a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <a href="mailto:bagenigilbert@gmail.com" className="break-all text-lightText hover:text-designColor">bagenigilbert@gmail.com</a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://github.com/gilbert2003-beep" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bannerIcon"><BsGithub /></a>
          <a href="mailto:bagenigilbert@gmail.com" aria-label="Email Bageni Gilbert" className="bannerIcon"><FaEnvelope /></a>
          <a href="tel:+254746741719" aria-label="Call Bageni Gilbert" className="bannerIcon"><FaPhoneAlt /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
