import React, { useState, useEffect } from 'react';
import { MYCART } from '../Common/Constant';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(MYCART) !== undefined) {
      const storedItems = JSON.parse(localStorage.getItem(MYCART));
      setCartItems(storedItems);
    }
  }, []);

  const deleteProduct = (id) => {
    if (window.confirm('Do you want to delete?')) {
      const updatedItems = cartItems.filter((item) => item.id !== id);
      localStorage.setItem(MYCART, JSON.stringify(updatedItems));
      setCartItems(updatedItems);
    }
  };

  // Calculate the number of items in the cart
  const cartItemCount = cartItems.length;

  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-sm-3 mb-4" key={index}>
              <div className="card" style={{ width: '300px', background: 'lightpink' }}>
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt="Product Thumbnail"
                    style={{ width: '300px', height: '200px' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6>Price: {item.price}</h6>
                  <button className="btn btn-dark" onClick={() => deleteProduct(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}

      {/* Display the number of items in the cart */}
      <p>Cart Count: {cartItemCount}</p>
    </div>
  );
}

export default Cart;


