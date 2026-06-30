import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaBootstrap,
  FaNetworkWired,
  FaDatabase
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
  SiMongoose
} from "react-icons/si";

export const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    def: "Markup language for structuring web pages. Provides semantic elements and multimedia support.",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    def: "Stylesheet language for designing web layouts. Adds animations, transitions, and responsive design.",
  },
  {
    name: "Javascript",
    icon: FaJs,
    def: "Programming language for dynamic web content. Enables interactivity and client-side logic.",
  },
  {
    name: "React",
    icon: FaReact,
    def: "Library for building UI components. Uses virtual DOM for fast rendering.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    def: "JavaScript runtime for server-side apps. Built on Chrome’s V8 engine.",
  },
  {
    name: "Express",
    icon: SiExpress,
    def: "Minimal Node.js framework for APIs. Simplifies routing and middleware handling.",
  },
  {
    name: "MongoDb",
    icon: SiMongodb,
    def: "NoSQL database storing documents. Scales easily with flexible schema.",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    def: "Relational database using SQL queries. Ensures structured data and relationships.",
  },
  {
    name: "TailwindCss",
    icon: SiTailwindcss,
    def: "Utility-first CSS framework for styling. Provides responsive and customizable classes.",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    def: "CSS framework for responsive design. Includes prebuilt components and grid system.",
  },
];

export const roles = [
  {
    name: "Frontend",
    img: "https://cdn3d.iconscout.com/3d/premium/preview/code-editor-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-program-programming-app-development-language-pack-design-icons-8852336.png?f=webp&h=700",
    desc: "Build responsive and interactive UI",
    stack: [
      {
        name: "HTML5",
        icon: FaHtml5,
        def: "Markup language for structuring web pages. Provides semantic elements and multimedia support.",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        def: "Stylesheet language for designing web layouts. Adds animations, transitions, and responsive design.",
      },
      {
        name: "Javascript",
        icon: FaJs,
        def: "Programming language for dynamic web content. Enables interactivity and client-side logic.",
      },
      {
        name: "React",
        icon: FaReact,
        def: "Library for building UI components. Uses virtual DOM for fast rendering.",
      },
    ],
  },
  {
    name: "Backend",
    img: "https://cdn-icons-png.freepik.com/512/13542/13542057.png",
    desc: "Manages server-side logic, APIs, and business rules",
    stack: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        def: "JavaScript runtime for server-side apps. Built on Chrome’s V8 engine.",
      },
      {
        name: "Express",
        icon: SiExpress,
        def: "Minimal Node.js framework for APIs. Simplifies routing and middleware handling.",
      },
      {
        name: "REST APIs",
        icon: FaNetworkWired,
        def: "Architectural style for web services. Enables communication between client and server.",
      },
      {
        name: "JWT Authentication",
        icon: SiJsonwebtokens,
        def: "Token-based authentication method. Provides secure user identity verification.",
      },
    ],
  },
  {
    name: "Database",
    img: "https://cdn-icons-png.flaticon.com/512/8637/8637124.png",
    desc: "Stores, organizes, and retrieves application data",
    stack: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        def: "NoSQL database storing documents. Scales easily with flexible schema.",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        def: "Relational database using SQL queries. Ensures structured data and relationships.",
      },
      // {
      //   name: "Mongoose ORM",
      //   icon: SiMongoose, 
      //   def: "ODM library for MongoDB. Simplifies schema design and data modeling.",
      // },
      // {
      //   name: "SQL Queries",
      //   icon: FaDatabase, 
      //   def: "Language for managing relational data. Used to insert, update, and query tables.",
      // },
    ],
  },
];
