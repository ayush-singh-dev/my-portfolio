import React from "react";
import Profile from "../../Components/Header/Profile/Profile";
import graduation from "../../Images/graduation-cap.png";
import experience from "../../Images/experience.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Education, Experience } from "../Resume/ResumeComponent.js";
import { SkillsSection, SoftSkillsSection } from "./MySkill.jsx";

const Resume = () => {
  const location = useLocation();

  return (
    <div
      className="main-container  w-auto md:w-auto  mx-8  max-w-[60.4rem] md:max-w-[68.4rem] lg:flex-row 
    md:flex-row flex-col lg:mx-auto   border-none flex items-start relative top-0 mb-12"
    >
      <Profile />
      <motion.div
        key={location.pathname} // Ensure animation runs on page change
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className=" content lg:mt-[2.5rem]  mt-[2.5rem] mb-[1.875rem] pl-[1.875rem] pr-[1.875rem] w-full ">
          <div>
            <h1 className="text-[1.875rem] font-semibold  ">Resume</h1>
          </div>
          <section className="content-edu mt-[1.8125rem]">
            <div className="flex items-center ">
              <img
                className=" w-12 mr-2 mt-[-0.25rem]"
                src={graduation}
                alt="graduation"
              />
              <p className=" font-semibold text-[#44566C] text-[1.6rem]  mb-6 py-1">
                Education
              </p>
            </div>
            <div className="timeline mt-[ 1.8125rem] pl-[1.0625rem]">
              <div className=" border-l border-l-[#F0F0F6] border-solid pb-[1.1875rem] pl-[1.375rem]   ">
                {Education.map((ed, key) => {
                  return (
                    <div key={key}>
                      <h4 className="text-[1.125rem] font-semibold text-[#44566C] relative t-[-0.4375rem] mb-1">
                        {ed.name}
                      </h4>
                      <h3>{ed.duration}</h3>
                      <p className=" text-[0.975rem] mt-2 mb-4">
                        {ed.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="content-experience mt-7 py-[12.1px]">
            <div className="flex items-center mb-3 ">
              <img
                className=" w-12 mr-2 mt-[-0.25rem]"
                src={experience}
                alt="experience"
              />
              <p className=" font-semibold text-[#44566C] text-[1.6rem]  mb-6">
                Experience
              </p>
            </div>
            <div className="timeline mt-[ 1.8125rem] pl-[1.0625rem]">
              <div className=" border-l border-l-[#F0F0F6] border-solid pb-[1.1875rem] pl-[1.375rem]   ">
                {Experience.map((ex, key) => {
                  return (
                    <div key={key}>
                      <h4 className="text-[1.125rem] font-semibold text-[#44566C] relative t-[-0.4375rem] mb-1">
                        {ex.name}
                      </h4>
                      <h3>{ex.duration}</h3>
                      <p className=" text-[0.975rem] mt-2 mb-4">
                        {ex.organisation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-[1.375rem] text-[2rem] font-semibold text-[#44566C] ">
              My skills
            </h2>
            <div className=" mb-4">
              <SkillsSection />
            </div>
            <div>
              <SoftSkillsSection />
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
