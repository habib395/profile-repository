import { motion } from "framer-motion";
import "./About.css";
import profile from "../../assets/meo.png";

const About = () => {
  return (
    <motion.div 
      id="about" 
      className="flex flex-col items-center gap-16 sm:mx-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title with Underline Effect */}
      <motion.div 
        className="relative text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="py-6 z-10 text-4xl font-bold text-[#B923E1]">About Me</h1>
        <motion.div 
          className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-wrap gap-16 justify-center items-center max-w-6xl">
        <div className="about-left flex-shrink-0">
          <img
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full shadow-xl hover:scale-110 transition-transform duration-500"
            src={profile}
            alt="Profile"
          />
        </div>

        {/* About Text with Staggered Animation */}
        <motion.div 
          className="flex flex-col gap-8 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <motion.div className="text-base font-medium text-gray-300 space-y-6">
            {/* <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              I'm a passionate Frontend Developer with over 1 year of experience, specializing in creating modern, responsive, and visually stunning websites.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              My journey started with simple HTML and CSS, and since then, I've continuously improved my skills in JavaScript, React, and other modern tools. I love building clean, efficient code that brings my creative ideas to life.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              When I'm not coding, you'll find me exploring new technologies, playing video games, and sketching in my notebook. I enjoy learning new things, and I believe that curiosity is the key to growth.
            </motion.p> */}
            <motion.p
  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
  className="leading-relaxed">
  I'm Md. Habibur Rahman, a passionate Frontend Developer with over 1 year of experience creating modern, responsive, and visually stunning websites. My journey began with mastering HTML and CSS, and since then, I have expanded my skills to include JavaScript, TypeScript, React.js, Next.js, and Redux Toolkit. Beyond frontend, I also work with backend technologies like Node.js, Express.js, MongoDB, PostgreSQL, Prisma, and Mongoose. I enjoy using tools like Firebase, Docker, AWS, Jest, Vitest, and GraphQL to build full-stack, scalable applications. Writing clean, efficient code and turning creative ideas into beautiful user experiences motivates me every day. Outside of coding, I love sketching, exploring emerging technologies, and playing strategy-based video games. I believe curiosity and continuous learning are the keys to personal and professional growth.
</motion.p>
 
          </motion.div>

          {/* Skill Bars with Animated Width */}
          {/* <div className="space-y-6">
            {[
              { skill: "HTML & CSS", width: "90%" },
              { skill: "React JS", width: "85%" },
              { skill: "JavaScript", width: "80%" },
              { skill: "Next JS", width: "75%" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <p className="w-32 text-[#DF8909]">{item.skill}</p>
                <motion.hr 
                  className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] border-none"
                  initial={{ width: 0 }}
                  animate={{ width: item.width }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                />
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
