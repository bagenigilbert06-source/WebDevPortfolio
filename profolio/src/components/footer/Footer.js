import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { profileImg } from '../../assets';

const navLinks = [
  ['About', '#home'],
  ['Services', '#features'],
  ['Projects', '#projects'],
  ['Resume', '#resume'],
  ['Testimonials', '#testimonial'],
  ['Contact', '#contact'],
];

const Footer = () => (
  <footer className="grid h-auto w-full grid-cols-1 gap-10 border-b border-black py-16 md:grid-cols-3">
    <div className="flex h-full w-full flex-col gap-6">
      <div className="flex items-center gap-4">
        <img className="h-16 w-16 rounded-2xl border border-white/10 object-cover object-top shadow-shadowOne" src={profileImg} alt="Bageni Gilbert" width="1050" height="1498" loading="lazy" decoding="async" />
        <div>
          <p className="font-titleFont font-semibold text-white">Bageni Gilbert</p>
          <p className="text-sm text-gray-500">Full-Stack Developer</p>
        </div>
      </div>
      <p className="max-w-sm text-sm leading-6 text-gray-400">Building reliable, thoughtful digital products from interface to deployment.</p>
    </div>

    <nav aria-label="Footer navigation">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-designColor">Navigate</h3>
      <ul className="mt-6 grid grid-cols-2 gap-4 font-titleFont text-sm">
        {navLinks.map(([label, href]) => (
          <li key={href}><a href={href} className="text-gray-400 transition-colors hover:text-designColor">{label}</a></li>
        ))}
      </ul>
    </nav>

    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-designColor">Connect</h3>
      <div className="mt-6 flex flex-col gap-4 text-sm">
        <a href="mailto:bagenigilbert@gmail.com" className="flex items-center gap-3 text-gray-400 transition-colors hover:text-designColor"><FaEnvelope /> bagenigilbert@gmail.com</a>
        <a href="tel:+254746741719" className="flex items-center gap-3 text-gray-400 transition-colors hover:text-designColor"><FaPhoneAlt /> +254 746 741 719</a>
        <a href="https://github.com/gilbert2003-beep" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 transition-colors hover:text-designColor"><BsGithub /> GitHub profile</a>
        <a href="https://dev-resume-cv.vercel.app/" className="text-sm font-semibold text-designColor hover:text-green-400">View full resume →</a>
      </div>
    </div>
  </footer>
);

export default Footer;
