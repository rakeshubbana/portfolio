import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant1, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { facebook, github, instagram, linkedin, twitter } from "../assets";

const Social = () => {
  return (
    <>
      <motion.div variants={textVariant1()}>
        <h2 className="text-white font-black  md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Social Profiles
        </h2>
      </motion.div>
      <p className="border-b-2 border-[#70ebc0] "></p>
      <br />

      <motion.div className="flex" variants={textVariant()}>
        <a href="https://github.com/rakeshubbana" target=" ">
          <img className="h-[40px]" src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/rakesh-a346b8145/" target=" ">
          <img className="h-[40px]" src={linkedin} alt="" />
        </a>
        <a href="https://www.instagram.com/rakesh_ubbana3/" target=" ">
          <img className="h-[40px]" src={instagram} alt="" />
        </a>
      </motion.div>
      <br />
      {/* Contact Information Section */}
      <motion.div variants={textVariant1()}>
        <h2 className="text-white font-black  md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact Information
        </h2>
        <p className="border-b-2 border-[#70ebc0] "></p>
        <br />
        <p className="text-[#70ebc0]">
          Email:{" "}
          <a href="mailto:your.email@example.com" className="hover:underline">
            rakeshubbana30@gmail.com
          </a>
        </p>
        <p className="text-[#70ebc0]">
          Phone: <span className="hover:underline">+1 (513) 616-3353</span>
        </p>
      </motion.div>
      <br />

      <footer className="text-center max-sm:mt-20">All Rights Reserved</footer>
    </>
  );
};

export default SectionWrapper(Social, "social");
