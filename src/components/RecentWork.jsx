import React from 'react';
import './RecentWork.css';

const projects = [
  {
    title: 'Project A',
    description: 'Short description for Project A.',
    link: '#'
  },
  {
    title: 'Project B',
    description: 'Short description for Project B.',
    link: '#'
  },
  {
    title: 'Project C',
    description: 'Short description for Project C.',
    link: '#'
  }
];

export default function RecentWork() {
  return (
    <section className="recent-work container">
      <h2 className="text-center">My Recent Work</h2>
      <p className="text-center">
        Here are a few past design projects I've worked on. Want to see more? <a href="mailto:ram.prasad@example.com">Email me.</a>
      </p>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.title} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}