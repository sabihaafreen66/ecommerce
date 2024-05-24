// About.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <iframe
        title="About Page"
        src="https://prasadyash2411.github.io/ecom-website/about.html"
        width="100%"
        height="800px"
        frameBorder="0"
      ></iframe>
      <div className="d-flex justify-content-around mt-4">
        <NavLink to="/contact-us" className="btn btn-primary">
          Contact Us
        </NavLink>
        {/* Add other NavLink buttons */}
      </div>
    </div>
  );
};

export default About;
