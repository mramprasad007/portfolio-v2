import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "St. Joseph's College of Engineering, Chennai",
    period: "May 2015"
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
};

const Education: React.FC = () => (
  <section
    className="education-section"
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
      Education
    </h2>
    <div>
      {education.map((edu, idx) => (
        <motion.div
          key={edu.degree + edu.institution}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{
            marginBottom: "1.5rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            background: "rgba(33, 37, 41, 0.85)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
          }}
        >
          <h3 style={{ margin: 0 }}>{edu.degree}</h3>
          <div style={{ color: "#bdbdbd" }}>{edu.institution}</div>
          <div style={{ color: "#90caf9", fontWeight: 500 }}>{edu.period}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;
