import React, { useState } from "react";
import "./App.css";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import SocialLinks from "./SocialLinks";
import TopNav from "./TopNav";

function App() {
  const [selected, setSelected] = useState("About");

  const renderSection = () => {
    switch (selected) {
      case "About":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Certifications":
        return <Certifications />;
      case "SocialLinks":
        return <SocialLinks />;
      default:
        return <About />;
    }
  };

  return (
      <div style={{ 
        ...styles.appContainer, 
        fontFamily: "var(--font-body)", 
        backgroundColor: "var(--color-bg)", 
        color: "var(--color-text)" 
      }}>
      <TopNav selected={selected} onSelect={setSelected} />
      <main className="fade-in" style={styles.mainContent}>{renderSection()}</main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    fontFamily: "Inter, Arial, sans-serif",
    height: "100vh",
    backgroundColor: "#fff",
    color: "#222",
    paddingTop: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainContent: {
    width: "100%",
    maxWidth: "600px",
    padding: "2rem 1rem",
    overflowY: "auto",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default App;
