
import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Hero = () => {
  return (
    <section
      id="home"
      className="relative grid w-full min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-12 overflow-hidden border-b border-black/60 py-12 font-titleFont lgl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lgl:gap-16 lgl:py-14"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Hero
