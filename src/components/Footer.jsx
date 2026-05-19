import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/sunnnymudgal",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sunny-mudgal/",
    },
    {
      icon: <FaXTwitter />,
      link: "https://x.com/sunnnymudgal",
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] w-[250px] h-[250px] bg-pink-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute right-[10%] bottom-[10%] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid md:grid-cols-3 gap-14">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
            Sunny Mudgal
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-sm">
            Full Stack Developer focused on crafting scalable backend systems
            and immersive frontend experiences using Java, Spring Boot, and
            React.
          </p>

          {/* CV BUTTON */}
          <motion.a
            href="/Sunny_Mudgal_CV.pdf"
            download
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              mt-6
              px-6
              py-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              overflow-hidden
            "
          >
            {/* GLOW */}
            <div className="absolute  inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <FiDownload className="relative z-10 text-[#cdcdcd]" />

            <span className="relative z-10 text-sm tracking-wide text-[#cdcdcd]">
              Download CV
            </span>
          </motion.a>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-white font-medium tracking-wide mb-5">
            Navigation
          </h3>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <Link
              to="/"
              className="hover:text-white transition duration-300 w-fit"
            >
              Home
            </Link>

            <Link
              to="/work"
              className="hover:text-white transition duration-300 w-fit"
            >
              Works
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-white font-medium tracking-wide mb-5">
            Connect
          </h3>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.12,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                  group
                  relative
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  overflow-hidden
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* ICON */}
                <span className="relative z-10 text-lg">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Let’s build something modern, scalable, and visually unforgettable.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sunny Mudgal. All rights reserved.
      </div>
    </footer>
  );
}