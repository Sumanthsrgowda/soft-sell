import React from 'react';

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <div className="footer-format">
    <footer className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="navbar-brand footer-center">© 2025 SoftSell. All rights reserved.</div>
    </footer>
    </div>
  );
};

export default Footer;
