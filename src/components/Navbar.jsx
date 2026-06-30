import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiFileText, FiMail } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-scroll";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed top-0 right-0 w-full h-16 bg-[#050816] text-white flex justify-between items-center border-b border-[#18181a] px-6 sm:px-10 z-50">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Abid<span className="text-purple-500">.</span>
        </h1>
      </div>

      {/* nav links for md device viewport */}
      <div className="hidden md:flex md:items-center md:gap-8">
        <Link
          to="home"
          smooth={true}
          duration={1000}
          offset={-80}
          spy={true}
          activeClass="text-cyan-400"
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Home
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={1000}
          offset={-80}
          spy={true}
          activeClass="text-cyan-400"
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={1000}
          offset={-80}
          spy={true}
          activeClass="text-cyan-400"
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Projects
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={1000}
          offset={-80}
          spy={true}
          activeClass="text-cyan-400"
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          About
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={1000}
          offset={-80}
          spy={true}
          activeClass="text-cyan-400"
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* close/open menu nav icons */}
      <div className="md:hidden">
        {openMenu ? (
          <IoClose size={28} onClick={() => setOpenMenu(!openMenu)} />
        ) : (
          <HiMenuAlt3 size={28} onClick={() => setOpenMenu(!openMenu)} />
        )}
      </div>

      {/* menu from less than md device viewport */}
      {openMenu && (
        <div
          className="fixed top-16 right-0 w-2/4 sm:w-2/5 bg-[#050816] 
                    border-t border-l border-b border-gray-700 
                    rounded-bl-md rounded-tl-md flex flex-col 
                    py-6 gap-y-6 z-50 overflow-x-hidden"
        >
          <Link
            to="home"
            className="flex items-center mx-6 gap-x-4 text-base sm:text-lg cursor-pointer hover:text-purple-500"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <AiOutlineHome />
            <p>Home</p>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            offset={-70}
            spy={true}
            activeClass="text-cyan-400"
            className="flex items-center mx-6 gap-x-4 text-base sm:text-lg cursor-pointer hover:text-purple-500"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <BiCodeAlt />
            <p>Skills</p>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-70}
            spy={true}
            activeClass="text-cyan-400"
            className="flex items-center mx-6 gap-x-4 text-base sm:text-lg cursor-pointer hover:text-purple-500"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MdWorkOutline />
            <p>Projects</p>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            offset={-70}
            spy={true}
            activeClass="text-cyan-400"
            className="flex items-center mx-6 gap-x-4 text-base sm:text-lg cursor-pointer hover:text-purple-500"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <AiOutlineUser />
            <p>About</p>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-70}
            spy={true}
            activeClass="text-cyan-400"
            className="flex items-center mx-6 gap-x-4 text-base sm:text-lg cursor-pointer hover:text-purple-500"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <FiMail />
            <p>Contact</p>
          </Link>
        </div>
      )}

      {/* <div
        className=" py-6 gap-y-6 "
      >
        <Link
          to="home"
          className="flex items-center mx-6 gap-x-4 text-base sm:text-lg"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <AiOutlineHome />
          <p>Home</p>
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1000}
          offset={-70}
          spy={true}
          activeClass="text-cyan-400"
          className="flex items-center mx-6 gap-x-4 text-base sm:text-lg"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <BiCodeAlt />
          <p>Skills</p>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          offset={-70}
          spy={true}
          activeClass="text-cyan-400"
          className="flex items-center mx-6 gap-x-4 text-base sm:text-lg"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MdWorkOutline />
          <p>Projects</p>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          offset={-70}
          spy={true}
          activeClass="text-cyan-400"
          className="flex items-center mx-6 gap-x-4 text-base sm:text-lg"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <AiOutlineUser />
          <p>About</p>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          offset={-70}
          spy={true}
          activeClass="text-cyan-400"
          className="flex items-center mx-6 gap-x-4 text-base sm:text-lg"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FiMail />
          <p>Contact</p>
        </Link>
      </div> */}
    </div>
  );
}
