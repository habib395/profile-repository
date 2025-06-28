import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import profile_img from "../../assets/heroImg.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const elRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: ['Frontend Developer', 'Web Developer', 'Web Designer'],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy(); 
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center w-3/4 mx-auto py-10 sm:py-28"
    >
      {/* Left Side Content */}
      <motion.div
        className="text-center md:text-left space-y-6 flex-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight pt-2">
          Md. Habibur Rahman, I'm a <br />
          <span
            ref={elRef}
            className="lg:text-6xl bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-transparent bg-clip-text font-bold"
          ></span>
        </h1>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate frontend developer with 1+ years of experience, working with modern web technologies to create user interfaces.
        </motion.p>

        {/* Buttons and Social Icons */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 text-xl font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Connect Button */}
          {/* <motion.button
            className="rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="px-4 py-2 flex items-center text-base font-xs cursor-pointer rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-white shadow-lg hover:shadow-xl">
              <AnchorLink offset={50} href="#contact">
                Connect
              </AnchorLink>
            </div>
          </motion.button> */}


          {/* Social Icons */}
          <div className="flex gap-2 mt-2 md:mt-0">
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
                className="text-xl p-3 rounded-full border border-[#B923E1] text-[#B923E1] dark:text-[#B923E1] hover:text-[#B923E1] backdrop-blur-md shadow-md transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
          {/* Resume Button */}
          <motion.button
            className="flex items-center font-xs cursor-pointer  bg-gradient-to-r from-[#B923E1] to-[#ff004f] hover:shadow-xl px-4 py-2 rounded-full text-base text-white transition-all duration-300 hover:bg-[#B923E1] hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href="https://drive.google.com/file/d/1iTSonsxAjQu4Uoy1BwRqHyHQfoGQZkv1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.button>
      </motion.div>

      {/* Right Side Profile Image */}
      <motion.div
        className="flex justify-center items-center mt-10 lg:mt-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96"
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

