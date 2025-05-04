import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiAmazon } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero text-center">
      <div className="container">
        <div className="hero-logo">
          {/* Replace with your logo or name */}
        </div>
        <h2 className="hero-tagline">
          Living, learning, & leveling up one day at a time.
        </h2>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ramprasad94"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://www.credly.com/users/ramprasad94"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiAmazon size={32} />
          </a>
          <a
            href="mailto:9620582351"
            className="social-icon"
          >
            <MdEmail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}