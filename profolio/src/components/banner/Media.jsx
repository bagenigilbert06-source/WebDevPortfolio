import React from 'react';
import { FaEnvelope, FaReact, FaFileAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const contactLinks = [
  { name: 'GitHub', href: 'https://github.com/gilbert2003-beep', icon: BsGithub, external: true },
  { name: 'Email', href: 'mailto:bagenigilbert@gmail.com', icon: FaEnvelope },
  { name: 'Resume', href: 'https://dev-resume-cv.vercel.app/', icon: FaFileAlt, external: true },
];
const skillIcons = [FaReact, DiJavascript1, SiTailwindcss, SiFigma];

const Media = () => {
  const iconStyle = 'text-lg transition duration-300 hover:text-designColor';
  const containerStyle = 'text-left';

  return (
    <div className="flex flex-col gap-7 sm:flex-row sm:gap-12">
      <div className={containerStyle}>
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-3">
          {contactLinks.map(({ name, href, icon: Icon, external }) => {
            return (
              <a key={name} href={href} aria-label={name} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={`bannerIcon ${iconStyle}`}>
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-titleFont mb-4">Core tools</h2>
        <div className="flex gap-3">
          {skillIcons.map((Icon, index) => (
            <span key={index} className={`bannerIcon ${iconStyle}`}>
              <Icon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
