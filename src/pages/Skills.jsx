import SkillCard from "../components/SkillCard";
import RoleCard from "../components/RoleCard";
import { skills, roles } from "../data/skills";

export default function Skills() {
  return (
    <div className="bg-[#050816] w-full text-white border-t border-white/20 pb-10 lg:border-l lg:border-r">
      <div>
      {/* Sticky Header */}
        <div
          data-aos="fade-right"
          data-aos-offset="100"
        >
          <h1 className="text-xl underline decoration-purple-500 decoration-2 underline-offset-4 sm:text-2xl sm:px-10 font-bold py-4 px-5">
            My Skills
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-10 md:grid-cols-3 gap-6 my-6 px-5">
          <RoleCard role="Frontend" />
          <RoleCard role="Backend" />
          <RoleCard role="Database" />
        </div>
      </div>
    </div>
  );
}
