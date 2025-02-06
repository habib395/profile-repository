import Skills_data from "../../assets/Skills_data";
import "./Skills.css";

const Skills = () => {
  // Filter skills by category (Frontend, Backend, Tools)
  const frontendSkills = Skills_data.find(
    (skill) => skill.category === "Frontend"
  ).skills;
  const backendSkills = Skills_data.find(
    (skill) => skill.category === "Backend"
  ).skills;
  const toolSkills = Skills_data.find(
    (skill) => skill.category === "Tools"
  ).skills;

  return (
    <div className="flex flex-col items-center justify-center gap-12 m-2 w-11/12 mx-auto">
      <div className="relative text-center">
        <h1 className="py-6 z-10 text-4xl font-bold text-[#B923E1]">
          My Skills
        </h1>
        <div className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"></div>
      </div>

      {/* Frontend Skills Section */}
      <div className="w-full text-center mb-2">
        <h2 className="text-2xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
          Frontend Development
        </h2>
        <div className="services-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
          {frontendSkills.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-3 px-4 py-3 rounded-[6px] shadow-md transition-all duration-300 ease-in-out cursor-pointer w-full hover:scale-105 hover:bg-gray-800"
              key={index}
            >
              {/* <h3 className="text-md font-semibold text-gray-300">
                {skill.s_no}
              </h3> */}
              <h2 className="text-[22px] font-bold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
                {skill.s_name}
              </h2>
              <p className="text-[#D4D4D4] text-sm leading-[20px]">
                {skill.s_disc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Skills Section */}
      <div className="w-full text-center mb-2">
        <h2 className="text-2xl font-semibold  bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
          Backend Development
        </h2>
        <div className="services-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
          {backendSkills.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-3 px-4 py-3 rounded-[6px] shadow-md transition-all duration-300 ease-in-out cursor-pointer w-full hover:scale-105 hover:bg-gray-800"
              key={index}
            >
              {/* <h3 className="text-md font-semibold text-gray-300">
                {skill.s_no}
              </h3> */}
              <h2 className="text-[22px] font-bold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
                {skill.s_name}
              </h2>
              <p className="text-[#D4D4D4] text-sm leading-[20px]">
                {skill.s_disc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="w-full text-center mb-2">
        <h2 className="text-2xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">Tools</h2>
        <div className="services-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
          {toolSkills.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-3 px-4 py-3 rounded-[6px] shadow-md transition-all duration-300 ease-in-out cursor-pointer w-full hover:scale-105 hover:bg-gray-800"
              key={index}
            >
              {/* <h3 className="text-md font-semibold text-gray-300">
                {skill.s_no}
              </h3> */}
              <h2 className="text-[22px] font-bold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
                {skill.s_name}
              </h2>
              <p className="text-[#D4D4D4] text-sm leading-[20px]">
                {skill.s_disc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
