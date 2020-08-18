import React from 'react';
import Typing from 'react-typing-animation';
import './Homepage.css';
import lp from '../images/Coding_PNG.png';

/**
 * Displays Homepage 
 */

const Homepage = () => {
  return (
    <div className="Homepage">
      <h1>Yodlr Design Challenge</h1>
      <Typing speed={100}>
        <span className="Welcome">Register to get started</span>
      </Typing>
      <img src={lp} className="lp" alt="lp"></img>
    </div>
  );
};

export default Homepage;
