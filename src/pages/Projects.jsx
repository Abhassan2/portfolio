import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as list } from "../data/projects.js";

export default function Projects() {
  const [projects, setProjects] = useState([...list]);

  return (
    <div className="bg-[#050816] w-full text-white border-t border-white/20 pb-10 lg:border-l lg:border-r">
      {/* Sticky Header */}
      <div
        data-aos="fade-right"
        className="mb-5"
      >
        <h1 className="text-xl underline decoration-purple-500 decoration-2 underline-offset-4 sm:text-2xl sm:px-10 font-bold py-4 px-5">My Projects</h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-10 md:grid-cols-3 gap-6 mb-8 px-5">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            img={p.img}
            name={p.name}
            desc={p.desc}
            stack={p.stack}
            live={p.live}
            code={p.code}
          />
        ))}
      </div>
    </div>
  );
}
