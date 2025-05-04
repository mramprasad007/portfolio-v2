import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiAmazon } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ramprasad94" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.credly.com/users/ramprasad94" target="_blank" rel="noopener noreferrer">
          <SiAmazon size={24} />
        </a>
        <a href="mailto:ram.prasad@example.com">
          <MdEmail size={24} />
        </a>
      </div>
      <p>Handcrafted by me © {new Date().getFullYear()}</p>
      <p>Made with React & Vite</p>
    </footer>
  );
}