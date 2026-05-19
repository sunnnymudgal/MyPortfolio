import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setIsHovering(false);
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
      {/* OUTER GLOW */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
          mass: 0.5,
        }}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(255,182,193,0.18), rgba(125,211,252,0.08), transparent)",
          filter: "blur(10px)",
        }}
      />

      {/* MAIN DOT */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "999px",
          background: isHovering
            ? "linear-gradient(135deg, #f9a8d4, #7dd3fc)"
            : "#ffffff",
          boxShadow: isHovering
            ? "0 0 20px rgba(244,114,182,0.45)"
            : "0 0 12px rgba(255,255,255,0.35)",
        }}
      />
    </>
  );
};

export default Cursor;