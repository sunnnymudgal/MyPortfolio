import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFileExcel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiThymeleaf } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

function TechLogo({ logo: Logo, logoName, bg, color }) {
  return (
  <div className=" bg-[#ffffff37] rounded-md m-[2px]">
    <a>     <div
         className={`
         ${bg} text-white text-xs sm:text-sm rounded-md m-[3px]
         flex items-center w-fit px-3 sm:px-4 py-2 gap-2
         uppercase tracking-[1px] md:z-9999
       `}
      >
        <Logo className={`${color} text-lg sm:text-xl`} />
        {logoName}
      </div></a>
  </div>
  );
}

function Skills() {
  return (
    <div className="bg-secondary text-primary px-4 sm:px-6 md:px-10 py-16">
      <div className="text-2xl sm:text-3xl font-bold">Skills</div>
      <hr className="my-3" />

      {/* Responsive container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* FRONTEND */}
        <div className="w-full md:w-[32%]">
          <div className="mb-2 font-semibold">FRONTEND</div>
          <div className="p-3 bg-[#27272A] rounded-lg">
            <div className="flex flex-wrap">
              <TechLogo
                logo={RiJavascriptFill}
                logoName="JavaScript"
                bg="bg-[#323330]"
                color="text-yellow-400"
              />
              <TechLogo logo={IoLogoHtml5} logoName="HTML5" bg="bg-[#E34F26]" />
              <TechLogo
                logo={FaBootstrap}
                logoName="Bootstrap"
                bg="bg-[#563D7C]"
              />
              <TechLogo logo={FaCss3Alt} logoName="CSS3" bg="bg-[#1572B6]" />
              <TechLogo
                logo={FaReact}
                logoName="React"
                bg="bg-[#1e293b]"
                color="text-cyan-400"
              />
              <TechLogo
                logo={RiTailwindCssFill}
                logoName="Tailwind CSS"
                bg="bg-[#38B2AC]"
              />
              <TechLogo
                logo={SiFramer}
                logoName="Framer Motion"
                bg="bg-[#D2Cc48]"
              />
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="w-full md:w-[32%]">
          <div className="mb-2 font-semibold">BACKEND</div>
          <div className="p-3 bg-[#27272A] rounded-lg">
            <div className="flex flex-wrap">
              <TechLogo logo={FaJava} logoName="JAVA" bg="bg-[#B07219]" />
              <TechLogo
                logo={BiLogoSpringBoot}
                logoName="Spring Framework"
                bg="bg-[#69AD3C]"
              />
              <TechLogo
                logo={SiSpringboot}
                logoName="Spring Boot"
                bg="bg-[#69AD3C]"
              />
              <TechLogo
                logo={SiThymeleaf}
                logoName="Thymeleaf"
                bg="bg-[#005F0F]"
              />
              <TechLogo
                logo={SiMongodb}
                logoName="Mongo DB"
                bg="bg-[#4EA94B]"
              />
              <TechLogo
                logo={TbBrandMysql}
                logoName="MySQL"
                bg="bg-[#0000FF]"
              />
              <TechLogo logo={FaPython} logoName="Python" bg="bg-[#3975A7]" />
              <TechLogo logo={TbBrandCpp} logoName="CPP" bg="bg-[#B2C3FF]" />
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="w-full md:w-[32%]">
          <div className="mb-2 font-semibold">TOOLS</div>
          <div className="p-3 bg-[#27272A] rounded-lg">
            <div className="flex flex-wrap">
              <TechLogo logo={VscVscode} logoName="VS Code" bg="bg-[#2077CA]" />
              <TechLogo logo={FaFileExcel} logoName="Excel" bg="bg-[#3f933f]" />
              <TechLogo
                logo={SiEclipseide}
                logoName="Eclipse"
                bg="bg-[#3F3278]"
              />
              <TechLogo
                logo={SiIntellijidea}
                logoName="Intellij idea"
                bg="bg-[#DA336F]"
              />
              <TechLogo
                logo={SiPostman}
                logoName="Postman API"
                bg="bg-[#FE6C37]"
              />

              <TechLogo
                logo={SiPostman}
                logoName="Power BI"
                bg="bg-[#3a4b2b]"
              />

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
