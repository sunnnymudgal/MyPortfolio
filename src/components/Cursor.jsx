import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  const hoverTimeout = useRef(null);

  useEffect(() => {
    // Mouse move
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTrail((prev) => [
        ...prev.slice(-8),
        { x: e.clientX, y: e.clientY },
      ]);
    };

    // Hover detection (React-safe)
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        clearTimeout(hoverTimeout.current);
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        hoverTimeout.current = setTimeout(() => {
          setIsHovering(false);
        }, 50); // small delay = no flicker
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* 🔥 Trail */}
      {trail.map((dot, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 pointer-events-none z-[9998] hover:z-0 rounded-full"
          animate={{
            x: dot.x - 6,
            y: dot.y - 6,
            opacity: 0.2,
            scale: 0.6,
            
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: "12px",
            height: "12px",
            background:
              "radial-gradient(circle, #cdb4db, #ffc8dd, #bde0fe)",
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* 🎯 Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none hover:z-0"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 2 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
             zIndex: isHovering ? 50 : 9999,
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(circle, #ffafcc, #a2d2ff)"
            : "linear-gradient(135deg, #cdb4db, #ffc8dd)",
          boxShadow: "0 0 15px rgba(255, 200, 221, 0.6)",
          filter: "blur(0.5px)",
        }}
      />
    </>
  );
};

export default Cursor;