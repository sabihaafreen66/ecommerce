import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <iframe
        title="Home Page"
        src="https://prasadyash2411.github.io/ecom-website/index.html#"
        width="100%"
        height="800px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

const Store = () => {
  return (
    <div>
      <iframe
        title="Store Page"
        src="https://prasadyash2411.github.io/ecom-website/dynamicstore.html"
        width="100%"
        height="800px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

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
        <NavLink to="https://www.youtube.com" target="www.youtube.com" className="btn btn-danger">
          YouTube
        </NavLink>
        <NavLink to="https://www.spotify.com" target="_blank" className="btn btn-success">
          Spotify
        </NavLink>
        <NavLink to="https://www.facebook.com" target="_blank" className="btn btn-primary">
          Facebook
        </NavLink>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
