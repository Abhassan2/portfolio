import { TypeAnimation } from "react-type-animation";
import Skills from "./Skills";
import Projects from "./Projects.jsx";
import { IoMdDownload } from "react-icons/io";
import Social from "../components/Social.jsx";

export default function Home() {
  return (
    <div className="bg-[#050816] w-full text-white pt-20 pb-10">
      <div className=" pt-5 px-5 sm:px-12 flex flex-col md:flex-row md:items-center md:gap-12">
        <div className="flex-1">
          <p data-aos="fade-down" className="text-2xl sm:text-2xl md:text-3xl">
            Hi, I'm
          </p>
          <h1 data-aos="fade-right" className="text-4xl font-bold mt-2">
            Abid Hassan
          </h1>

          <div
            data-aos="fade-left"
            className="text-purple-400 text-2xl sm:text-2xl md:text-3xl mt-5"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,
                "React Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p data-aos="zoom-in-right" className="text-gray-400 text-base mt-5 md:text-lg max-w-xl">
            I specialize in building responsive and dynamic web applications
            using modern technologies like React, Node.js, and MongoDB. My goal
            is to craft seamless user experiences that adapt beautifully across
            devices, combining clean design with efficient code.
          </p>

          <div
            data-aos="zoom-in"
            className="flex sm:flex-row sm:items-center gap-6 mt-8"
          >
            <a
              href="/resume.pdf"
              download="Abid_Resume.pdf"
              className="flex items-center gap-2 justify-center 
                     bg-linear-to-r from-purple-600 to-pink-500 
                     text-white font-medium px-5 py-2 sm:px-4 
                     rounded-lg shadow-md hover:text-purple-400 
                     transition-all duration-300 w-fit"
            >
              <IoMdDownload className="text-2xl " />
              Resume
            </a>
            <Social />
          </div>
        </div>

        {/* Right Column: Video */}
        <div
          data-aos="fade-left"
          className="mt-8 md:mt-0 flex-1 flex items-center justify-center"
        >
          <div
            className="w-full bg-slate-900 p-4 sm:p-6 rounded-2xl 
               md:w-80 md:h-80 md:rounded-full md:overflow-hidden md:p-2 flex items-center justify-center"
          >
            <video
              controls
              className="w-full h-full object-cover rounded-xl md:rounded-full"
            >
              <source src="/intro.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
