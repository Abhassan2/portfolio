import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function SkillCard({
  icon: Icon,
  skill = "skill's name",
  desc = "desc",
  size = 30,
}) {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay="500"
      className="flex items-start md:items-center gap-2 md:gap-3"
    >
      <Icon size={size} className="text-sky-500" />
      <div className="flex flex-col">
        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white">
          {skill}
        </h4>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">{desc}</p>
      </div>
    </div>
  );
}
