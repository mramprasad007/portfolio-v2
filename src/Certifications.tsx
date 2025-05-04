import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "AWS Certified Solution Architect Professional"
  },
  {
    name: "AWS Certified DevOps Professional"
  },
  {
    name: "AWS Certified Machine Learning Specialty"
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
};

const Certifications: React.FC = () => (
  <section
    className="certifications-section"
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
      Certifications
    </h2>
    <div>
      {certifications.map((cert, idx) => (
        <motion.div
          key={cert.name}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{
            marginBottom: "1.2rem",
            padding: "1.2rem",
            borderRadius: "1rem",
            background: "rgba(33, 37, 41, 0.85)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
          }}
        >
          <h3 style={{ margin: 0 }}>{cert.name}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certifications;
