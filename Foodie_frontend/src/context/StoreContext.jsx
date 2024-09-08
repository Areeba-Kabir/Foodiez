import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";

  const [cartItems, setcartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId ]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removefromCart = async (itemId) => {
    if (!cartItems[itemId]) {
      console.log("Cart is Empty");
    }
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // console.log(token);
    if (token) {
      await axios.delete(url + `/api/cart/remove/${itemId}`, {
        headers: { token },
      });
    }
  };

  // const removefromCart=>async(itemId){
  // setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // if (token) {
  //   await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
  // }

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/foody/foodlist");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.get(url + "/api/cart/get", {
      headers: { token },
    });
    setcartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData(); // Invoke the function correctly here
  }, []);

  const ContextValue = {
    food_list,
    cartItems,
    setcartItems,
    removefromCart,
    addToCart,
    getTotalAmount,
    url,
    token,
    setToken,
    loadCartData,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
