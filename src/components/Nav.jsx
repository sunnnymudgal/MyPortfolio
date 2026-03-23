import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <nav className="w-full bg-secondary text-primary px-5 py-4 fixed top-0 left-0 z-50 backdrop-blur-md">
          <div className="flex justify-between items-center">
            
            {/* LOGO / NAME */}
            <div className="text-lg font-semibold">Sunny</div>

            {/* MENU BUTTON */}
            <div className="text-2xl cursor-pointer">
              {menuOpen ? (
                <HiX
                  onClick={() => setMenuOpen(false)}
                  className="transition-transform duration-300 hover:rotate-90"
                />
              ) : (
                <HiMenu
                  onClick={() => setMenuOpen(true)}
                  className="transition-transform duration-300 hover:scale-110"
                />
              )}
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-5 flex flex-col gap-6 text-center text-lg bg-secondary py-6 rounded-xl shadow-lg"
              >
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <div className="cursor-pointer hover:text-gray-400 transition">
                    HOME
                  </div>
                </Link>

                <Link to="/work" onClick={() => setMenuOpen(false)}>
                  <div className="cursor-pointer hover:text-gray-400 transition">
                    WORKS
                  </div>
                </Link>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-6 text-2xl mt-4">
                  <a href="https://www.linkedin.com/in/sunny-mudgal/">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/sunnnymudgal">
                    <FaGithub />
                  </a>
                  <a href="mailto:sunnyxmudgal@gmail.com">
                    <CiMail />
                  </a>
                  <a href="https://x.com/sunnnymudgal">
                    <FaXTwitter />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      <div className="hidden md:flex flex-col justify-between items-start h-screen w-fit py-2 text-primary px-3">
        
        {/* MENU LINKS */}
        <div className="flex flex-col mt-5 gap-5">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg cursor-pointer"
            >
              HOME
            </motion.div>
          </Link>

          <Link to="/work">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg cursor-pointer"
            >
              WORKS
            </motion.div>
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="text-3xl flex flex-col gap-4 pb-20">
          <a href="https://www.linkedin.com/in/sunny-mudgal/">
            <FaLinkedin />
          </a>

          <a href="https://github.com/sunnnymudgal">
            <FaGithub />
          </a>

          <a href="mailto:sunnyxmudgal@gmail.com">
            <CiMail />
          </a>

          <a href="https://x.com/sunnnymudgal">
            <FaXTwitter />
          </a>
        </div>

        {/* FOOTER */}
        <div className="flex items-center gap-1 text-xs">
          <FaRegCopyright />
          SunnyMudgal
        </div>
      </div>
    </>
  );
}

export default Nav;