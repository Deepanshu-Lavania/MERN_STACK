import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Phone,
  MapPin,
  Send,
  Upload,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lobsterFont = {
    fontFamily: "Lobster, cursive",
    fontWeight: 400,
    fontStyle: "normal",
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span
                style={lobsterFont}
                className=" text-4xl font-bold text-white underline"
              >
                DL.
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-[100%]">
              A passionate MERN Stack Developer focused on creating efficient,
              scalable, and user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/DeepanshuLavania"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-sky-400 text-white rounded-full hover:bg-sky-300 transition-colors"
                aria-label="GitHub"
              >
                <Send size={20} />
              </a>
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
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 grid grid-cols-2 lg:grid-cols-1">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {/* Email */}
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=deepanshu631088@gmail.com"
                  aria-label="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-400 hover:text-white">
                    deepanshu631088@gmail.com
                  </span>
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+916397105488" aria-label="Phone">
                  <span className="text-gray-400 hover:text-white cursor-pointer">
                    +91 6397105488
                  </span>
                </a>
              </li>

              {/* Location */}
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Meerut,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Location"
                >
                  <span className="text-gray-400 hover:text-white cursor-pointer">
                    Meerut, India
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            Copyright &copy; {currentYear} Deepanshu Lavania. All rights
            reserved.
          </p>
          <p className="text-gray-400 flex justify-center space-x-6">
            <div>
              Designed By &nbsp;
              <span
                className="text-gray-300 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Deepanshu Lavania
              </span>
            </div>
            <div
              className="mt-1 transition-color p-2 bg-gray-800 cursor-pointer text-white rounded-full hover:bg-gray-700 animate-bounce"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Upload size={20} />
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
