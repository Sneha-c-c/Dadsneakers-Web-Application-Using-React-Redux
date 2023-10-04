import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Explore from "./Components/Explore";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
//import SearchBar from "./Components/SearchBar";
//import Product from "./Components/Service/Product"


function App() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Router>
        <Nav setSearchResults={setProducts}/> 
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<Profile />} />
            <Route path="/explore" element={<Explore  products={products} setProducts={setProducts}/>} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/searchbar" element={<SearchBar/>}/> */}

          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;



