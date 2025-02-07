import Project_data from "../../assets/Projects_data";
import "./Project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div
      id="portfolio"
      className="flex work-list flex-col items-center justify-center sm:m-6 gap-20 w-11/12 mx-auto"
    >
      <div className="relative text-center">
        <h1 className=" py-2 sm:py-10 z-10 text-4xl font-bold text-[#B923E1]">
          My Projects
        </h1>
        <div className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Project_data.map((project, index) => {
          return (
            <div
              key={index}
              className="work bg-base-100 image-full w-full h-60 shadow-xl relative transition-all duration-300 transform hover:scale-110"
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
                <Link to={`/project/${project.id}`}>
                  <button className="btn bg-transparent rounded-lg transition-all duration-300">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
