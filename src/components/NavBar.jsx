import React from 'react';

export default function NavBar() {
  return (
    <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing) 0' }}>
      <div>
        <h1 style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>Ram Prasad</h1>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="#mentorship" style={{ color: 'var(--dark)', fontWeight: 500, textDecoration: 'none' }}>Mentorship</a>
        <a href="#contact" className="btn">Say Hello</a>
      </div>
    </nav>
  );
}