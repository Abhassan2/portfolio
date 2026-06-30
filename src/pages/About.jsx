import { TypeAnimation } from "react-type-animation";
import profileImage from '../assets/profile.jpeg';

export default function About() {
  return (
    <div className="bg-[#050816] w-full text-white pb-10 border-t border-white/20 lg:border-l lg:border-r">
      {/* Sticky Header */}
      <div
        data-aos="fade-right"
        className="mb-5"
      >
        <h1 className="text-xl underline decoration-purple-500 decoration-2 underline-offset-4 sm:text-2xl sm:px-10 font-bold py-4 px-5">
          About Me
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:px-10 items-center sm:items-start text-center sm:text-left pt-4 px-5 gap-8 sm:gap-12 max-w-5xl">
        {/* Profile Image */}
        <img
          data-aos="flip-up"
          src={profileImage}
          alt="profile_img"
          className="w-60 h-60 lg:w-auto lg:h-auto max-w-xs border border-lineaar-to from-purple-400 to-pink-400 sm:max-w-sm object-cover"
        />

        {/* Description */}
        <p className="text-gray-400 mt-4 sm:mt-0 text-sm sm:text-base leading-relaxed">
          <TypeAnimation
            sequence={[
              `Highly motivated undergraduate student seeking a Frontend or Software Developer role. Proficient in full-stack technologies including React.js, Node.js/Express.js, and databases (MongoDB, MySQL). Strong foundational knowledge for building robust web applications.`,
              2000,
            ]}
          />
        </p>
      </div>
    </div>
  );
}
