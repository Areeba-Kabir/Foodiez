import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const Exploremenu = (props) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p id="explore-menu-text">
        Craving your favorite meal? With just a few clicks, you can browse an
        number of delicious dishes and have them delivered right to your
        doorstep. Enjoy the convenience of online food ordering and satisfy your
        hunger without leaving home.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                props.setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={props.category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu_image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
