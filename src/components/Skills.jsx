import React from "react";

import {
  FaNodeJs,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaReact,
  FaPython,
  FaFileExcel,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiMongodb,
  SiFramer,
  SiEclipseide,
  SiIntellijidea,
  SiPostman,
  SiThymeleaf,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiNextdotjs,
  SiGradle,
  SiVite,
  SiLinux,
  SiShopify,
  SiJquery,
  SiGnubash,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import { IoLogoHtml5 } from "react-icons/io";

import { motion } from "framer-motion";

function TechLogo({ logo: Logo, logoName, color }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

      {/* CARD */}
      <div
        className="
          relative
          flex
          items-center
          gap-2
          px-4
          py-3
          rounded-2xl
          bg-white/[0.04]
          backdrop-blur-xl
          border
          border-white/10
          text-sm
          tracking-wide
          transition-all
          duration-300
          hover:border-pink-400/20
          hover:bg-white/[0.07]
        "
      >
        <Logo className={`text-xl ${color}`} />

        <span className="text-gray-200">
          {logoName}
        </span>
      </div>
    </motion.div>
  );
}

function SkillCard({ title, children }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-6
      "
    >
      <h3 className="text-lg font-semibold mb-5 text-white tracking-wide">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="relative bg-secondary text-primary px-6 md:px-16 py-24 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[250px] h-[250px] bg-pink-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* TITLE */}
      <div className="mb-16">
        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
          Expertise
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold">
          Technologies & Tools
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* PROGRAMMING LANGUAGES */}
        <SkillCard title="Programming Languages">
          <TechLogo logo={FaJava} logoName="Java" color="text-orange-400" />
          <TechLogo logo={TbBrandCpp} logoName="" color="text-blue-400" />
          <TechLogo logo={FaPython} logoName="Python" color="text-yellow-300" />
          <TechLogo logo={RiJavascriptFill} logoName="JavaScript" color="text-yellow-400" />
          <TechLogo logo={SiMysql} logoName="SQL" color="text-blue-300" />
        </SkillCard>

        {/* FRONTEND */}
        <SkillCard title="Frontend">
          <TechLogo logo={FaReact} logoName="React.js" color="text-cyan-400" />
          <TechLogo logo={SiNextdotjs} logoName="Next.js" color="text-white" />
          <TechLogo logo={RiTailwindCssFill} logoName="Tailwind CSS" color="text-cyan-300" />
          <TechLogo logo={FaBootstrap} logoName="Bootstrap" color="text-violet-400" />
          <TechLogo logo={SiJquery} logoName="jQuery" color="text-blue-300" />
          <TechLogo logo={SiFramer} logoName="Framer Motion" color="text-pink-400" />
          <TechLogo logo={SiFramer} logoName="GSAP" color="text-green-300" />
        </SkillCard>

        {/* BACKEND */}
        <SkillCard title="Backend & Frameworks">
          <TechLogo logo={SiSpringboot} logoName="Spring Boot" color="text-green-400" />
          <TechLogo logo={SiSpringsecurity} logoName="Spring Security" color="text-green-300" />
          <TechLogo logo={SiHibernate} logoName="Hibernate" color="text-yellow-500" />
          <TechLogo logo={SiHibernate} logoName="JPA" color="text-yellow-300" />
          <TechLogo logo={SiThymeleaf} logoName="Spring MVC" color="text-green-500" />
          <TechLogo logo={FaNodeJs} logoName="REST APIs" color="text-green-400" />
        </SkillCard>

        {/* BUILD TOOLS */}
        <SkillCard title="Build & Dependency">
          <TechLogo logo={SiGradle} logoName="Gradle" color="text-cyan-400" />
          <TechLogo logo={SiGradle} logoName="Maven" color="text-orange-300" />
          <TechLogo logo={FaNodeJs} logoName="npm" color="text-red-400" />
          <TechLogo logo={SiVite} logoName="Vite" color="text-violet-400" />
        </SkillCard>

        {/* DATABASES */}
        <SkillCard title="Databases">
          <TechLogo logo={SiMysql} logoName="MySQL" color="text-blue-400" />
          <TechLogo logo={SiMongodb} logoName="MongoDB" color="text-green-400" />
          <TechLogo logo={SiPostgresql} logoName="PostgreSQL" color="text-cyan-400" />
        </SkillCard>

        {/* DEVELOPER TOOLS */}
        <SkillCard title="Developer Tools">
          <TechLogo logo={FaGitAlt} logoName="Git" color="text-orange-400" />
          <TechLogo logo={FaGithub} logoName="GitHub" color="text-white" />
          <TechLogo logo={SiPostman} logoName="Postman" color="text-orange-400" />
          <TechLogo logo={SiIntellijidea} logoName="IntelliJ IDEA" color="text-pink-400" />
          <TechLogo logo={SiEclipseide} logoName="Eclipse" color="text-violet-400" />
          <TechLogo logo={VscVscode} logoName="VS Code" color="text-blue-400" />
        </SkillCard>

        {/* DATA & ANALYTICS */}
        <SkillCard title="Data & Analytics">
          <TechLogo logo={FaFileExcel} logoName="Microsoft Excel" color="text-green-400" />
          <TechLogo logo={FaFileExcel} logoName="Power BI" color="text-yellow-400" />
        </SkillCard>

        {/* CMS */}
        <SkillCard title="CMS Tools">
          <TechLogo logo={SiShopify} logoName="Shopify" color="text-green-400" />
        </SkillCard>

        {/* CLOUD */}
        <SkillCard title="Cloud & Hosting">
          <TechLogo logo={FaAws} logoName="AWS EC2" color="text-yellow-400" />
          <TechLogo logo={FaAws} logoName="AWS S3" color="text-orange-300" />
          <TechLogo logo={SiLinux} logoName="Linux Basics" color="text-yellow-300" />
          <TechLogo logo={SiVite} logoName="Vercel" color="text-white" />
          <TechLogo logo={SiGnubash} logoName="Deployment" color="text-cyan-300" />
          <TechLogo logo={SiGnubash} logoName="WHM/cPanel" color="text-gray-300" />
        </SkillCard>
      </div>
    </section>
  );
}

export default Skills;
