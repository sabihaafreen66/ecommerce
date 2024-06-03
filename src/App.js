// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ref, push } from 'firebase/database';
// import database from './firebase';

// const Home = () => (
//   <div>
//     <iframe
//       title="Home Page"
//       src="https://prasadyash2411.github.io/ecom-website/index.html#"
//       width="100%"
//       height="800px"
//       frameBorder="0"
//     ></iframe>
//   </div>
// );

// const Store = () => (
//   <div>
//     <iframe
//       title="Store Page"
//       src="https://prasadyash2411.github.io/ecom-website/dynamicstore.html"
//       width="100%"
//       height="800px"
//       frameBorder="0"
//     ></iframe>
//   </div>
// );

// const About = () => (
//   <div>
//     <iframe
//       title="About Page"
//       src="https://prasadyash2411.github.io/ecom-website/about.html"
//       width="100%"
//       height="800px"
//       frameBorder="0"
//     ></iframe>
//     <div className="d-flex justify-content-around mt-4">
//       <NavLink to="https://www.youtube.com" target="_blank" className="btn btn-danger">
//         YouTube
//       </NavLink>
//       <NavLink to="https://www.spotify.com" target="_blank" className="btn btn-success">
//         Spotify
//       </NavLink>
//       <NavLink to="https://www.facebook.com" target="_blank" className="btn btn-primary">
//         Facebook
//       </NavLink>
//     </div>
//   </div>
// );

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const contactInfo = { name, email, phone };
//     const contactsRef = ref(database, 'contacts');
//     push(contactsRef, contactInfo)
//       .then(() => {
//         alert('Contact information submitted!');
//         setName('');
//         setEmail('');
//         setPhone('');
//       })
//       .catch(error => {
//         console.error('Error submitting contact information: ', error);
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone Number:</label>
//           <input
//             type="tel"
//             className="form-control"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary mt-3">Submit</button>
//       </form>
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <div className="container">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <NavLink className="navbar-brand" to="/">Home</NavLink>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/store">Store</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/store" component={Store} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={ContactUs} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Store from './Store';
import About from './About';
import ContactUs from './ContactUs';
import ProductReviews from './Product/ProductReviews'
import ProductPage from './Product/ProductPage';
import {useState,useEffect} from 'react';
import Login from './Login';  // Assuming you have a Login component

const FlipkartProduct = () => (
  <div>
    <h2>Flipkart-like Product Page</h2>
    <a href="https://www.flipkart.com/smartees-full-sleeve-printed-men-sweatshirt/p/itmcd6c467c22e49?pid=SWSGTJBKK5GSNMQ6&lid=LSTSWSGTJBKK5GSNMQ6FLQUHJ&marketplace=FLIPKART&sattr[]=color&st=color&otracker=hp_omu_Today%25252527s%25252BFashion%25252BDeals_2_8.dealCard.OMU_4651R750EY7D_5" target="_blank" rel="noopener noreferrer">
      View Product
    </a>
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem('userToken');
    const expirationTime = localStorage.getItem('tokenExpiration');
    const currentTime = new Date().getTime();

    if (token && expirationTime && currentTime < expirationTime) {
      setIsAuthenticated(true);
    } else {
      logoutUser();
    }
  };

  const loginUser = (token) => {
    const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now
    localStorage.setItem('userToken', token);
    localStorage.setItem('tokenExpiration', expirationTime);
    setIsAuthenticated(true);
    setLogoutTimer(5 * 60 * 1000);
  };

  const logoutUser = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('tokenExpiration');
    setIsAuthenticated(false);
    alert('Session has expired. Please log in again.');
  };

  const setLogoutTimer = (timeout) => {
    setTimeout(() => {
      logoutUser();
    }, timeout);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/store">Store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/flipkart-product">Flipkart Product</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/login">
            <Login onLogin={loginUser} />
          </Route>
          <Route path="/store">
            {isAuthenticated ? <Store /> : <Redirect to="/login" />}
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/flipkart-product" component={FlipkartProduct} />
          <Route path="/product/:productId">
            {isAuthenticated ? <ProductPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/reviews/:productId">
            {isAuthenticated ? <ProductReviews /> : <Redirect to="/login" />}
          </Route>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

