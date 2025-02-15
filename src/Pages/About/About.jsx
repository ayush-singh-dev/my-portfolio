import React from "react";
import Profile from "../../Components/Header/Profile/Profile";
import webdesign from "../../Images/web-design.png";
import webdev from "../../Images/web.png";
import photoghaphy from "../../Images/camera.png";
import book from "../../Images/book.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div className="main-container w-auto md:w-auto mx-8 max-w-[60.4rem] md:max-w-[68.4rem] lg:flex-row md:flex-row flex-col lg:mx-auto border-none flex items-start relative top-0 mb-12">
      {/* Profile is not animated */}
      <Profile />

      {/* Animate the rest of the content */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smoother transition
      >
        <div className="content mt-10 lg:mt-[2.5rem] mb-[1.875rem] px-[1.875rem] w-full">
          <div>
            <p className="text-[1.8rem] font-bold text-[#44566C]">About Me</p>
          </div>
          <div className="pt-4">
            <p className="mb-4">
              I am a BCA student with a strong passion for UI/UX design,
              full-stack development, and artificial intelligence. My technical
              expertise includes front-end and back-end development, database
              management, and the MERN stack (MongoDB, Express.js, React,
              Node.js). I have experience working with programming languages
              like C, C++, JavaScript, and Python, allowing me to build dynamic
              and efficient applications. Additionally, I am skilled in using
              design tools like Figma to create user-friendly interfaces.
            </p>
            <p>
              Beyond technical skills, I am a quick learner with strong
              problem-solving abilities, teamwork, and adaptability. I thrive in
              collaborative environments and have excellent communication skills
              that help me work effectively with diverse teams. My passion for
              technology and design drives me to continuously learn and
              innovate, making me eager to contribute and grow in a dynamic work
              environment.
            </p>
          </div>

          {/* Second Column */}
          <section className="mt-[1.8125rem]">
            <p className="text-[1.5625rem] mb-6 text-[#44566C] font-semibold">
              What I'm Doing
            </p>
            <div className="flex flex-wrap -mx-4">
              {/* Card 1 */}
              <div className="mb-6 px-4 w-full sm:w-1/2">
                <div className="h-[197px] flex flex-col items-center border-[3px] border-[#F5F8F9] rounded-[30px] text-center p-6">
                  <img className="w-12 mb-4" src={book} alt="book" />
                  <h3 className="mb-2 text-[1.125rem] text-[#44566C] font-semibold">
                    Book-Reader
                  </h3>
                  <p>
                    reader who enjoys exploring diverse genres to gain new
                    perspectives and insights.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="mb-6 px-4 w-full sm:w-1/2">
                <div className="h-[197px] flex flex-col items-center border-[3px] border-[#F5F8F9] rounded-[30px] text-center p-6">
                  <img className="w-12 mb-4" src={webdesign} alt="web-design" />
                  <h3 className="mb-2 text-[1.125rem] text-[#44566C] font-semibold">
                    Web-Development
                  </h3>
                  <p>
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </div>
              {/* Add other cards as needed */}
              <div className="mb-6 px-4 w-full sm:w-1/2">
                <div className="h-[197px] flex flex-col items-center border-[3px] border-[#F5F8F9] rounded-[30px] text-center p-6">
                  <img
                    className="w-12 mb-4"
                    src={photoghaphy}
                    alt="web-development"
                  />
                  <h3 className="mb-2 text-[1.125rem] text-[#44566C] font-semibold">
                    Photography
                  </h3>
                  <p>
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </div>

              <div className="mb-6 px-4 w-full sm:w-1/2">
                <div className="h-[197px] flex flex-col items-center border-[3px] border-[#F5F8F9] rounded-[30px] text-center p-6">
                  <img
                    className="w-12 mb-4"
                    src={webdev}
                    alt="web-development"
                  />
                  <h3 className="mb-2 text-[1.125rem] text-[#44566C] font-semibold">
                    Web-Development
                  </h3>
                  <p>
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
