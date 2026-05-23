import { motion } from "framer-motion";

const ring1Pills = [
  { label: "React", angle: 270 },
  { label: "Spring Boot", angle: 0 },
  { label: "Java", angle: 90 },
  { label: "MySQL", angle: 180 },
];

const ring2Pills = [
  { label: "Hibernate", angle: 315 },
  { label: "Tailwind", angle: 45 },
  { label: "REST APIs", angle: 135 },
  { label: "Git", angle: 225 },
];

function polarToXY(angle, radius) {
  const rad = (angle * Math.PI) / 180;

  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

function OrbitPill({
  label,
  angle,
  radius,
  duration,
  reverse,
  delay = 0,
  bright = true,
}) {
  return (
    <motion.div
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        animate={{
          rotate: reverse ? 360 : -360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
        style={{
          position: "absolute",
        }}
      >
        <div
          style={{
            position: "absolute",

            transform: `translate(${polarToXY(angle, radius).x}px, ${
              polarToXY(angle, radius).y
            }px) translate(-50%, -50%)`,

            background: bright
              ? "rgba(17,24,39,0.95)"
              : "rgba(11,17,32,0.9)",

            border: bright
              ? "1px solid rgba(158,168,216,0.10)"
              : "1px solid rgba(255,255,255,0.04)",

            borderRadius: 999,

            padding: "clamp(6px, 1vw, 10px) clamp(12px, 2vw, 18px)",

            fontSize: "clamp(10px, 1.2vw, 12px)",

            fontWeight: 500,

            color: bright ? "#B8C0E9" : "#7C86B2",

            whiteSpace: "nowrap",

            fontFamily: "'DM Sans', sans-serif",

            letterSpacing: "0.04em",

            backdropFilter: "blur(12px)",

            boxShadow: bright
              ? "0 4px 20px rgba(0,0,0,0.18)"
              : "none",
          }}
        >
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroOrbit() {
  const size = "clamp(320px, 85vw, 520px)";

  return (
    <div
      style={{
        position: "relative",

        width: size,
        height: size,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        margin: "0 auto",
      }}
    >
      {/* OUTER RING */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "1px solid rgba(158,168,216,0.08)",
        }}
      />

      {/* MIDDLE RING */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: "14%",
          borderRadius: "50%",
          border: "1px solid rgba(158,168,216,0.12)",
        }}
      />

      {/* INNER RING */}
      <div
        style={{
          position: "absolute",
          inset: "28%",
          borderRadius: "50%",
          border: "1px solid rgba(158,168,216,0.06)",
        }}
      />

      {/* RING 1 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",

            width: "62%",
            height: "62%",
          }}
        >
          {ring1Pills.map((p) => (
            <OrbitPill
              key={p.label}
              label={p.label}
              angle={p.angle}
              radius={window.innerWidth < 768 ? 85 : 130}
              duration={20}
              bright
            />
          ))}
        </div>
      </div>

      {/* RING 2 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",

            width: "90%",
            height: "90%",
          }}
        >
          {ring2Pills.map((p) => (
            <OrbitPill
              key={p.label}
              label={p.label}
              angle={p.angle}
              radius={window.innerWidth < 768 ? 135 : 190}
              duration={32}
              reverse
              bright={false}
            />
          ))}
        </div>
      </div>

      {/* CENTER CARD */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        whileHover={{
          y: -4,
        }}
        style={{
          width: "clamp(100px, 24vw, 140px)",
          height: "clamp(100px, 24vw, 140px)",

          borderRadius: "50%",

          background: "rgba(17,24,39,0.98)",

          border: "1px solid rgba(158,168,216,0.10)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexDirection: "column",

          position: "relative",

          zIndex: 20,

          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        {/* INNER */}
        <div
          style={{
            position: "absolute",

            inset: 8,

            borderRadius: "50%",

            border: "1px solid rgba(255,255,255,0.03)",
          }}
        />

      
        {/* LABEL */}
        <div
          style={{
            marginTop: 4,

            fontSize: "clamp(9px, 1vw, 11px)",

            color: "#7C86B2",

            letterSpacing: "0.15em",

            textTransform: "uppercase",

            fontFamily: "'DM Mono', monospace",
          }}
        >
          Developer
        </div>
      </motion.div>
    </div>
  );
}