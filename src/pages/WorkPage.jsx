import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

/* ================== ANIMATION VARIANTS ================== */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

/* ================== PROJECT CARD ================== */

function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  tech = [],
  status = "LIVE",
  dis,
}) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[#f7f7f7da] rounded-[30px] p-4 w-full sm:w-[90%] md:w-full max-w-[470px] shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative rounded-[25px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/30 hover:bg-white/30 transition"
          >
            <FaGithub />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/30 hover:bg-white/30 transition"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-4 bg-[#ffffff] rounded-[20px] p-4 flex justify-between items-center">
        <div className="p-2">
          <h4 className="text-sm font-semibold text-gray-700">
            Description
          </h4>

          <p className="text-xs text-gray-400">{dis}</p>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
            {tech.map((item, index) => (
              <div key={index}>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-gray-400">{item.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATUS */}
        <div className="w-60 h-[70px] bg-white rounded-2xl px-2 flex items-center justify-center shadow-sm">
          <span
            className={`text-xs font-semibold ${
              status === "LIVE" ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ================== WORK PAGE ================== */

function WorkPage() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-10">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Selected Work
        </h2>

        <p className="text-gray-300 leading-tight max-w-2xl text-base sm:text-lg md:text-xl">
          A selection of projects that highlight my journey as a{" "}
          <span className="text-purple-400 font-semibold">
            full-stack developer
          </span>
          . From designing{" "}
          <span className="text-blue-400 font-medium">
            robust backend systems
          </span>{" "}
          to crafting{" "}
          <span className="text-cyan-400 font-medium">
            smooth, interactive frontends.
          </span>
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:px-30 lg:grid-cols-2 gap-8 place-items-center"
      >
        <ProjectCard
          title="AI Event Planner"
          description="Smart event recommendations"
          image="/images/aiec.png"
          github="https://github.com/sunnnymudgal/ai-event-concierge"
          live="https://ai-event-concierge-blue.vercel.app/"
          dis="An intelligent event planning system that leverages AI to recommend personalized events."
          tech={[
            { name: "React", type: "Frontend" },
            { name: "ExpressJS", type: "Backend" },
            { name: "MongoDB", type: "Database" },
          ]}
        />

        <ProjectCard
          title="Business Portfolio"
          description="Seamless design experience"
          image="/images/tbb.png"
          github="https://github.com/sunnnymudgal/TheBrandBird"
          live="https://thebrandbird.vercel.app/"
          dis="A modern branding platform to build strong digital identity."
          tech={[
            { name: "React", type: "Frontend" },
            { name: "ExpressJS", type: "Backend" },
          ]}
        />

        <ProjectCard
          title="E-Commerce"
          description="Shopping"
          image="/images/bbe.png"
          github="https://github.com/sunnnymudgal/BlueBird"
          live="#"
          status="GITHUB"
          dis="An e-commerce clothing platform for seamless shopping experience."
          tech={[
            { name: "Java", type: "Core" },
            { name: "Spring Boot", type: "Backend" },
            { name: "MySQL", type: "Database" },
          ]}
        />
      </motion.div>

      <Footer />
    </div>
  );
}

export default WorkPage;