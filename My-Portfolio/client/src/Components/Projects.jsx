import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import SWG_img from "/MyImage/SWG_img.jpg"

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ClothApp E-Commerce",
      category: "fullstack",
      image: "/MyImage/ECommerce_img.jpg",
      description: "A complete e-commerce solution with product management, cart functionality.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Real-time ChatApp",
      category: "fullstack",
      image: "/MyImage/ChatApp_img.jpg",
      description: "A real-time messaging platform with private chats and media sharing.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Snake Water Gun",
      category: "frontend",
      image:"/MyImage/SWG_img.jpg",
      description: "A simple Snake Water Gun game built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://deepanshu-lavania.github.io/SWG_Game/",
      githubLink: "https://github.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "frontend",
      image: "/MyImage/Portfolio_img.jpg",
      description: "A personal portfolio website showcasing projects and skills.",
      technologies: ["React", "Tailwind CSS", "EmailJs"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 5,
      title: "Lavania EduHub",
      category: "frontend",
      image:"/MyImage/EduHub_img.jpg",
      description: "An educational hub platform for learning resources.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://deepanshu-lavania.github.io/EduHub/",
      githubLink: "https://github.com",
    },
  ];

  const filteredProjects =
  filter === "all"
    ? projects
    : projects.filter((project) => project.category.toLowerCase() === filter.toLowerCase());
  console.log("filteredprojects is : ",filteredProjects);
  
  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm">
            {["all", "frontend", "fullstack"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === type ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <img src={project.image} alt={project.title} className="w-full h-48 object-fill transition-transform hover:scale-105" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
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
