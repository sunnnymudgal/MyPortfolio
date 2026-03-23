import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg backdrop-blur-md text-gray-300">
      
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid md:grid-cols-3 gap-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-white">Sunny Mudgal</h2>
          <p className="mt-3 text-sm text-gray-400">
            Full Stack Developer (Java + React) building scalable backends and
            beautiful user interfaces.
          </p>

          {/* CV BUTTON */}
          <motion.a
            href="/Sunny_Mudgal_CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-xl border border-white transition text-white text-sm"
          >
            <FiDownload />
            Download CV
          </motion.a>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <Link to="/">Home</Link>
           <Link to="/work">Works</Link>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex gap-4 text-xl">
            <a href="https://github.com/" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/" target="_blank" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Let’s build something amazing 
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Sunny Mudgal. All rights reserved.
      </div>
    </footer>
  );
}