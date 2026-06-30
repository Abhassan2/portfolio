import React from "react";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#050816] text-white w-full border-t border-white/20 py-8 px-5 lg:border-l lg:border-r">
      <div className="text-center mb-5 sm:text-left">
        <h1 className="text-2xl font-bold">
          Abid<span className="text-purple-500">.</span>
        </h1>
        <div className="space-y-2 mt-2 text-gray-400 text-sm">
          <p className="text-gray-400 text-sm mt-2">Full Stack Developer</p>
          <p className="text-gray-400 text-sm mt-2">Passionate about clean, responsive design</p>
          <p className="text-gray-400 text-sm mt-2">Building scalable digital solutions</p>
          <p className="text-gray-400 text-sm mt-2">Code with creativity, design with purpose</p>
        </div>
      </div>

      <Social />

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Abid Hassan. All rights reserved.
      </div>
    </footer>
  );
}
