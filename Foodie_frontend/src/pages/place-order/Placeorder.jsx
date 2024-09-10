import React, { useContext, useEffect, useState } from "react";
import "./Placeorder.css";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
const Placeorder = () => {
  const { getTotalAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            type="text"
            name="firstName"
            value={data.firstName}
            placeholder="First name"
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            name="lastname"
            value={data.lastname}
            placeholder="Last name"
            onChange={onChangeHandler}
          />
        </div>
        <input
          required
          type="text"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email "
        />
        <input
          required
          type="text"
          name="address"
          value={data.address}
          placeholder="Address"
          onChange={onChangeHandler}
        />
        <div className="multi-fields">
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            placeholder="City"
            required
          />
          <input
            required
            type="text"
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            type="text"
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandler}
            placeholder="Zip Code"
          />
          <input
            required
            type="text"
            name="country"
            value={data.country}
            placeholder="Country"
            onChange={onChangeHandler}
          />
        </div>
        <input
          required
          type="text"
          name="phone"
          value={data.phone}
          placeholder="Phone"
          onChange={onChangeHandler}
        />
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
          <button type="submit">Proceed to CheckOut</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
