import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Skills_data from "../../assets/Skills_data";
import "./Skills.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
  }),
};

const renderSkills = (skills) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => {
        const IconComponent = skill.s_icon;

        return (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUp}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.1}
              scale={1.02}
              transitionSpeed={1500}
            >
              <div className="flex flex-col items-center gap-3 p-5 rounded-xl shadow-md bg-[#111827]/70 backdrop-blur-md border border-white/10 hover:scale-105 hover:shadow-[0_0_15px_#B923E1] transition-all duration-300 ease-in-out cursor-pointer">
                <IconComponent className="text-5xl text-[#B923E1]" />
                <h2 className="text-sm font-semibold text-white">{skill.s_name}</h2>
              </div>
            </Tilt>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const SectionTitle = ({ title }) => (
  <motion.div
    className="w-full text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
      {title}
    </h2>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.div
      id="services"
      className="relative flex flex-col items-center justify-center gap-14 w-11/12 mx-auto py-20 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Glowing Blob Background */}
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-r from-[#B923E1] to-[#ff004f] rounded-full blur-3xl opacity-30 z-[-1] animate-pulse"></div>

      {/* Section Title */}
      <motion.div className="relative text-center" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h1 className="text-4xl font-bold text-[#B923E1] relative z-10 py-6">Skills</h1>
        <motion.div
          className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Sections */}
      <SectionTitle title="Frontend Development" />
      {renderSkills(
        Skills_data.find((skill) => skill.category === "Frontend").skills
      )}

      <SectionTitle title="Backend Development" />
      {renderSkills(
        Skills_data.find((skill) => skill.category === "Backend").skills
      )}

      <SectionTitle title="Tools & Technologies" />
      {renderSkills(
        Skills_data.find((skill) => skill.category === "Tools").skills
      )}
    </motion.div>
  );
};

export default Skills;
