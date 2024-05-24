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

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Store from './Store';
import About from './About';
import ContactUs from './ContactUs';
import ProductReviews from './Product/ProductReviews'
import ProductPage from './Product/ProductPage';

// Define a new component for the Flipkart-like product page
const FlipkartProduct = () => (
  <div>
    <h2>Flipkart-like Product Page</h2>
    <a href="https://www.flipkart.com/smartees-full-sleeve-printed-men-sweatshirt/p/itmcd6c467c22e49?pid=SWSGTJBKK5GSNMQ6&lid=LSTSWSGTJBKK5GSNMQ6FLQUHJ&marketplace=FLIPKART&sattr[]=color&st=color&otracker=hp_omu_Today%25252527s%25252BFashion%25252BDeals_2_8.dealCard.OMU_4651R750EY7D_5" target="_blank" rel="noopener noreferrer">
      View Product
    </a>
  </div>
);

const App = () => (
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
            {/* Add a link to the Flipkart-like product page */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/flipkart-product">Flipkart Product</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        {/* Route for the Flipkart-like product page */}
        <Route path="/flipkart-product" component={FlipkartProduct} />
        {/* Route for the dynamic product page */}
        <Route path="/product/:productId" component={ProductPage} />
        {/* Route for the product reviews */}
        <Route path="/reviews/:productId" component={ProductReviews} />
      </Switch>
    </div>
  </Router>
);

export default App;
