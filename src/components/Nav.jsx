import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <nav className="w-full bg-secondary text-primary px-5 md:px-10 py-4 fixed top-0 left-0 z-50 backdrop-blur-md">
          <div className="flex justify-between items-center max-md:items-end">
            {/* DESKTOP MENU */}
            <div className="hidden sm:flex gap-10 text-sm">
              <div>

              <Link to="/">
                <motion.a whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center gap-2 px-3 w-full py-1 justify-baseline rounded-2xl 
                    bg-white/10 backdrop-blur-md border border-white/20 
                    text-white font-medium shadow-lg z-9999 overflow-hidden"
                          >
                          
            
                <div className="cursor-pointer text-xl">HOME</div></motion.a>
              </Link>
            </div>
            <div>
             <Link to="/works">
                <motion.a
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center gap-2 px-3 w-full py-1 justify-baseline rounded-2xl 
                    bg-white/10 backdrop-blur-md border border-white/20 
                    text-white font-medium shadow-lg z-9999 overflow-hidden"
                          >
                          
            
                <div className="cursor-pointer text-xl">WORKS</div></motion.a>
              </Link>
            </div>
              {/* <div className="cursor-pointer hover:text-gray-400 transition">
                GALLERY
              </div> */}
            </div>

            {/* SOCIAL ICONS (DESKTOP) */}
            <div className="hidden sm:flex gap-5 text-2xl">
              <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaGithub className="cursor-pointer hover:scale-110 transition" />
              <CiMail className="cursor-pointer hover:scale-110 transition" />
              <FaXTwitter className="cursor-pointer hover:scale-110 transition" />
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="sm:hidden text-2xl cursor-pointer">
              {menuOpen ? (
                <HiX onClick={() => setMenuOpen(false)} />
              ) : (
                <HiMenu onClick={() => setMenuOpen(true)} />
              )}
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="sm:hidden mt-5 flex flex-col gap-6 text-center text-lg bg-secondary py-6 rounded-xl shadow-lg">
              <div className="cursor-pointer">HOME</div>
              <div className="cursor-pointer">WORKS</div>
              {/* <div className="cursor-pointer">GALLERY</div> */}

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-6 text-2xl mt-4">
                <FaLinkedin />
                <FaGithub />
                <CiMail />
                <FaXTwitter />
              </div>
            </div>
          )}
        </nav>
      </div>
      <div>
        <div className="flex flex-col justify-between items-start h-screen w-fit py-2  text-primary px-3 max-md:hidden">
          <div className=" flex flex-col justify-between mt-5 gap-5">
            <div>

              <Link to="/">
                <motion.a whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center gap-2 px-3 w-full py-1 justify-baseline rounded-2xl 
                    bg-white/10 backdrop-blur-md border border-white/20 
                    text-white font-medium shadow-lg z-9999 overflow-hidden"
                          >
                          
            
                <div className="cursor-pointer text-xl">HOME</div></motion.a>
              </Link>
            </div>
            <div>
             <Link to="/works">
                <motion.a
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center gap-2 px-3 w-full py-1 justify-baseline rounded-2xl 
                    bg-white/10 backdrop-blur-md border border-white/20 
                    text-white font-medium shadow-lg z-9999 overflow-hidden"
                          >
                          
            
                <div className="cursor-pointer text-xl">WORKS</div></motion.a>
              </Link>
            </div>
            {/* <div className="cursor-pointer">GALLERY</div> */}
          </div>
          <div className="text-4xl flex flex-col justify-between gap-3 h-1/2 pb-28">
           
              <a href="https://www.linkedin.com/in/sunny-mudgal/">
              
                  <FaLinkedin />
            
              </a>
          
        
              <a href="https://github.com/sunnnymudgal">
                {" "}
              
                  <FaGithub />
            
              </a>
               
              <a href="mailto:sunnyxmudgal@gmail.com">
                {" "}
              
                  <CiMail />
         
              </a>
        

            <a href="https://x.com/sunnnymudgal">
              <FaXTwitter />
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <FaRegCopyright />
            SunnyMudgal
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
