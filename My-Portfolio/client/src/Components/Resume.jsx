import React, { useEffect, useState } from "react";
import { Briefcase, GraduationCap, EyeClosed, Eye } from "lucide-react";
import resume from "/MyImage/EditMy-Resume(Deepanshu)_page-0001 (1).jpg";

const Resume = () => {
  const [viewResume, setViewResume] = useState(false);
  const showResume = () => {
    setViewResume((prev) => !prev);
  };
  const experiences = [
    {
      title: "Full Stack Developer",
      //   company: "Digital Solutions Ltd.",
      period: "2023-2025",
      description:
        "Developed and maintained multiple client projects using React.js, Node.js, and MongoDB. Collaborated with design and product teams to implement new features and improve user experience.",
    },
    {
      title: "Frontend Developer",
      //   company: "WebCraft Studios",
      period: "2022-2025",
      description:
        "Created responsive and interactive user interfaces using React.js and modern CSS frameworks. Worked closely with backend developers to integrate APIs and optimize application performance.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "AKTU University",
      period: "2021 - 2025",
      description:
        "Focused on programming fundamentals, data structures, and web development basics. Participated in multiple hackathons and coding competitions.",
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <div className="mt-6">
            <div
              className="cursor-pointer inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={showResume}
            >
              {viewResume ? (
                <Eye className="h-5 w-5 mr-2" />
              ) : (
                <EyeClosed className="h-5 w-5 mr-2" />
              )}
              View CV
            </div>
            <div>
              {viewResume ? (
                <div className="relative mt-5 max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl">
                  {/* Border Design */}
                  <div className="absolute inset-0 border-4 border-white rounded-lg transform rotate-2 shadow-inner"></div>
                  <div className="absolute inset-0 border-4 border-gray-200 rounded-lg transform -rotate-1 shadow-inner"></div>

                  {/* Resume Image */}
                  <img
                    src={resume}
                    alt="Resume"
                    className="relative w-full h-auto object-cover z-10 rounded-lg"
                  />
                </div>
              ) : (
                " "
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 pb-8"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-3  rounded-lg shadow-sm md:p-6">
                    <div className="flex flex-wrap justify-between items-center mt-1 mb-3">
                      <h4 className="text-xl font-semibold text-gray-800">
                        {exp.title}
                      </h4>
                      <span className="text-gray-500 text-sm bg-gray-200 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 pb-8"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm md:p-6">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap justify-between items-center mt-1 mb-3">
                      <span className="text-blue-600 font-medium">
                        {edu.institution}
                      </span>
                      <span className="text-gray-500 text-sm bg-gray-200 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
