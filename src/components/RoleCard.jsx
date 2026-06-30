import SkillCard from "./SkillCard.jsx";
import { roles } from "../data/skills.js";
import { useEffect, useState } from "react";

export default function RoleCard({ role: userRole }) {
  const [role, setRole] = useState({});

  useEffect(() => {
    const matchedRole = roles.find((r) => r.name === userRole);
    setRole(matchedRole);
  }, [userRole]);

  return (
    <div
      data-aos="fade-up"
      className="w-full h-max flex flex-col bg-[#050816] border border-white/20 
             rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header */}
      <div
        data-aos="zoom-out"
        data-aos-delay="400"
        className="h-30 bg-white/10 backdrop-blur-md flex items-center 
              p-3 sm:pb-2 md:flex-col md:h-70 md:p-3 rounded-tl-xl rounded-tr-xl border-b border-white/20"
      >
        <img
          src={role.img}
          alt={role.name}
          className="w-25 h-25 mr-4 sm:h-16 sm:w-16 md:mb-2 md:mr-0 md:w-40 md:h-40 rounded-sm"
        />
        <div>
          <h1 className="text-xl sm:text-2xl md:text-xl font-semibold text-white">
            {role.name}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[16px]">
            {role.desc}
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div
        className=" flex flex-col bg-white/10 backdrop-blur-md 
               py-2 px-4 sm:p-4 md:py-6 md:px-6 
               rounded-bl-xl rounded-br-xl"
      >
        <h1 className="text-lg sm:text-xl font-semibold">
          Tech Stack
        </h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-2 md:gap-3">
          {Array.isArray(role.stack) &&
            role.stack.map((s, index) => (
              <SkillCard
                key={index}
                icon={s.icon}
                skill={s.name}
                desc={s.def}
                size={60}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
