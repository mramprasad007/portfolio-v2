import React from "react";

const About: React.FC = () => {
  return (
    <section className="fade-in" style={styles.container}>
      <h1 style={styles.title}>Principal Software Engineer</h1>
      <p style={styles.subtitle}>I design and code beautifully simple things, and I love what I do.</p>
      <img
        src="https://avatars.githubusercontent.com/u/583231?v=4"
        alt="Ram Prasad"
        style={styles.avatar}
      />
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "2rem 1rem",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#111",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#444",
  },
  avatar: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto",
  },
};

export default About;
