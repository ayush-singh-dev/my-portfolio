import React from "react";
import img1 from "../../../Images/profile-pic.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";

const Profile = () => {
  return (
    <div className=" profile-container static w-full md:w-fit  md:sticky md:top-0">
      <div className=" profile w-full md:w-fit   flex flex-col bg-[#F5F8F9] sm:rounded-[0px] md:rounded-[30px] p-6 lg:p-[2.5rem] text-center justify-center z-0 mx-auto lg:mx-0">
        <div className=" flex justify-center mb-4">
          <img
            className=" w-40 h-52 sm:w-44 sm:h-56 lg:w-52 lg:h-60 rounded-t-[22%] rounded-r-[23%] rounded-b-[18%] rounded-l-[21%]"
            src={img1}
            alt="profile-pic"
          />
        </div>
        <div className="">
          <h2 className=" text-[1.5rem] sm:text-[1.75rem] mb-3 text-[#44566C] font-semibold">
            Ayush Singh
          </h2>
          <p className=" bg-[#E9EDF0] text-[#44566C] text-[0.875rem] sm:text-[0.9375rem] font-normal rounded-[20px] py-2 px-4">
            Web Developer
          </p>
          <div className=" flex justify-center gap-4 mt-[1.5rem] mb-[1.375rem] ">
            <a
              href="https://www.instagram.com/ayush777rawat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] text-gray-400 transition duration-300 hover:text-blue-600 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="www.linkedin.com/in/ayush-singh-752b8524b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] text-gray-400 transition duration-300 hover:text-blue-600 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ayush777rawat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] text-gray-400 transition duration-300 hover:text-blue-600 hover:scale-110"
            >
              <FaFacebookSquare />
            </a>
          </div>
        </div>
        <div className=" text-[#44566C] pl-0 mb-[1.3125rem] flex flex-col items-start">
          <div className=" flex justify-center items-center mb-[0.75rem] gap-3">
            <p>
              <CiCalendar />
            </p>
            <p>March 17,2004</p>
          </div>
          <div className=" flex justify-center items-center  mb-[0.75rem] gap-3">
            <p>
              <CiLocationOn />
            </p>
            <p>Haridwar - Uttarakhand</p>
          </div>
          <div className=" flex justify-center items-center mb-[0.75rem] gap-3">
            <a href="ayush777rawat@gmail.com">
              <MdOutlineEmail />
            </a>
            <p>Ayush777Rawat@gmail.com</p>
          </div>
          <div className=" flex justify-center items-center mb-[0.75rem] gap-3">
            <a
              href=" https://github.com/ayush-singh-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] text-gray-400 transition duration-300 hover:text-blue-600 hover:scale-110"
            >
              <FiGithub />
            </a>
            <p>Github</p>
          </div>
        </div>
        <div>
          <a
            href="/cv.pdf"
            download="My_CV.pdf"
            className="bg-[#304CFD] flex justify-center items-center  py-2 text-white rounded-[20px] shadow-md hover:bg-[#5164da] transition-shadow"
          >
            <div className=" ">
              <IoMdDownload />
            </div>
            <div>
              <p>Download CV</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
