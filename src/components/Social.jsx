import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Social() {
  return (
    <div className="flex justify-center gap-4">
      <div
        className="h-max p-2 bg-linear-to-r from-purple-600 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-600 transition flex items-center justify-center"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xl sm:text-2xl hover:text-purple-400 transition"
        >
          <FiGithub size={20} />
        </a>
      </div>

      <div className="h-max p-2 bg-linear-to-r from-purple-600 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-600 transition flex items-center justify-center">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xl sm:text-2xl hover:text-purple-400 transition"
        >
          <FiLinkedin size={20} />
        </a>
      </div>

      <div className="h-max p-2 bg-linear-to-r from-purple-600 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-600 transition flex items-center justify-center">
        <a
          href="mailto:your@email.com"
          className="flex items-center justify-center text-xl sm:text-2xl hover:text-purple-400 transition"
        >
          <FiMail size={20} />
        </a>
      </div>
    </div>
  );
}
