import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 5 },
  { name: "HTML5", level: 5 },
  { name: "CSS3", level: 5 },
  { name: "JavaScript", level: 5 },
  { name: "AWS Solution Architecture", level: 5 },
  { name: "Express.js", level: 5 },
  { name: "Node.js", level: 4 },
  { name: "SQL", level: 4 }
];

const barVariants = {
  initial: { width: 0 },
  animate: (level: number) => ({
    width: `${level * 20}%`,
    transition: { duration: 0.8, delay: level * 0.1 }
  })
};

const Skills: React.FC = () => (
  <section
    className="skills-section"
    style={{
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      color: "#fff",
      borderRadius: "1rem",
      padding: "2rem",
      margin: "2rem 0",
      boxShadow: "0 4px 24px rgba(0,0,0,0.2)"
    }}
  >
    <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#90caf9" }}>
      Skills
    </h2>
    <div>
      {skills.map((skill, idx) => (
        <div key={skill.name} style={{ marginBottom: "1.2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 500 }}>{skill.name}</span>
            <span>
              {"★".repeat(skill.level)}
              {"☆".repeat(5 - skill.level)}
            </span>
          </div>
          <motion.div
            custom={skill.level}
            initial="initial"
            animate="animate"
            variants={barVariants}
            style={{
              height: "8px",
              borderRadius: "4px",
              background: "#90caf9",
              marginTop: "0.3rem",
              marginBottom: "0.2rem"
            }}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
