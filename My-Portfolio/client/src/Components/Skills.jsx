import React from "react";
import "./Css/Skill.css";
import { ArrowDown } from "lucide-react";


const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "JavaScript", percentage: 87 },
    { name: "React.js", percentage: 90 },
    { name: "Tailwind CSS", percentage: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 88 },
    { name: "MongoDB", percentage: 90 },
    { name: "RESTful APIs", percentage:85 },
  ];

  const otherSkills = [
    "Git & GitHub",
    "Python",
    "Netlify",
    "PostMan",
    "Responsive Design",
    "Manual Testing",
    "Java",
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my journey as a
            MERN stack developer. Here's an overview of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => {
                return (
                  <div className="cont1" key={index}>
                    <div className="head">{skill.name}</div>
                    <div className="skill">
                    <div className="percent" style={{ width: `${skill.percentage}%` }}>                      <span className="perc flex items-center ">
                    {skill.percentage}% <ArrowDown className="icon text-gray-600" size={20} />
                  </span>
                        <div className="java color"></div>
                      </div>
                      <div className="transparent " ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => {
                return (
                  <div className="cont1" key={index}>
                    <div className="head">{skill.name}</div>
                    <div className="skill">
                    <div className="percent" style={{ width: `${skill.percentage}%` }}>                      <span className="perc flex items-center ">
                    {skill.percentage}% <ArrowDown className="icon text-gray-600" size={20} />
                  </span>
                        <div className="java color"></div>
                      </div>
                      <div className="transparent " ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Other Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
