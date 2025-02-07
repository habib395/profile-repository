import React from "react";
import { useParams } from "react-router-dom";
import Project_data from "../../assets/Projects_data";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = Project_data.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <h2 className="text-center text-red-500 text-3xl font-bold mt-10">
        Project Not Found
      </h2>
    );
  }

  return (
    <div className="bg-black min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto p-8 bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-xl border border-gray-800">
        {/* Project Title */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#B923E1] to-[#ff004f] bg-clip-text text-transparent text-center mb-8">
          {project.name}
        </h1>

        {/* Project Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Project Description */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed text-center">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#B923E1]">
            🛠 Main Tech Stack
          </h2>
          <p className="text-lg text-gray-400">{project.technology}</p>
        </div>

        {/* Challenges */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#ff004f]">
            ⚠️ Challenges Faced
          </h2>
          <p className="text-lg text-gray-400">{project.challenges}</p>
        </div>

        {/* Future Improvements */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#B923E1]">
            🚀 Future Improvements
          </h2>
          <p className="text-lg text-gray-400">{project.improvements}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <a
            href={project.live}
            target="_blank"
            className="px-6 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-400 hover:scale-105 hover:shadow-lg transition-transform"
          >
            🚀 Live Project
          </a>
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:scale-105 hover:shadow-lg transition-transform"
          >
            📂 GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
