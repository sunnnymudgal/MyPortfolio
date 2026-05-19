import React from "react";
import { LiaJava } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { SiSpringboot, SiSpring } from "react-icons/si";
import { motion } from "framer-motion";

function FloatingIcon({ Icon, delay }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="
        w-14
        h-14
        md:w-16
        md:h-16
        rounded-2xl
        bg-white/[0.04]
        backdrop-blur-xl
        border
        border-white/10
        flex
        items-center
        justify-center
        text-2xl
        md:text-3xl
        text-white/80
        shadow-2xl
      "
    >
      <Icon />
    </motion.div>
  );
}

function Motivation() {
  return (
    <section className="relative bg-secondary text-primary px-6 md:px-16 lg:px-24 py-24 overflow-hidden">
      {/* BACKGROUND LIGHT */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE VISUAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">

            {/* MAIN GLASS CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="
                relative
                w-[240px]
                h-[240px]
                md:w-[300px]
                md:h-[300px]
                rounded-[3rem]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-3xl
                overflow-hidden
                flex
                items-center
                justify-center
              "
            >
              {/* INNER LIGHT */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10"></div>

              {/* CENTER CONTENT */}
              <div className="relative z-10 text-center px-8">
                <h2 className="text-3xl md:text-5xl font-semibold text-white">
                  Java
                </h2>

                <p className="mt-3 text-gray-400 text-sm md:text-base">
                  Full Stack Development
                </p>
              </div>
            </motion.div>

            {/* FLOATING ICONS */}

            {/* JAVA */}
            <div className="absolute top-2 left-10">
              <FloatingIcon Icon={LiaJava} delay={0} />
            </div>

            {/* REACT */}
            <div className="absolute top-12 right-4">
              <FloatingIcon Icon={FaReact} delay={0.5} />
            </div>

            {/* SPRING */}
            <div className="absolute bottom-16 left-0">
              <FloatingIcon Icon={SiSpring} delay={1} />
            </div>

            {/* SPRINGBOOT */}
            <div className="absolute bottom-2 right-10">
              <FloatingIcon Icon={SiSpringboot} delay={1.5} />
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-pink-500/10 blur-[100px] rounded-full scale-125 -z-10"></div>
          </div>
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* SMALL LABEL */}
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
            Motivation
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Creating scalable backend systems and modern frontend experiences.
          </h2>

          {/* TEXT */}
          <p className="mt-8 text-gray-300 leading-relaxed text-base md:text-lg">
            I’m passionate about building applications that combine clean
            architecture, performance, and engaging user experiences.
            Using{" "}
            <span className="text-orange-400 font-medium">
              Java
            </span>,{" "}
            <span className="text-green-400 font-medium">
              Spring Boot
            </span>,{" "}
            and{" "}
            <span className="text-cyan-400 font-medium">
              React
            </span>,
            I enjoy transforming ideas into scalable digital products.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Constant learning, problem solving, and building impactful projects
            motivate me to continuously grow as a full-stack developer.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 mt-10">
            <div>
              <h3 className="text-3xl font-semibold text-white">
                Full Stack
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Development
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white">
                Modern UI
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Experiences
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white">
                Scalable
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Backend Systems
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Motivation;