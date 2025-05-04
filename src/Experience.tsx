import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Principal Software Engineer",
    company: "Innova Solutions, Chennai",
    period: "July 2021 – Present",
    description: [
      "Designed and developed full-stack web applications using React JS as Frontend and Express/Node JS as Backend.",
      "Created Rest API services and integrated with PostgreSQL as the database to create a single web portal with user management capabilities.",
      "Integrated different BI tools like Superset and Spotfire to view Analytic Dashboards.",
      "Designed and created cloud infrastructure for hosting UI and API Services using AWS CloudFormation.",
      "Dockerized React and Express/Node JS application for deployment in AWS Elastic Container-Fargate Service."
    ],
    skills: [
      "Reactjs", "Redux", "HTML5", "CSS3", "JavaScript", "Express.js", "Node.js", "SQL", "AWS", "TypeScript", "SCSS", "React Query", "CI/CD", "Docker", "Git", "Jest"
    ]
  },
  {
    role: "Senior Software Development Engineer",
    company: "Squareshift, Chennai",
    period: "October 2020 – June 2021",
    description: [
      "Designed and implemented Reporting features for a complex application using React.",
      "Optimized and maintained a Datalake infrastructure through utilization of Athena, Glue, Lambda, API Gateway, S3, and Spark.",
      "Continuously enhanced and maintained its functionality to ensure optimal data efficiency."
    ],
    skills: [
      "React.js", "AWS Datalake", "PySpark", "Amazon Athena", "Elasticsearch", "Python"
    ]
  },
  {
    role: "Software Development Engineer",
    company: "Coda Global, Chennai",
    period: "December 2018 – September 2020",
    description: [
      "Developed web application utilizing Angular for Frontend design for process/workflow management application.",
      "Designed and implemented AWS cloud-based solutions for GPS IOT tracking application.",
      "Contributed as a subject matter expert in DevOps and Automation in AWS environment."
    ],
    skills: [
      "Angular", "Pulumi", "CI/CD", "Docker", "Material UI", "AWS"
    ]
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys Limited, Trivandrum",
    period: "October 2015 – November 2018",
    description: [
      "Developed multiple Web and Mobile applications using Angular, React, Ionic, and React Native technologies."
    ],
    skills: [
      "Reactjs", "Angular", "Ionic Framework", "React Native", "Bootstrap", "TypeScript", "SCSS", "Apache Cordova"
    ]
  }
];

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.2 }
  })
};

const Experience: React.FC = () => (
  <section
    className="experience-section"
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
      Work Experience
    </h2>
    <div>
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.role + exp.company}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            background: "rgba(33, 37, 41, 0.85)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ margin: 0 }}>{exp.role}</h3>
              <span style={{ color: "#bdbdbd" }}>{exp.company}</span>
            </div>
            <span style={{ color: "#90caf9", fontWeight: 500 }}>{exp.period}</span>
          </div>
          <ul style={{ margin: "1rem 0 0 1.2rem" }}>
            {exp.description.map((desc, i) => (
              <li key={i} style={{ marginBottom: "0.5rem" }}>{desc}</li>
            ))}
          </ul>
          <div style={{ marginTop: "0.7rem", fontSize: "0.95rem", color: "#bdbdbd" }}>
            <strong>Skills:</strong> {exp.skills.join(", ")}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
