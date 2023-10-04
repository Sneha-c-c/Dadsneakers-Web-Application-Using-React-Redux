import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from './Service/Product';
import { MYCART } from '../Common/Constant';

function Explore({products,setProducts}) {
  
  const [addedToCart, setAddedToCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getAllProducts()
      .then((response) => {
        const data = response.data;
        setProducts(data.products);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const addToCart = (product) => {
    const storedItems = JSON.parse(localStorage.getItem(MYCART)) || [];
    const isAlreadyInCart = storedItems.find((item) => item.id === product.id);
    if (isAlreadyInCart) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return; // Product is already in cart, exit the function
    }
    storedItems.push(product);
    localStorage.setItem(MYCART, JSON.stringify(storedItems));

    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
      navigate('/cart');
    }, 3000);
  };

  return (
    <div>
      <h1>Explore</h1>
      <div className="row row-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col mb-4" key={product.id}>
              <div className="card" style={{ width: '300px', background: 'lightpink' }}>
                {product.thumbnail && (
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt="Product Thumbnail"
                    style={{ width: '300px', height: '200px' }}
                  />
                )}
                <div className="card-body">
                  {product.title && <h5 className="card-title">{product.title}</h5>}
                  {product.price && <h6>Price: {product.price}</h6>}
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      {showNotification && (
        <div className="popup">
          <p>Product is already in the cart!</p>
        </div>
      )}
      {addedToCart && !showNotification && (
        <div className="popup">
          <p>Product added to cart!</p>
        </div>
      )}
      <style>
        {`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          border: 1px solid #ccc;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        `}
      </style>
    </div>
  );
}

export default Explore;



