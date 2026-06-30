import ams from '../assets/ams.jpg';
import fms from '../assets/fms.webp';

export const projects = [
  {
    id: 100,
    img: ams,
    name: "Attendance Management System",
    desc: "Attendance Management System where teachers can mark attendance and students can view their subject‑wise or overall attendance records.",
    stack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDb",
      "JWT Auth",
      "REST APIs",
    ],
    live: "link",
    code: "link",
  },
  {
    id: 101,
    img: fms,
    name: "Event Feedback Management System",
    desc: "Platform for collecting and analyzing event feedback. Organizers can create feedback forms, and participants can submit ratings and comments to improve future events.",
    stack: ["React.js", "Node.js", "Express", "MongoDb", "REST APIs"],
    live: "https://internproject-feedback-mang-sys.onrender.com",
    code: "https://github.com/Abhassan2/first_InternProject",
  }
];
