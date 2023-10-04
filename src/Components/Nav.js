// import React from 'react';
// import logo from './Images/logo.png';
// import cart1 from './Images/cart.png';
// import heart1 from './Images/heart.png';
// import { Link } from 'react-router-dom';
// import Searchbar from './Profile';

// export default function Nav() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"static"}}>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home">
//             <img style={{width:'2rem',borderRadius:'1rem'}} src={logo} alt="Logo"/> DadSneakers
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <form className="d-flex" style={{marginLeft:'27rem'}}>
//             <input style={{paddingLeft:'3rem',paddingRight:'3rem'}} className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" />
//           </form>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'27rem'}}>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/Explore">Explore</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/Profiles">Profiles</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Cart"><img style={{width:'2rem',borderRadius:'1rem'}} src={cart1} alt="Cart"/></Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Heart"><img style={{width:'2rem',borderRadius:'1rem'}} src={heart1} alt="Heart"/></Link>
//               </li>
             
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


import React, { useState } from 'react';
import logo from './Images/logo.png';
import cart1 from './Images/cart.png';
import heart1 from './Images/heart.png';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { MYCART } from '../Common/Constant';

function CartIcon() {
  const [cartItems, setCartItems] = useState([]);

  

  const cartItemCount = cartItems.length;

  return (
    <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
      <div className="cart-icon">
        <img style={{ width: '2rem', borderRadius: '1rem' }} src={cart1} alt="Cart" />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </div>
    </Link>
  );
}

export default function Nav({setSearchResults}) {
  

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'static' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img style={{ width: '2rem', borderRadius: '1rem' }} src={logo} alt="Logo" /> DadSneakers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: '27rem' }}>
            <SearchBar setResults={handleSearchResults} />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Profiles">
                  Profiles
                </Link>
              </li>
              <li className="nav-item">
                <CartIcon />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Heart">
                  <img style={{ width: '2rem', borderRadius: '1rem' }} src={heart1} alt="Heart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* search results */}
      
    </div>
  );
}
