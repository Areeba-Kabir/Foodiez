import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContext";
const Placeorder = () => {
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder="First name" required />
          <input type="text" name="" id="" placeholder="Last name" required />
        </div>
        <input type="text" name="" id="" placeholder="Email " required />
        <input type="text" name="" id="" placeholder="Address" required />
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder="City" required />
          <input type="text" name="" id="" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder="Zip Code" required />
          <input type="text" name="" id="" placeholder="Country" required />
        </div>
        <input type="text" name="" id="" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalAmount() + 2}</b>
            </div>
          </div>
          <button>Proceed to CheckOut</button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
