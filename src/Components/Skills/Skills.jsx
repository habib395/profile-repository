import Skills_data from "../../assets/Skills_data";
import "./Skills.css";

const Skills = () => {
  const renderSkills = (skills) => {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.s_icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-5 rounded-lg shadow-lg bg-gray-900 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <IconComponent className="text-5xl text-[#B923E1]" />

              <h2 className="text-xl font-bold text-white">{skill.s_name}</h2>

              {/* <p className="text-gray-300 text-sm text-center px-2">
                {skill.s_disc}
              </p> */}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 w-11/12 mx-auto py-10">
      <div id="services" className="text-center relative">
        <h1 className="py-6 text-4xl font-bold text-[#B923E1] relative z-10">
          Skills
        </h1>
        <div className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"></div>
      </div>

      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
          Frontend Development
        </h2>
        {renderSkills(
          Skills_data.find((skill) => skill.category === "Frontend").skills
        )}
      </div>

      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
          Backend Development
        </h2>
        {renderSkills(
          Skills_data.find((skill) => skill.category === "Backend").skills
        )}
      </div>

      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
          Tools & Technologies
        </h2>
        {renderSkills(
          Skills_data.find((skill) => skill.category === "Tools").skills
        )}
      </div>
    </div>
  );
};

export default Skills;
