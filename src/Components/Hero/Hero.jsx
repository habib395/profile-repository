import { motion } from "framer-motion";
import profile_img from "../../assets/heroImg.png";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center gap-6 w-10/12 mx-auto py-2 sm:py-32"
    >
      {/* Left Side Content */}
      <motion.div
        className="text-center md:text-left space-y-6 flex-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold leading-tight pt-16">
          <span className="bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-transparent bg-clip-text">
            I am Md. Habibur Rahman,
          </span>{" "}
          a frontend developer based in Bangladesh.
        </h1>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate frontend developer from Bangladesh with 1+ years of
          experience, working with modern web technologies to create stunning
          user interfaces.
        </motion.p>

        {/* Buttons and Social Icons */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-5 text-xl font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Connect With Me
          </motion.button>

          <motion.button
            className="px-6 py-2 rounded-full border border-[#B923E1] text-[#B923E1] font-semibold transition-all duration-300 hover:bg-[#B923E1] hover:text-white hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href="https://drive.google.com/file/d/1Kd0ATPOMK5uFIox0j7nbAGP3zXPM-gEx/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </motion.button>

          <div className="flex gap-2">
            <motion.a
              href="https://github.com/habib395"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-400 hover:text-[#B923E1] transition"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/md.habibur.rahman.sujon.788802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-400 hover:text-[#B923E1] transition"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side Profile Image */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96"
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <img
            src={profile_img}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-[#B923E1] shadow-lg"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1a1a1f] opacity-50 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
