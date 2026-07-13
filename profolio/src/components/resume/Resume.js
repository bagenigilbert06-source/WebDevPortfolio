import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';

const tabs = [
  { id: 'education', label: 'Education', component: Education },
  { id: 'skills', label: 'Professional Skills', component: Skills },
  { id: 'experience', label: 'Experience', component: Experience },
  { id: 'achievements', label: 'Achievements', component: Achievement },
];

const ResumeButton = ({ onClick, isActive, text }) => (
  <button
    onClick={onClick}
    role="tab"
    aria-selected={isActive}
    className={`${
      isActive
        ? 'border-designColor text-designColor bg-[#191c20] shadow-shadowOne'
        : 'border-transparent text-lightText hover:text-white hover:bg-white/[0.03]'
    } min-w-max px-4 sm:px-6 py-3.5 border rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-designColor`}
  >
    {text}
  </button>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  const ActiveSection = tabs.find(({ id }) => id === activeTab).component;

  return (
    <section id="resume" className="w-full py-16 lgl:py-20 border-b border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className="mx-auto max-w-4xl">
        <div role="tablist" aria-label="Resume sections" className="mt-8 grid grid-cols-2 lgl:grid-cols-4 gap-1 p-1.5 rounded-lg bg-[#181b1f] border border-white/5 overflow-x-auto">
          {tabs.map(({ id, label }) => (
            <ResumeButton key={id} onClick={() => setActiveTab(id)} isActive={activeTab === id} text={label} />
          ))}
        </div>
        <ActiveSection />
      </div>
    </section>
  );
};

export default Resume;
