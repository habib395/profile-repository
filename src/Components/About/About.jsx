import "./About.css";
import profile from "../../assets/profileImg.png"

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center gap-16 mx-20 px-6">
      {/* Title Section */}
      <div className="relative text-center">
        <h1 className="py-6 z-10 text-4xl font-bold text-[#B923E1]">
          About Me
        </h1>
        <div className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"></div>
      </div>

      {/* Profile and Information */}
      <div className="flex flex-wrap gap-16 justify-center items-center max-w-6xl">
        {/* Profile Image */}
        <div className="about-left flex-shrink-0">
          <img
            className="w-96 h-96 rounded-full shadow-xl hover:scale-110 transition-transform duration-500"
            src={profile}
            alt="Profile"
          />
        </div>

        {/* About Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="text-base font-medium text-gray-300 space-y-6">
            <p>
              I’m a passionate Frontend Developer with over 1 year of
              experience, specializing in creating modern, responsive, and
              visually stunning websites.
            </p>
            <p>
              My journey started with simple HTML and CSS, and since then, I’ve
              continuously improved my skills in JavaScript, React, and other
              modern tools. I love building clean, efficient code that brings my
              creative ideas to life.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring new technologies,
              playing video games, and sketching in my notebook. I enjoy
              learning new things, and I believe that curiosity is the key to
              growth.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <p className="w-32 text-[#DF8909]">HTML & CSS</p>
                <hr className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] border-none" />
              </div>
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <p className="w-32 text-[#DF8909]">React JS</p>
                <hr className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] border-none" />
              </div>
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <p className="w-32 text-[#DF8909]">JavaScript</p>
                <hr className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] border-none" />
              </div>
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <p className="w-32 text-[#DF8909]">Next JS</p>
                <hr className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] border-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
