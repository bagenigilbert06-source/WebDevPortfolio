import React from 'react';
import { profileImg } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="relative flex w-full items-center justify-center lgl:justify-end">
      <div className="relative z-10 w-[270px] sm:w-[340px] xl:w-[360px] aspect-[4/5] p-2 rounded-[1.75rem] border border-white/[0.07] bg-[#24272b] shadow-shadowOne">
        <div className="relative w-full h-full overflow-hidden rounded-[1.3rem] bg-bodyColor">
        <img
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
          src={profileImg}
          alt="Bageni Gilbert"
          width="1050"
          height="1498"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-bodyColor/95">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-white tracking-wide">Available for new opportunities</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
