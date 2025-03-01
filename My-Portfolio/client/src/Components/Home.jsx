import React, { memo, useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import image from "/MyImage/Me_img-removebg-preview (1).png";
import './Css/Home.css';

function Home({ setActiveSection }) {
  const [jobTitle, setJobTitle] = useState("");
  const [showSlash, setShowSlash] = useState(false);

  const scrollToAbout = () => {
    setActiveSection("about");
    const aboutSection = document.getElementById("about");
    console.log("aboutSection is : ", aboutSection);

    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    console.log("contactSection is : ", contactSection);

    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setActiveSection("contact");
  };

  // Typing animation
  const mainHeading = "FullStack Developer.";
  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index <= mainHeading.length) {
        setJobTitle(mainHeading.slice(0, index));
        index++;
        setTimeout(typeWriter, 400);
      } else {
        setShowSlash(true); // Ensure slash starts blinking after typing completes
      }
    };
    typeWriter();
  }, []);

  useEffect(() => {
    if (jobTitle === mainHeading) {
      const interval = setInterval(() => {
        setShowSlash((prev) => !prev);
      }, 500); // Toggles every 500ms

      return () => clearInterval(interval); // Cleanup interval when component unmounts
    }
  }, [jobTitle]);

  const nameFont = {
    fontFamily: '"Protest Guerrilla", sans-serif',
  };

  return (
    <div className="min-h-screen flex items-center relative pt-20 md:pt-10 bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="container mx-auto px-4 md:px-6 pb-30 md:py-15 ">
        <div className="flex flex-col md:flex-row items-center justify-between lg:justify-around gap-6 lg:gap-3">
          <div className="order-2 w-full md:w-1/2 space-y-5 sm:space-y-3 lg:space-y-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-medium text-gray-500">
              Hello, I'm
            </h2>
            <h1 className="text-3xl  md:text-4xl lg:text-4xl font-bold text-gray-700 lg:order-2">
              Deepanshu Lavania
            </h1>
            <h3
              className="uppercase text-2xl md:text-3xl font-semibold text-indigo-600 "
              style={nameFont}
            >
              {jobTitle}
              <span className="text-gray-600">{showSlash ? " /" : ""}</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-lg">
              I build responsive web applications with modern technologies,
              focusing on creating seamless user experiences with clean,
              efficient code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Deepanshu-Lavania"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepanshulavania/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshu631088@gmail.com"
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="flex space-x-4">
              <div className="pt-4">
                <button
                  onClick={scrollToAbout}
                  className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 sm:px-6 sm:py-3"
                >
                  Learn More <ArrowDown size={16} />
                </button>
              </div>
              <div className="pt-4">
                <button
                  onClick={scrollToContact}
                  className="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 sm:px-6 sm:py-3"
                >
                  Hire Me <ArrowDown size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex order-1 justify-center">
            <div class="my-img">
              <img
                src={image}
                alt="Deepanshu Lavania"
                className="object-cover"
                style={{ objectPosition: "center 6%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} className="text-blue-600" />
        </button>
      </div>
    </div>
  );
}

export default Home;
