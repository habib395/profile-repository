import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaGithub, FaCcStripe  } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs } from "react-icons/si";
import { LuFileJson } from "react-icons/lu";
import { PiStripeLogoFill } from "react-icons/pi";

const Skills_data = [
  // Frontend Skills
  {
    category: "Frontend",
    skills: [
      {
        s_no: "01",
        s_icon: FaHtml5,
        s_name: "HTML5",
        s_disc: "HTML5 is the latest version of HTML, providing new elements and APIs for modern web development.",
        proficiency: 90,
      },
      {
        s_no: "02",
        s_icon: FaCss3Alt,
        s_name: "CSS3",
        s_disc: "CSS3 enables styling and layout features like animations, transitions, and flexible box layouts.",
        proficiency: 85,
      },
      {
        s_no: "03",
        s_icon: SiTailwindcss,
        s_name: "Tailwind CSS",
        s_disc: "Tailwind CSS is a utility-first framework for building responsive and customizable web designs.",
        proficiency: 80,
      },
      {
        s_no: "05",
        s_icon: FaReact,
        s_name: "React",
        s_disc: "React is a JavaScript library for building dynamic UIs with reusable components and efficient state management.",
        proficiency: 85,
      },
      
    ]
  },

  // Backend Skills
  {
    category: "Backend",
    skills: [
      {
        s_no: "07",
        s_icon: SiNextdotjs,
        s_name: "Next.js",
        s_disc: "Next.js is a React framework that enables server-side rendering and static site generation for better performance.",
        proficiency: 80,
      },
      {
        s_no: "09",
        s_icon: SiFirebase,
        s_name: "Firebase",
        s_disc: "Firebase is a platform for building and managing real-time web and mobile applications, providing backend services.",
        proficiency: 70,
      },
      {
        s_no: "08",
        s_icon: FaNodeJs,
        s_name: "Node.js & Express",
        s_disc: "Node.js is a runtime for server-side JavaScript, and Express is a framework for building APIs and web applications.",
        proficiency: 75,
      },
      {
        s_no: "10",
        s_icon: SiMongodb,
        s_name: "MongoDB",
        s_disc: "MongoDB is a NoSQL database used for storing large amounts of unstructured data.",
        proficiency: 78,
      },
     
    ]
  },

  // Tools
  {
    category: "Tools",
    skills: [
      {
        s_no: "12",
        s_icon: FaGitAlt,
        s_name: "Git",
        s_disc: "Git is a version control system that helps track changes in code and collaborate with others.",
        proficiency: 85,
      },
      {
        s_no: "13",
        s_icon: FaGithub,
        s_name: "GitHub",
        s_disc: "GitHub is a platform for hosting Git repositories, enabling collaboration and code management.",
        proficiency: 80,
      },
      {
        s_no: "14",
        s_icon: FaDatabase,
        s_name: "API Development",
        s_disc: "APIs (Application Programming Interfaces) are used for integrating different services and enabling communication between systems.",
        proficiency: 75,
      },
      {
        s_no: "15",
        s_icon: PiStripeLogoFill,
        s_name: "Stripe",
        s_disc: "Stripe is a popular payment processing platform used for handling online transactions and supporting various payment methods.",
        proficiency: 77,
      }
    ]
  }
];

export default Skills_data;
