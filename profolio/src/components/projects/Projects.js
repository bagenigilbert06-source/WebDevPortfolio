import React from 'react';
import Title from '../layouts/Title';
import {
  tumaLogistics,
  enviarSolutions,
  mizizziStore,
  msfDonation,
  zetechFoundit,
} from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const projects = [
    {
      title: 'Tuma Logistics Platform',
      des: 'A modern logistics workspace for managing fleets, dispatching shipments, and giving clients real-time delivery visibility.',
      src: tumaLogistics,
      websiteLink: 'https://logistic-lm-theta.vercel.app/',
    },
    {
      title: 'Enviar Solutions',
      des: 'An outsourced logistics platform that brings orders, carriers, consolidated shipments, and billing into one streamlined experience.',
      src: enviarSolutions,
      websiteLink: 'https://www.enviar.co.ke/',
    },
    {
      title: 'Mizizzi Store',
      des: 'A polished e-commerce storefront with product discovery, categories, deals, account features, and an engaging shopping experience.',
      src: mizizziStore,
      websiteLink: 'https://mizizzi-store.vercel.app/',
    },
    {
      title: 'MSF Donation Platform',
      des: 'A secure, responsive donation experience supporting one-time and monthly contributions through familiar local and card payment options.',
      src: msfDonation,
      websiteLink: 'https://msf.donate.guruitnect.co.ke/',
    },
    {
      title: 'Zetech Foundit',
      des: 'A campus lost-and-found platform where students can report missing items and help return found belongings to their rightful owners.',
      src: zetechFoundit,
      websiteLink: 'https://mizizzi-1613c.firebaseapp.com/',
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
