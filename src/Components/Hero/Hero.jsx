import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Tilt from "react-parallax-tilt";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/heroImg.png";
import "../../App.css"; // 👈 Add global styles for animation here

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const elRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: ["Frontend Developer", "Web Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center w-11/12 mx-auto py-24 sm:py-28 overflow-hidden"
    >
      {/* Glowing background */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-[#B923E1] to-[#ff004f] rounded-full blur-3xl opacity-40 z-[-1] animate-pulse"></div>

      {/* Left Side Content */}
      <motion.div
        className="text-center md:text-left space-y-6 flex-1 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight"
          variants={itemVariants}
        >
          Md. Habibur Rahman, I'm a <br />
          <span
            ref={elRef}
            className="animated-gradient lg:text-6xl bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-transparent bg-clip-text font-bold"
          ></span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0"
          variants={itemVariants}
        >
          Passionate frontend developer with 1+ years of experience, working with
          modern web technologies to create elegant user interfaces.
        </motion.p>

        {/* Buttons and Social Icons */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 text-xl font-medium"
          variants={itemVariants}
        >
          <div className="flex gap-3">
            {[
              {
                href: "https://www.linkedin.com/in/md-habibur-rahman-9598a1368",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/habib395",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://www.facebook.com/md.habibur.rahman.sujon.788802",
                icon: <FaFacebook />,
                label: "Facebook",
              },
            ].map(({ href, icon, label }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl p-3 rounded-full border border-[#B923E1] text-[#B923E1] hover:text-white hover:bg-[#B923E1] transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.button
          className="mt-6 bg-gradient-to-r from-[#B923E1] to-[#ff004f] hover:shadow-xl px-6 py-3 rounded-full text-white transition-transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          <a
            href="https://drive.google.com/file/d/1iTSonsxAjQu4Uoy1BwRqHyHQfoGQZkv1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </motion.button>

        {/* Scroll Down Arrow */}
        <motion.div
          className="mt-10 text-white text-2xl animate-bounce"
          variants={itemVariants}
        >
          <AnchorLink href="#about">↓ Scroll Down</AnchorLink>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="flex justify-center items-center mt-10 lg:mt-0 flex-1 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
            <img
              src={profile_img}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-[#B923E1] shadow-lg"
              loading="lazy"
            />
            {/* Optional glow overlay */}
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
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
};

export default Hero;