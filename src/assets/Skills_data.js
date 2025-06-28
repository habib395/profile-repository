import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaGithub, FaCcStripe  } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs } from "react-icons/si";
import { LuFileJson } from "react-icons/lu";
import { PiStripeLogoFill } from "react-icons/pi";
import { FaDocker, FaAws } from "react-icons/fa";
import { SiRedux, SiTypescript, SiJest, SiVitest, SiGraphql } from "react-icons/si";
import { SiPostgresql, SiPrisma, SiMongoose } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { TbBrandVercelFilled } from "react-icons/tb";
// import { TbBrandVercel, TbBrandShadcnUi } from "react-icons/tb";


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
    s_no: "04",
    s_icon: SiRedux,
    s_name: "Redux",
    s_disc: "Redux is a predictable state container for managing application state in React apps.",
    proficiency: 80,
  },
  {
    s_no: "05",
    s_icon: FaReact,
    s_name: "React",
    s_disc: "React is a JavaScript library for building dynamic UIs with reusable components and efficient state management.",
    proficiency: 85,
  },
  {
    s_no: "06",
    s_icon: SiNextdotjs,
    s_name: "Next.js",
    s_disc: "Next.js is a React framework for server-side rendering, static site generation, and SEO optimization.",
    proficiency: 80,
  },
  {
    s_no: "07",
    s_icon: SiTypescript,
    s_name: "TypeScript",
    s_disc: "TypeScript is a statically typed superset of JavaScript that improves code quality and developer experience.",
    proficiency: 80,
  },
  {
    s_no: "08",
    s_icon: SiJest,
    s_name: "Jest",
    s_disc: "Jest is a delightful JavaScript testing framework used for unit testing frontend applications.",
    proficiency: 75,
  },
  {
    s_no: "09",
    s_icon: SiVitest,
    s_name: "Vitest",
    s_disc: "Vitest is a fast unit testing framework built for Vite, offering instant feedback and modern DX.",
    proficiency: 70,
  },
  {
    s_no: "10",
    s_icon: SiGraphql,
    s_name: "GraphQL",
    s_disc: "GraphQL is a query language that allows clients to request specific data, reducing over-fetching in frontend.",
    proficiency: 75,
  }
      
    ]
  },

  // Backend Skills
  {
    category: "Backend",
    skills: [
       {
    s_no: "01",
    s_icon: FaNodeJs,
    s_name: "Node.js & Express",
    s_disc: "Node.js is a runtime for server-side JavaScript, and Express is a fast, minimalist web framework for APIs and web apps.",
    proficiency: 75,
  },
  {
    s_no: "02",
    s_icon: SiTypescript,
    s_name: "TypeScript",
    s_disc: "TypeScript adds strong typing to JavaScript, improving code reliability and scalability in backend development.",
    proficiency: 80,
  },
  {
    s_no: "03",
    s_icon: SiPostgresql,
    s_name: "PostgreSQL",
    s_disc: "PostgreSQL is an advanced open-source relational database known for reliability, performance, and SQL compliance.",
    proficiency: 78,
  },
  {
    s_no: "04",
    s_icon: SiPrisma,
    s_name: "Prisma ORM",
    s_disc: "Prisma is a modern ORM for Node.js and TypeScript that simplifies database access with type safety and auto-migrations.",
    proficiency: 75,
  },
  {
    s_no: "05",
    s_icon: SiMongodb,
    s_name: "MongoDB",
    s_disc: "MongoDB is a popular NoSQL database for flexible, document-oriented storage in modern applications.",
    proficiency: 78,
  },
  {
    s_no: "06",
    s_icon: SiMongoose,
    s_name: "Mongoose",
    s_disc: "Mongoose is an ODM that provides a straightforward way to model and work with MongoDB data in Node.js.",
    proficiency: 76,
  },
  {
    s_no: "07",
    s_icon: FaDocker,
    s_name: "Docker",
    s_disc: "Docker is a platform that packages applications and their dependencies into containers for consistent development and deployment.",
    proficiency: 70,
  },
  {
    s_no: "08",
    s_icon: FaAws,
    s_name: "AWS",
    s_disc: "Amazon Web Services (AWS) offers cloud infrastructure and backend services like EC2, S3, and Lambda for scalable deployments.",
    proficiency: 72,
  },
  {
    s_no: "09",
    s_icon: SiGraphql,
    s_name: "GraphQL",
    s_disc: "GraphQL is a flexible API query language that allows clients to request exactly the data they need, improving performance.",
    proficiency: 75,
  },
  {
    s_no: "10",
    s_icon: SiJest,
    s_name: "Jest (Backend Testing)",
    s_disc: "Jest is a powerful JavaScript testing framework used for unit and integration tests in backend APIs and logic.",
    proficiency: 70,
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
  },
  {
    s_no: "16",
    s_icon: SiFirebase,
    s_name: "Firebase",
    s_disc: "Firebase provides backend services like real-time database, auth, and hosting to quickly build full-stack apps.",
    proficiency: 78,
  },
  {
    s_no: "17",
    s_icon: TbBrandVercelFilled ,
    s_name: "Vercel",
    s_disc: "Vercel is a cloud platform for deploying frontend applications, offering serverless functions and global CDN.",
    proficiency: 80,
  },
  {
    s_no: "19",
    s_icon:  SiShadcnui ,
    s_name: "shadcn/ui",
    s_disc: "shadcn/ui is a beautifully designed component library built on Tailwind CSS and Radix UI for fast, accessible UIs.",
    proficiency: 85,
  },
  {
    s_no: "20",
    s_icon: SiPostman,
    s_name: "Postman",
    s_disc: "Postman is an API platform for building, testing, and documenting APIs efficiently during development.",
    proficiency: 80,
  }
    ]
  }
];

export default Skills_data;
