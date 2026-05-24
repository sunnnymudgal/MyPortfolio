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

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TechLogo({ logo: Logo, logoName, color }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
      }}
      className="group relative"
    >
      {/* OUTER GLOW */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-cyan-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

      {/* CARD */}
      <div
        className="
          relative
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-2xl
          bg-white/[0.05]
          border
          border-white/10
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white/[0.08]
          hover:border-cyan-400/20
          shadow-[0_0_0_rgba(0,0,0,0)]
          hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
        "
      >
        <Logo className={`text-xl ${color}`} />

        <span className="text-gray-200 text-sm tracking-wide">
          {logoName}
        </span>
      </div>
    </motion.div>
  );
}

function SkillCard({ title, children }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-6
        md:p-7
      "
    >
      {/* HOVER GRADIENT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-pink-500/[0.06]"></div>

      {/* TOP LIGHT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-semibold mb-6 text-white tracking-wide">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="relative bg-secondary text-primary px-6 md:px-16 py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        </div>

        {/* ORBS */}
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[5%] w-[280px] h-[280px] bg-pink-500/10 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"
        />
      </div>

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-4">
          Expertise
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Technologies & Tools
        </h2>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
      >

        {/* PROGRAMMING */}
        <SkillCard title="Programming Languages">
          <TechLogo logo={FaJava} logoName="Java" color="text-orange-400" />
          <TechLogo logo={TbBrandCpp} logoName="C++" color="text-blue-400" />
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

        {/* BUILD */}
        <SkillCard title="Build & Dependency">
          <TechLogo logo={SiGradle} logoName="Gradle" color="text-cyan-400" />
          <TechLogo logo={SiGradle} logoName="Maven" color="text-orange-300" />
          <TechLogo logo={FaNodeJs} logoName="npm" color="text-red-400" />
          <TechLogo logo={SiVite} logoName="Vite" color="text-violet-400" />
        </SkillCard>

        {/* DATABASE */}
        <SkillCard title="Databases">
          <TechLogo logo={SiMysql} logoName="MySQL" color="text-blue-400" />
          <TechLogo logo={SiMongodb} logoName="MongoDB" color="text-green-400" />
          <TechLogo logo={SiPostgresql} logoName="PostgreSQL" color="text-cyan-400" />
        </SkillCard>

        {/* DEV TOOLS */}
        <SkillCard title="Developer Tools">
          <TechLogo logo={FaGitAlt} logoName="Git" color="text-orange-400" />
          <TechLogo logo={FaGithub} logoName="GitHub" color="text-white" />
          <TechLogo logo={SiPostman} logoName="Postman" color="text-orange-400" />
          <TechLogo logo={SiIntellijidea} logoName="IntelliJ IDEA" color="text-pink-400" />
          <TechLogo logo={SiEclipseide} logoName="Eclipse" color="text-violet-400" />
          <TechLogo logo={VscVscode} logoName="VS Code" color="text-blue-400" />
        </SkillCard>

        {/* DATA */}
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
          <TechLogo logo={SiGnubash} logoName="WHM/cPanel" color="text-gray-300" />
        </SkillCard>

      </motion.div>
    </section>
  );
}

export default Skills;