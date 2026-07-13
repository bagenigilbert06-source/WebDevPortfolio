import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { socialLinks } from '../../constants/banner';

const socialIcons = [FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram];
const skillIcons = [FaReact, DiJavascript1, SiTailwindcss, SiFigma];

const Media = () => {
  const iconStyle = 'text-lg transition duration-300 hover:text-designColor';
  const containerStyle = 'text-left';

  return (
    <div className="flex flex-col gap-7 sm:flex-row sm:gap-12">
      <div className={containerStyle}>
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-3">
          {socialLinks.map(({ name, href }, index) => {
            const Icon = socialIcons[index];
            return (
              <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
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
