import React from "react";
import Profile from "../../Components/Header/Profile/Profile";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const location = useLocation();
  return (
    <div className=" main-container  w-auto md:w-auto  mx-8  max-w-[60.4rem] md:max-w-[68.4rem] lg:flex-row md:flex-row flex-col lg:mx-auto   border-none flex items-start relative top-0 mb-12">
      <Profile />
      <motion.div
        key={location.pathname} // Ensure animation runs on page change
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smoother transition
      >
        <div className="content mt-10 lg:mt-[2.5rem] mb-[1.875rem] pl-[1.875rem] pr-[1.875rem] w-full">
          <div className=" mb-4">
            <h1 className="text-[1.875rem] font-semibold  ">Contact</h1>
          </div>
          <div className="map   mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.494153727902!2d78.12583715460119!3d29.907672929746287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390946064000d0bf%3A0x7b79fb712d7ac0cf!2sJamalpur%20Rd%2C%20Jamalpur%20Kalan%2C%20Uttarakhand%20249404!5e0!3m2!1sen!2sin!4v1712814593375!5m2!1sen!2sin"
              width="100%"
              height="355"
              style={{ border: 100 }}
              allowfullscreen=""
              className="rounded-[20px] outline-none"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2 className="text-[1.5625rem] mb-6 font-semibold text-[#44566C]">
            Contact form
          </h2>
          <div>
            <form>
              <div className=" flex flex-wrap gap-8 ">
                <div className=" mb-8 pr-12  bg-[#F5F8F9] items-center flex gap-4 py-4 px-8 rounded-2xl ">
                  <FaRegUser />
                  <input
                    className=" bg-transparent outline-none"
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-8 pr-12 bg-[#F5F8F9] items-center flex gap-4 py-4 px-8 rounded-2xl">
                  <MdOutlineAlternateEmail />
                  <input
                    className=" bg-transparent  outline-none"
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="">
                <textarea
                  className="mb-8 pr-4 md:pr-12 outline-none bg-[#F5F8F9] flex gap-4 py-3 md:py-4 px-4 md:px-8 rounded-2xl w-full text-sm md:text-base placeholder-gray-500"
                  cols="10"
                  rows="4"
                  placeholder="Type your message"
                  name="message"
                  required
                />
              </div>

              <div className=" flex gap-2 items-center float-right justify-center py-[1.7em] px-[1em] submit bg-[#778AFD] w-44  h-12 rounded-2xl mb-3">
                <IoIosSend className=" text-white" />
                <input
                  className=" text-white "
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
