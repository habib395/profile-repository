import Project_data from "../../assets/Projects_data";
import './Project.css'

const Project = () => {
  return (
    <div className="flex work-list flex-col items-center justify-center m-24 gap-20 w-11/12 mx-auto">
      {/* Heading */}
      <div className="relative text-center">
        <h1 className="py-10 z-10 text-4xl font-bold text-[#B923E1]">
          My Projects
        </h1>
        <div className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"></div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Project_data.map((project, index) => {
          return (
            <div
              key={index}
              className="work bg-base-100 image-full w-96 h-60 shadow-xl relative transition-all duration-300 transform hover:scale-110"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
                />
              </figure>
              <div className="layer p-4">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                  <button className="btn bg-transparent rounded-lg transition-all duration-300">
                    Details
                  </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center rounded-full bg-[#B923E1] btn p-6 text-xl font-medium mb-10 transition-all duration-300 cursor-pointer">
        <p>Show More</p>
      </div>
    </div>
  );
};

export default Project;
