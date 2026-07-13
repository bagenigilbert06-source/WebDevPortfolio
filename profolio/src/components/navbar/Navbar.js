import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { profileImg } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showMenu]);

  const navLink = ({ _id, title, link }, mobile = false) => (
    <li key={_id}>
      <Link
        onClick={() => mobile && setShowMenu(false)}
        activeClass="nav-active"
        to={link}
        spy
        smooth="easeOutCubic"
        offset={-80}
        duration={350}
        className={mobile
          ? "block cursor-pointer border-b border-white/5 py-4 text-lg font-medium text-gray-300 transition-colors hover:text-white"
          : "nav-link cursor-pointer px-1 py-3 text-sm font-medium text-gray-400 transition-colors hover:text-white"}
      >
        {title}
      </Link>
    </li>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-bodyColor">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6">
        <Link to="home" smooth="easeOutCubic" duration={350} className="group flex cursor-pointer items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-black shadow-lg">
            <img className="h-full w-full object-cover object-top" src={profileImg} alt="Bageni Gilbert" width="1050" height="1498" decoding="async" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-white">Bageni Gilbert</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-designColor">Full-stack developer</p>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden mdl:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {navLinksdata.map((item) => navLink(item))}
          </ul>
        </nav>

        <Link
          to="contact" smooth="easeOutCubic" offset={-80} duration={350}
          className="hidden cursor-pointer items-center gap-2 rounded-full border border-designColor/30 bg-designColor/10 px-4 py-2.5 text-sm font-semibold text-designColor transition hover:-translate-y-0.5 hover:bg-designColor hover:text-white lg:inline-flex"
        >
          Let's talk <FiArrowUpRight />
        </Link>

        <button
          type="button" aria-label="Open navigation" aria-expanded={showMenu}
          onClick={() => setShowMenu(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-designColor/40 hover:text-designColor mdl:hidden"
        >
          <FiMenu />
        </button>
      </div>

      {showMenu && (
        <div className="fixed inset-0 top-0 z-[60] h-screen bg-black/80 mdl:hidden" onClick={() => setShowMenu(false)}>
          <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-[#191b1f] p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigation</p>
              <button type="button" aria-label="Close navigation" onClick={() => setShowMenu(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl text-gray-300 hover:text-designColor">
                <MdClose />
              </button>
            </div>
            <nav className="mt-6"><ul>{navLinksdata.map((item) => navLink(item, true))}</ul></nav>
            <div className="mt-auto rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Have a project?</p>
              <Link onClick={() => setShowMenu(false)} to="contact" smooth="easeOutCubic" offset={-80} duration={350} className="mt-2 inline-flex cursor-pointer items-center gap-2 font-semibold text-designColor">Let's work together <FiArrowUpRight /></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
