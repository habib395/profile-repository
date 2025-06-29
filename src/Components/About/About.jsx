import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profile from "../../assets/meo.png";
import "./About.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skillBars = [
  { skill: "HTML & CSS", width: "90%" },
  { skill: "JavaScript", width: "85%" },
  { skill: "React.js", width: "80%" },
  { skill: "Next.js", width: "75%" },
];

const About = () => {
  return (
    <motion.div
      id="about"
      className="relative flex flex-col items-center gap-16 sm:mx-20 px-6 py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Animated Gradient Background Blob */}
      <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-[#B923E1] to-[#ff004f] rounded-full blur-3xl opacity-40 z-[-1] animate-pulse"></div>

      {/* Title */}
      <motion.div className="relative text-center" variants={fadeInItem}>
        <h1 className="py-6 text-4xl font-bold text-[#B923E1] z-10">About Me</h1>
        <motion.div
          className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="flex flex-wrap gap-16 justify-center items-center max-w-6xl">
        {/* Profile Image with Tilt */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true}>
          <motion.div
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full shadow-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            variants={fadeInItem}
          >
            <img
              className="w-full h-full object-cover"
              src={profile}
              alt="Profile"
              loading="lazy"
            />
          </motion.div>
        </Tilt>

        {/* Text and Skills */}
        <motion.div className="flex flex-col gap-8 max-w-2xl" variants={containerVariants}>
          <motion.p
            className="text-base font-medium text-gray-300 leading-relaxed"
            variants={fadeInItem}
          >
            I'm Md. Habibur Rahman, a passionate Frontend Developer with over 1 year of experience creating modern, responsive, and visually stunning websites. My journey began with mastering HTML and CSS, and since then, I have expanded my skills to include JavaScript, TypeScript, React.js, Next.js, and Redux Toolkit. Beyond frontend, I also work with backend technologies like Node.js, Express.js, MongoDB, PostgreSQL, Prisma, and Mongoose. I enjoy using tools like Firebase, Docker, AWS, Jest, Vitest, and GraphQL to build full-stack, scalable applications. Writing clean, efficient code and turning creative ideas into beautiful user experiences motivates me every day. Outside of coding, I love sketching, exploring emerging technologies, and playing strategy-based video games. I believe curiosity and continuous learning are the keys to personal and professional growth.
          </motion.p>

          {/* Animated Skill Bars */}
          <div className="space-y-5">
            {skillBars.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                variants={fadeInItem}
              >
                <p className="w-32 text-[#DF8909] font-medium">{item.skill}</p>
                <motion.hr
                  className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] border-none"
                  initial={{ width: 0 }}
                  animate={{ width: item.width }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
