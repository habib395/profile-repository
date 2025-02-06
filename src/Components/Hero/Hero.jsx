import profile_img from "../../assets/background3.jpg.png";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 w-10/12 mx-auto py-16">
      {/* Left Section - Text Content */}
      <div className="text-center md:text-left space-y-6 flex-1">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-transparent bg-clip-text">
            I am Md. Habibur Rahman,
          </span>{" "}
          a frontend developer based in Bangladesh.
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
          Passionate frontend developer from Bangladesh with 1+ years of
          experience, working with modern web technologies to create stunning
          user interfaces.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-5 text-xl font-medium">
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
            Connect With Me
          </button>
          <button
            className="px-6 py-2 rounded-full border border-[#B923E1] text-[#B923E1] font-semibold transition-all duration-300 hover:bg-[#B923E1] hover:text-white hover:scale-110"
            onClick={() => alert("Resume is not available yet! Coming soon...")}
          >
            My Resume
          </button>
          <a
            href="https://github.com/habib395"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-400 hover:text-[#B923E1] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/md.habibur.rahman.sujon.788802"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-400 hover:text-[#B923E1] transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex justify-center items-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <img
            src={profile_img}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-[#B923E1] shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1a1a1f] opacity-50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
