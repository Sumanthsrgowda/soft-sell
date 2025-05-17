import React from 'react';
import {motion} from 'motion/react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <motion.a className="navbar-brand" animate={{
          y:10
        }} href="#"><img className="logo-image" src="/letter-s-logo-vector_23987-138.avif" alt="" />SoftSell</motion.a>
        <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-primary ms-auto">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
