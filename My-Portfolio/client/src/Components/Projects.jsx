import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ClothApp E-Commerce",
      category: "fullstack",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      description:
        "A complete e-commerce solution with product management, cart functionality.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "frontend",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
      description:
        "A responsive task management application with drag-and-drop functionality and user authentication.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Real-time ChatApp",
      category: "fullstack",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      description:
        "A real-time messaging platform with private chats and media sharing.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "frontend",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description:
        "An interactive weather application that displays current conditions and forecasts for any location.",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "frontend",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" ,
      description:
        "A responsive personal portfolio website showcasing projects and skills.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered
            throughout my journey.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("frontend")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "frontend"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "fullstack"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
