import React from "react";

const Sidebar: React.FC<{ onSelect: (section: string) => void; selected: string }> = ({ onSelect, selected }) => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="Profile"
          style={styles.avatar}
        />
        <h1 style={styles.name}>Ram Prasad</h1>
      </div>
      <nav>
        <ul style={styles.navList}>
          {["About", "Skills", "Experience", "Education", "Certifications", "SocialLinks"].map((section) => (
            <li
              key={section}
              style={{
                ...styles.navItem,
                ...(selected === section ? styles.navItemSelected : {}),
              }}
              onClick={() => onSelect(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: "250px",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#f5f5f5",
    padding: "2rem 1rem",
    boxSizing: "border-box",
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profile: {
    marginBottom: "2rem",
    textAlign: "center",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  name: {
    fontSize: "1.5rem",
    margin: 0,
    color: "#333",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  navItem: {
    padding: "0.75rem 1rem",
    cursor: "pointer",
    color: "#555",
    borderRadius: "4px",
    marginBottom: "0.5rem",
    userSelect: "none",
  },
  navItemSelected: {
    backgroundColor: "#007acc",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default Sidebar;
