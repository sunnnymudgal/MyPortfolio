import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLinkedin, FaGithub, FaRegCopyright } from "react-icons/fa";

import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "WORKS",
      path: "/work",
    },
  ];

  const socials = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sunny-mudgal/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/sunnnymudgal",
    },
    {
      icon: <CiMail />,
      link: "mailto:sunnyxmudgal@gmail.com",
    },
    {
      icon: <FaXTwitter />,
      link: "https://x.com/sunnnymudgal",
    },
  ];

  return (
    <>
      {/* MOBILE NAV */}
      <div className="md:hidden">
        <nav className="fixed top-0 left-0 w-full z-50 px-5 py-4 bg-black/40 backdrop-blur-2xl border-b border-white/10">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg tracking-[0.2em] font-light"
            >
              SUNNY
            </motion.div>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6"
              >
                <div className="flex flex-col gap-5 text-center">
                  {navLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className={`py-3 rounded-2xl transition-all duration-300 ${
                          location.pathname === item.path
                            ? "bg-white text-black"
                            : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* SOCIALS */}
                <div className="flex justify-center gap-6 text-2xl mt-8 text-gray-300">
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{
                        scale: 1.2,
                        y: -2,
                      }}
                      className="hover:text-white transition"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-[110px] flex-col justify-between items-center py-6 z-50">
        {/* TOP LINKS */}
        <div className="flex flex-col gap-4">
          {navLinks.map((item, index) => (
            <Link key={index} to={item.path}>
              <motion.div
                whileHover={{
                  scale: 1.06,
                  x: 3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className={`
                  relative
                  px-5
                  py-3
                  rounded-2xl
                  backdrop-blur-xl
                  border
                  transition-all
                  duration-300
                  overflow-hidden
                  ${
                    location.pathname === item.path
                      ? "bg-white text-black border-white"
                      : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                  }
                `}
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>

                <span className="relative z-10 text-sm tracking-wider">
                  {item.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* SOCIALS */}
        <div className="flex flex-col items-center gap-5">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
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
        text-gray-300
        overflow-hidden
        transition-all
        duration-300
        hover:text-white
        hover:border-pink-400/30
      "
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* ICON */}
              <span className="relative z-10 text-xl">{social.icon}</span>
            </motion.a>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex items-center gap-1 text-[11px] text-gray-500 rotate-[-90deg] mb-10 whitespace-nowrap">
          <FaRegCopyright />
          Sunny Mudgal
        </div>
      </div>
    </>
  );
}

export default Nav;
