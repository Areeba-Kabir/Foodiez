import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: [itemId] + 1 }));
    }
  };

  const removefromCart = (itemId) => {
    if (!cartItems[itemId]) {
      console.log("Cart is Empty");
    }
    setcartItems((prev) => ({ ...prev, [itemId]: [itemId] - 1 }));
  };
  const ContextValue = {
    food_list,
    cartItems,
    setcartItems,
    removefromCart,
    addToCart,
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
