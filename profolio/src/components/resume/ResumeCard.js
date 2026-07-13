import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className="relative w-full group pl-6 sm:pl-7">
      <div className="absolute left-0 top-0 bottom-[-1.25rem] w-px bg-designColor/20">
        <span className="absolute w-3.5 h-3.5 rounded-full top-10 -left-[6px] flex justify-center items-center bg-bodyColor border border-designColor/70 shadow-[0_0_0_4px_rgba(34,197,94,0.06)] transition-all duration-300 group-hover:border-designColor group-hover:shadow-[0_0_14px_rgba(34,197,94,0.45)]">
          <span className="w-1.5 h-1.5 rounded-full bg-designColor/70 transition-all duration-300 group-hover:bg-designColor group-hover:scale-125" />
        </span>
      </div>
      <span className="absolute left-0 top-[2.9rem] w-6 sm:w-7 h-px bg-gradient-to-r from-designColor/40 to-designColor/10" />
      <article className="w-full min-h-[200px] bg-[#1b1e22] hover:bg-[#1d2025] border border-white/[0.04] duration-300 rounded-lg p-5 lgl:p-6 flex flex-col justify-center gap-5 shadow-shadowOne">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="text-xs mt-1.5 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="w-fit px-4 py-2 text-designColor bg-black/30 rounded-lg text-xs font-semibold">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm leading-6 text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </article>
    </div>
  );
}

export default ResumeCard
