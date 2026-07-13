import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiArrowDownRight } from 'react-icons/fi';
import Media from './Media';
import { bannerRoles } from '../../constants/banner';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: bannerRoles,
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="relative z-10 flex w-full max-w-3xl flex-col items-start gap-8">
      <div className="flex flex-col items-start gap-5 text-left">
        <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] text-designColor uppercase">
          <span className="w-8 h-px bg-designColor" />
          Exploring my universe
        </div>
        <h1 className="max-w-2xl text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] text-white tracking-[-0.04em]">
          Hi, I'm <span className="text-designColor">Bageni Gilbert.</span>
        </h1>
        <h2 className="min-h-[2.5rem] text-xl sm:text-2xl xl:text-3xl font-semibold text-lightText leading-tight">
          A <span className="role-text text-white">{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#22c55e" />
        </h2>
        <p className="max-w-2xl text-sm sm:text-base font-bodyFont leading-7 text-gray-400">
          I craft seamless digital products from concept to deployment—pairing engaging interfaces with robust, scalable systems to create experiences that feel as good as they perform.
        </p>
        <a
          href="https://dev-resume-cv.vercel.app/"
          className="group inline-flex items-center justify-center gap-3 min-h-12 px-6 rounded-xl bg-designColor text-white text-sm font-semibold tracking-wide shadow-[0_10px_30px_rgba(34,197,94,0.2)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(34,197,94,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-designColor focus-visible:ring-offset-2 focus-visible:ring-offset-bodyColor"
        >
          Show My Resume
          <FiArrowDownRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </a>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
