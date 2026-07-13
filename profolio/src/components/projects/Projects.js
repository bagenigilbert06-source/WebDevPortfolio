import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const projects = [
    {
      title: 'Shopping Cart Recommendation',
      des: 'A seamless shopping experience that makes it easy to discover, recommend, and share products with friends and family.',
      src: projectOne,
      websiteLink: 'https://addcartapp.netlify.app',
      githubLink: 'https://github.com/gilbert2003-beep/my-mobile-phone-app',
    },
    {
      title: 'People Counter System',
      des: 'An efficient people-counting experience for tracking entries and keeping attendance data clear and accessible.',
      src: projectTwo,
      websiteLink: 'https://people-counter-entrance.netlify.app',
      githubLink: 'https://github.com/gilbert2003-beep/peoples-entrance-counter-',
    },
    {
      title: 'Bot Battlr',
      des: 'A strategic bot-battle platform where users assemble a team and put their selected bots to the test.',
      src: projectThree,
      websiteLink: 'https://ip-02-code-challenge-bot-battlr-lfmb.vercel.app/',
      githubLink: 'https://github.com/gilbert2003-beep/IP02-Code-Challenge-Bot-Battlr',
    },
    {
      title: 'Social Media Clone',
      des: 'A social experience focused on connecting people through profiles, shared content, and familiar interactions.',
      src: projectTwo,
      githubLink: 'https://github.com/gilbert2003-beep',
    },
    {
      title: 'E-commerce Website',
      des: 'A responsive storefront concept with clear product discovery and a straightforward shopping journey.',
      src: projectOne,
      githubLink: 'https://github.com/gilbert2003-beep',
    },
    {
      title: 'Chatting App',
      des: 'A clean messaging interface designed for simple conversations and comfortable use across devices.',
      src: projectThree,
      githubLink: 'https://github.com/gilbert2003-beep',
    },
  ];

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-9">
        {projects.map((project) => <ProjectsCard key={project.title} {...project} />)}
      </div>
    </section>
  );
};

export default Projects;
