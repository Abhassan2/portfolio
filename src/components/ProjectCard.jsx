import React from "react";

export default function ProjectCard({ img, name, desc, stack, live, code }) {
  return (
    <div
      data-aos="zoom-in"
      className="max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl overflow-hidden 
             shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="relative group px-2 pt-2 sm:px-4 sm:pt-4"
      >
        <img
          src={img}
          alt={name}
          className="w-full h-48 sm:h-56 object-cover rounded"
        />

        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center 
                 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                 transition-all duration-500 ease-in-out p-4"
        >
          <p className="text-gray-200 text-sm sm:text-base text-center">
            {desc}
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="h-full p-4 sm:p-6"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-white">{name}</h1>
        <p className="text-gray-300 hidden text-sm sm:text-base mt-2">{desc}</p>

        {/* Tech Stack */}
        <div className="flex flex-col items-start gap-2 mt-3">
          <h5 className="text-white font-medium">Stack:</h5>
          <ul className="flex flex-wrap gap-2 list-none">
            {stack.map((s, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-purple-600/30 text-purple-200 
                       rounded-md text-xs sm:text-sm font-medium"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex w-full gap-4 mt-4 "
        >
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 text-center px-4 py-2 sm:px-5 sm:py-3 
                   flex items-center justify-center gap-2 
                   bg-green-600 text-white rounded-lg 
                   text-sm sm:text-base font-medium shadow-md 
                   hover:bg-green-700 hover:scale-105 animate-pulse 
                   transition-all duration-300"
          >
            Live
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 text-center px-4 py-2 sm:px-5 sm:py-3 
                   bg-gray-700 text-white rounded-lg 
                   text-sm sm:text-base font-medium shadow-md 
                   hover:shadow-lg transition-all duration-300"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
