import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  {
    name: "Frontend",
    percentage: 85,
    languages: "React, html, Css, Js, tailwind, Bootstrap",
  },
  { name: "Backend", percentage: 75, languages: "Node.js, Express," },
  {
    name: "Database",
    percentage: 70,
    languages: "MongoDB, MySQL, ",
  },
  {
    name: "Language",
    percentage: 70,
    languages: "C++ , C , python, JS ",
  },
  {
    name: "tools",
    percentage: 65,
    languages: "git , gitub , figma, wordpress, GMeter, Postman, BlazeMeter",
  },
];

const softSkills = [
  { name: "Communication", percentage: 90 },
  { name: "Teamwork", percentage: 85 },
  { name: "Problem Solving", percentage: 80 },
  { name: "Adaptability", percentage: 75 },
  { name: "Creativity", percentage: 70 },
];
const MySkill = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="skill relative w-32 h-32 transition-transform duration-300 transform hover:scale-110 mb-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm bg-gray-800 px-2 py-1 rounded-md transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {skill.languages}
      </div>
      <CircularProgressbar
        value={skill.percentage}
        text={`${skill.percentage}%`}
        styles={buildStyles({
          textSize: "10px",
          pathColor: hovered ? "#FFD700" : "#304CFD",
          textColor: "#44566C",
          trailColor: "#ddd",
        })}
      />
      <p className="text-center  mt-2">{skill.name}</p>
    </div>
  );
};
const SkillsSection = () => {
  return (
    <div className="flex gap-6 justify-center p-8 flex-wrap">
      {skills.map((skill, index) => (
        <MySkill key={index} skill={skill} />
      ))}
    </div>
  );
};

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-4 w-full">
      <p className="text-[#5f6f81] mb-1">{skill.name}</p>
      <div className="w-full bg-gray-700 rounded-md h-4 relative">
        <div
          className="h-4 bg-[#304cfd] rounded-md transition-all duration-300"
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SoftSkillsSection = () => {
  return (
    <div className="p-8 bg-[#F5F8F9] rounded-[30px]  mx-auto">
      {softSkills.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export { SkillsSection, SoftSkillsSection };
