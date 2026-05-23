import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

/* ================= ANIMATION ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/* ================= PROJECT CARD ================= */

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
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        w-full
        h-full
        min-h-[600px]
        max-w-[540px]
        rounded-[2rem]
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        flex
        flex-col
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.5,
          }}
          src={image}
          alt={title}
          className="w-full h-[280px] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        {/* GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>

          <p className="text-gray-300 mt-2">
            {description}
          </p>
        </div>
      </div>

      {/* DETAILS */}
      <div className="p-6 flex flex-col flex-1">

        {/* DESCRIPTION */}
        <p className="text-gray-400 leading-relaxed">
          {dis}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mt-6">
          {tech.map((item, index) => (
            <div
              key={index}
              className="
                px-4
                py-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                text-sm
              "
            >
              <p className="text-white font-medium">
                {item.name}
              </p>

              <p className="text-gray-500 text-xs mt-1">
                {item.type}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM ACTIONS */}
        <div className="flex items-center justify-between mt-auto pt-8">

          {/* STATUS */}
          <span
            className={`
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              text-xs
              font-semibold
              tracking-wide
              ${
                status === "LIVE"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
              }
            `}
          >
            {status}
          </span>

          {/* LINKS */}
          <div className="flex gap-3">

            {/* GITHUB */}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="
                w-11
                h-11
                rounded-2xl
                bg-white/[0.04]
                backdrop-blur-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                text-white
                hover:bg-white/10
                transition
              "
            >
              <FaGithub />
            </a>

            {/* LIVE */}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/[0.04]
                  backdrop-blur-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= WORK PAGE ================= */

function WorkPage() {
  return (
    <section className="relative min-h-screen bg-secondary px-6 md:px-16 py-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
          Selected Work
        </h2>

        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          A collection of projects showcasing my experience in
          full-stack development, scalable backend systems,
          and modern frontend interfaces.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-stretch
          max-w-7xl
          mx-auto
        "
      >

        {/* BUSINESS PORTFOLIO */}
        <ProjectCard
          title="Business Portfolio"
          description="Modern branding platform"
          image="/images/tbb.png"
          github="https://github.com/sunnnymudgal/TheBrandBird"
          live="https://thebrandbird.vercel.app/"
          status="LIVE"
          dis="A sleek business portfolio platform designed to create strong digital branding and immersive user experiences."
          tech={[
            { name: "React", type: "Frontend" },
            { name: "Framer Motion", type: "Animation" },
            { name: "ExpressJS", type: "Backend" },
          ]}
        />

        {/* FINANCE DASHBOARD */}
        <ProjectCard
          title="Finance Dashboard"
          description="Advanced finance tracking and analytics platform"
          image="/images/fd.png"
          github="https://github.com/sunnnymudgal/Finance-Dashboard"
          status="BACKEND PROJECT"
          // live="https://finance-dashboard-n6ak.onrender.com/"
          dis="A modern finance dashboard for tracking income, expenses, analytics, PDF reports, category insights, smart filtering, charts, and transaction history with a premium UI."
          tech={[
            { name: "Spring Boot", type: "Backend" },
            { name: "Thymeleaf", type: "Frontend" },
            { name: "MySQL", type: "Database" },
            { name: "TailwindCSS", type: "UI" },
          ]}
        />

        {/* PRODUCT SHOWCASE */}
        <ProjectCard
          title="Product Showcase"
          description="Interactive product concept design"
          image="/images/showcase.png"
          github="https://github.com/sunnnymudgal/ProductShowCase"
          live="https://showcase-concept.vercel.app/"
          status="LIVE"
          dis="A futuristic product showcase experience featuring premium UI design, interactive transitions, and immersive layout concepts inspired by modern product marketing websites."
          tech={[
            { name: "React", type: "Frontend" },
            { name: "Framer Motion", type: "Animation" },
            { name: "Tailwind CSS", type: "Styling" },
          ]}
        />

        {/* BLACK DRIP */}
        <ProjectCard
          title="Black Drip Coffee"
          description="Modern coffee landing experience"
          image="/images/blackdrip.png"
          github="https://github.com/sunnnymudgal/blackdripcoffee"
          live="https://blackdripcoffee.vercel.app/"
          dis="A cinematic coffee brand landing page focused on typography, immersive product presentation, smooth interactions, and premium visual storytelling."
          tech={[
            { name: "React", type: "Frontend" },
            { name: "Framer Motion", type: "Animation" },
            { name: "Tailwind CSS", type: "Styling" },
          ]}
        />

        {/* EMS */}
        <ProjectCard
          title="EMS"
          description="Enterprise employee management system"
          image="/images/ems.png"
          github="https://github.com/sunnnymudgal/thebrandbird-ems"
          live={null}
          status="SPRING BOOT"
          dis="A modern employee management platform built using Java Spring Boot with scalable backend architecture, authentication, dashboard analytics, and AWS EC2 deployment."
          tech={[
            { name: "Java", type: "Backend" },
            { name: "Spring Boot", type: "Framework" },
            { name: "MySQL", type: "Database" },
            { name: "AWS EC2", type: "Deployment" },
          ]}
        />

        {/* BLUEBIRD */}
        <ProjectCard
          title="BlueBird E-Commerce"
          description="Modern shopping experience"
          image="/images/bbe.png"
          github="https://github.com/sunnnymudgal/BlueBird"
          live={null}
          status="BACKEND PROJECT"
          dis="A scalable e-commerce platform focused on seamless shopping experience, secure backend systems, and modern UI."
          tech={[
            { name: "Java", type: "Core" },
            { name: "Spring Boot", type: "Backend" },
            { name: "MySQL", type: "Database" },
          ]}
        />

        {/* AI EVENT */}
        <ProjectCard
          title="AI Event Planner"
          description="Smart AI event recommendations"
          image="/images/aiec.png"
          github="https://github.com/sunnnymudgal/ai-event-concierge"
          live="https://ai-event-concierge-blue.vercel.app/"
          status="LIVE"
          dis="An intelligent event planning platform that leverages AI to recommend personalized events and experiences."
          tech={[
            { name: "React", type: "Frontend" },
            { name: "ExpressJS", type: "Backend" },
            { name: "MongoDB", type: "Database" },
          ]}
        />
      </motion.div>

      {/* FOOTER */}
      <Footer />
    </section>
  );
}

export default WorkPage;