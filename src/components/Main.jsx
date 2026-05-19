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
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary text-primary px-6 md:px-16 lg:px-24 py-20 md:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] left-[20%] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="flex flex-col justify-between min-h-screen">
        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-center flex-1">
          {/* LEFT */}
          <div className="max-w-3xl">
            {/* TOP TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.3em] text-xs md:text-sm mb-6 text-gray-400"
            >
              Java Full Stack Developer
            </motion.p>

            {/* NAME */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {/* FIRST NAME */}
              <h1 className="flex flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest font-[majormono] leading-none">
                {firstName.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className="mr-1"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              {/* LAST NAME */}
              <h1 className="flex flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest font-[majormono] leading-none">
                {lastName.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className="mr-1"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed"
            >
              Crafting scalable backend systems and immersive frontend
              experiences using Java, Spring Boot, React, and modern web
              technologies.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              {/* DOWNLOAD CV */}
              <motion.a
                href="/Sunny_Mudgal_CV.pdf"
                download
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></span>

                <FiDownload className="text-lg relative z-10" />

                <span className="relative z-10 font-medium tracking-wide">
                  Download CV
                </span>
              </motion.a>

              {/* CONTACT BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {/* FLOATING GLOW */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* OUTER GLOW */}
              <div className="absolute inset-0 bg-pink-400 blur-[80px] opacity-20 rounded-full"></div>

              {/* MAIN CIRCLE */}
              <div className="w-52 h-52 md:w-72 md:h-72 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    Building
                  </h2>

                  <p className="text-gray-400 mt-2 text-sm md:text-base">
                    Modern Digital Experiences
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ABOUT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 md:mt-28 max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
            About Me
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
            Passionate about creating clean UI, powerful backend systems, and
            memorable user experiences.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

export default Main;