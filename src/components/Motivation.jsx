import React from "react";
import { LiaJava } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { SiSpring, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

function FloatingIcon({ Icon, yValue, duration, extraClass = "" }) {
  return (
    <motion.div
      className={`${extraClass}`}
      initial={{ y: 0 }}
      animate={{ y: [0, yValue, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Icon />
    </motion.div>
  );
}

function ImageCard() {
  return (
    <div className="relative">
      {/* Image */}
      <div className="overflow-hidden w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[420px] rounded-3xl flex justify-center items-end absolute bottom-0">
        <img
          src="../images/sunnyPhoto.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      {/* Background Card */}
      <div className="bg-[#4C3837] w-[250px] h-[220px] sm:w-[300px] sm:h-[260px] md:w-[350px] md:h-[300px] rounded-3xl"></div>
    </div>
  );
}

function Motivation() {
  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 lg:px-30 items-center justify-between bg-secondary text-primary gap-10">
      {/* TEXT */}
      <div className="md:mb-100 mb-10 md:w-1/2">
        <h2 className="text-4xl text-white mb-2">Motivation</h2>
        <div className="w-24 h-[2px] bg-primary mb-4 text-2xl"></div>
        <p className="text-gray-300 leading-relaxed">
          I am deeply motivated by the process of turning ideas into real-world
          applications. Building scalable systems with{" "}
          <span className="text-blue-400 font-semibold">Java</span> and{" "}
          <span className="text-green-400 font-semibold">Spring Boot</span>,
          while crafting engaging user experiences with{" "}
          <span className="text-cyan-400 font-semibold">React</span>, gives me a
          strong sense of purpose.
          <br />
          <br />I constantly challenge myself to learn new technologies, improve
          my problem-solving skills, and write cleaner, more efficient code. My
          goal is to grow as a{" "}
          <span className="text-purple-400 font-semibold">
            full-stack developer
          </span>{" "}
          and contribute to impactful projects that solve real problems.
        </p>
      </div>

      {/* IMAGE + ICONS */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative flex justify-center items-center">
          {/* Image */}
          <motion.div
            className="z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ImageCard />
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute top-2 sm:top-5 flex justify-between w-full px-4 sm:px-6 md:px-10 text-2xl sm:text-3xl md:text-5xl text-[#bcbcbc] z-9999">
            <FloatingIcon Icon={LiaJava} yValue={-20} duration={2.5} />
            <FloatingIcon Icon={FaReact} yValue={-30} duration={2} />
            <FloatingIcon Icon={SiSpring} yValue={-16} duration={3} />
            <FloatingIcon Icon={SiSpringboot} yValue={-12} duration={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motivation;
