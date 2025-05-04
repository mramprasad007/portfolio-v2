import React, { useState } from "react";

const TopNav: React.FC<{ selected: string; onSelect: (section: string) => void }> = ({ selected, onSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["About", "Skills", "Experience", "Education", "Certifications", "SocialLinks"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelect = (section: string) => {
    onSelect(section);
    setMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>RP</div>
      <button style={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </button>
      {menuOpen && (
        <nav style={styles.navMenu}>
          <ul style={styles.navList}>
            {sections.map((section) => (
              <li
                key={section}
                style={{
                  ...styles.navItem,
                  ...(selected === section ? styles.navItemSelected : {}),
                }}
                onClick={() => handleSelect(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    boxSizing: "border-box",
    zIndex: 1000,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#6200ee",
    userSelect: "none",
  },
  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "20px",
    width: "25px",
    padding: 0,
  },
  bar: {
    height: "3px",
    width: "100%",
    backgroundColor: "#333",
    borderRadius: "2px",
  },
  navMenu: {
    position: "absolute",
    top: "60px",
    right: "1rem",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1001,
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: "0.5rem 1rem",
  },
  navItem: {
    padding: "0.5rem 0",
    cursor: "pointer",
    color: "#333",
    userSelect: "none",
  },
  navItemSelected: {
    fontWeight: "bold",
    color: "#6200ee",
  },
};

export default TopNav;
