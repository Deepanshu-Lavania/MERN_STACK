import React from "react";

export default function About() {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <div className="mt-5">
            <h2 className="text-start">Hi, I'm Deepanshu Lavania</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-justify">
              I'm a Full Stack developer, who is passionate about MERN Stack. I
              love building websites that captivate users. I'm always exploring
              new ways to bring ideas to life through code. Being a firm
              believer in the power of teamwork, I cherish the opportunity to
              collaborate and contribute as a team player, where our collective
              creativity sparks exceptional results. I embrace challenges as
              opportunities for growth, dedicating myself to hard work and
              continuous learning in this ever-evolving tech landscape.
            </p>
          </div>

          {/* <div class="w-80 rounded-md self-center lg:ml-6 mt-6 lg:mt-0 lg:px-0">
            <div
              class="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="large"
              data-theme="dark"
              data-type="HORIZONTAL"
              data-vanity="shahad-hassan-82287a220"
              data-version="v1"
              data-rendered="true"
              data-uid="584014"
            >
              <iframe
                frameborder="0"
                style="display: block;"
                height="286"
                width="336"
              ></iframe>
            </div>
          </div> */}
          <div className="flex justify-center">
            <div className="rounded-md self-center lg:ml-6 mt-6 lg:mt-0 lg:px-0">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="dark"
                data-type="HORIZONTAL"
                data-vanity="deepanshulavania"
                data-version="v1"
              ></div>
            </div>
          </div>
          <script
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
          ></script>
        </div>
      </div>
    </div>
  );
}
