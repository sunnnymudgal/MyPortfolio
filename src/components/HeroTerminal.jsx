import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  {
    type: "comment",
    text: "// portfolio.js",
  },

  {
    type: "code",
    parts: [
      { c: "keyword", t: "const " },
      { c: "var", t: "developer" },
      { c: "plain", t: " = {" },
    ],
  },

  {
    type: "code",
    indent: true,
    parts: [
      { c: "string", t: '"name"' },
      { c: "plain", t: ": " },
      { c: "value", t: '"Sunny Mudgal"' },
      { c: "plain", t: "," },
    ],
  },

  {
    type: "code",
    indent: true,
    parts: [
      { c: "string", t: '"role"' },
      { c: "plain", t: ": " },
      { c: "value", t: '"Full Stack Java Developer"' },
      { c: "plain", t: "," },
    ],
  },

  {
    type: "code",
    indent: true,
    parts: [
      { c: "string", t: '"stack"' },
      { c: "plain", t: ": " },
      {
        c: "value",
        t: '["React", "Spring Boot", "Java"]',
      },
      { c: "plain", t: "," },
    ],
  },

  {
    type: "code",
    indent: true,
    parts: [
      { c: "string", t: '"status"' },
      { c: "plain", t: ": " },
      { c: "value", t: '"Open To Work"' },
    ],
  },

  {
    type: "code",
    parts: [{ c: "plain", t: "}" }],
  },
];

const colorMap = {
  comment: "#5B6178",

  keyword: "#C792EA",

  var: "#82AAFF",

  string: "#EBCB8B",

  value: "#A5D6FF",

  plain: "#D8DEE9",
};

function TypingLine({ parts, delay, indent }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);

    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      style={{
        fontFamily: "'JetBrains Mono', monospace",

        fontSize: 14,

        lineHeight: 2,

        paddingLeft: indent ? 22 : 0,
      }}
    >
      {parts.map((p, i) => (
        <span
          key={i}
          style={{
            color: colorMap[p.c],
          }}
        >
          {p.t}
        </span>
      ))}
    </motion.div>
  );
}

export default function HeroTerminal() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowCursor(true);
    }, lines.length * 200 + 400);

    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      style={{
        width: "100%",
        maxWidth: 520,
      }}
    >
      <motion.div
        whileHover={{
          y: -4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
        }}
        style={{
          background: "#111827",

          border: "1px solid rgba(158,168,216,0.08)",

          borderRadius: 24,

          overflow: "hidden",

          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
        }}
      >
        {/* TOPBAR */}
        <div
          style={{
            background: "#151D31",

            borderBottom: "1px solid rgba(158,168,216,0.06)",

            padding: "14px 18px",

            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",
          }}
        >
          {/* DOTS */}
          <div
            style={{
              display: "flex",
              gap: 8,
            }}
          >
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <div
                key={c}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
          </div>

          {/* FILE */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",

              fontSize: 12,

              color: "#66708F",
            }}
          >
            ~/portfolio/me.js
          </div>

          {/* STATUS */}
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#9EA8D8",
            }}
          />
        </div>

        {/* BODY */}
        <div
          style={{
            padding: "26px 24px 28px",

            background: "#0B1120",
          }}
        >
          {lines.map((line, i) =>
            line.type === "comment" ? (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: i * 0.15,
                }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",

                  fontSize: 14,

                  lineHeight: 2,

                  color: colorMap.comment,
                }}
              >
                {line.text}
              </motion.div>
            ) : (
              <TypingLine
                key={i}
                parts={line.parts}
                indent={line.indent}
                delay={i * 180 + 150}
              />
            )
          )}

          {/* CURSOR */}
          {showCursor && (
            <div
              style={{
                marginTop: 10,

                display: "flex",

                alignItems: "center",

                gap: 8,

                color: "#5B6178",

                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span>$</span>

              <motion.div
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                }}
                style={{
                  width: 8,
                  height: 16,
                  borderRadius: 2,
                  background: "#9EA8D8",
                }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}