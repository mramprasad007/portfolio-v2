import React from 'react';
import { FaPalette, FaCode, FaChalkboardTeacher } from 'react-icons/fa';
import './RolesOverview.css';

const roles = [
  {
    icon: <FaPalette size={32} />,
    title: 'Designer',
    description: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
  },
  {
    icon: <FaCode size={32} />,
    title: 'Frontend Developer',
    description: 'I like to code things from scratch and enjoy bringing ideas to life in the browser.',
  },
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: 'Mentor',
    description: 'I genuinely care about people and enjoy helping them work on their craft.',
  },
];

export default function RolesOverview() {
  return (
    <section className="roles-overview container">
      <div className="role-cards">
        {roles.map((role) => (
          <div key={role.title} className="role-card">
            <div className="role-icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}