import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Displayitems from "../Display-items/Displayitems";

const FoodDisplay = (props) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you!</h2>
      <div className="food-display-items">
        {food_list.map((item, index) => {
          console.log(props.category, item.category);
          if (props.category === "All" || props.category === item.category) {
            return (
              <Displayitems
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
