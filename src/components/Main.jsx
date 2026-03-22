import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
function Main() {
  const firstName = "SUNNY";
  const lastName = "MUDGAL";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const letter = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easein" },
    },
  };

  return (
    <div className="bg-secondary text-primary min-h-screen w-full px-6 md:px-16 lg:px-24 py-20 md:py-25">
      <div className="flex flex-col justify-between h-full">
        {/* NAME */}
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* SUNNY */}
          <h1 className="flex text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest font-[majormono]">
            {firstName.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h1>

          {/* MUDGAL */}
          <h1 className="flex text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest font-[majormono]">
            {lastName.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-sm sm:text-base md:text-lg tracking-wide"
          >
            Full-Stack Developer
          </motion.p>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-10 md:gap-20 mt-16"
        >
          <div className="md:w-1/2">
            <motion.a
              href="/Sunny_Mudgal_CV.pdf"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl 
      bg-white/10 backdrop-blur-md border border-white/20 
      text-white font-medium shadow-lg z-9999 overflow-hidden"
            >
              {/* Glow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r  from-blue-400/20 to-cyan-400/20 opacity-0 hover:opacity-100 transition duration-300" />
              <FiDownload className="text-lg" />
              Download CV
            </motion.a>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl">ABOUT</h2>
            <div className="w-24 h-[2px] bg-primary my-2 text-2xl"></div>
            <p>
              A full-stack developer skilled in Java, Spring Boot, and frontend
              technologies like React and JavaScript. I love creating robust
              backends and dynamic interfaces, always eager to take on new
              challenges and collaborate on exciting projects!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
