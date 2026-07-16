import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src, websiteLink, githubLink }) => {
  return (
    <article className="group flex h-full w-full flex-col rounded-xl border border-white/[0.04] bg-[#1d2024] p-5 shadow-shadowOne transition-colors duration-300 hover:border-designColor/20 sm:p-6">
      <a href={websiteLink || githubLink} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/[0.06] bg-[#17191c]">
          <img
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
            loading="lazy"
            decoding="async"
            src={src}
            alt={`${title} project preview`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </a>
      <div className="mt-6 flex w-full flex-1 flex-col gap-5">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="pt-2 text-sm font-semibold uppercase tracking-wide text-designColor">
              {title}
            </h3>
            <div className="flex gap-2">
              {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} source code`}>
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <BsGithub />
                </span>
              </a>}
              {websiteLink && <a href={websiteLink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} website`}>
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <FaGlobe />
                </span>
              </a>}
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 tracking-wide text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
            {des}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
