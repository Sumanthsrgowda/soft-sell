import React from 'react';

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <footer className={`navbar ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="navbar-brand footer-center">© 2025 SoftSell. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
