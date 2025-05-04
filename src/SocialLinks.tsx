import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ramprasad94",
    icon: (
      <svg width="32" height="32" fill="#0A66C2" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
      </svg>
    )
  },
  {
    name: "AWS Badges",
    url: "https://www.credly.com/users/ramprasad94",
    icon: (
      <svg width="32" height="32" fill="#FF9900" viewBox="0 0 32 32">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16c0-8.837-7.163-16-16-16zm0 29.091c-7.236 0-13.091-5.855-13.091-13.091S8.764 2.909 16 2.909 29.091 8.764 29.091 16 23.236 29.091 16 29.091z"/>
        <path d="M23.273 10.182l-7.273 7.273-3.273-3.273-2.182 2.182 5.455 5.455 9.455-9.455z"/>
      </svg>
    )
  }
];

const SocialLinks: React.FC = () => (
  <section
    className="social-section"
    style={{
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      color: "#fff",
      borderRadius: "1rem",
      padding: "2rem",
      margin: "2rem 0",
      boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      textAlign: "center"
    }}
  >
    <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#90caf9" }}>
      Social Profiles
    </h2>
    <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem" }}>
      {socialLinks.map((link, idx) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none"
          }}
        >
          {link.icon}
          <span style={{ color: "#fff", marginTop: "0.5rem", fontWeight: 500 }}>{link.name}</span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default SocialLinks;
