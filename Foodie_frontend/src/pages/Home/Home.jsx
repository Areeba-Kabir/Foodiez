import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Exploremenu from "../../components/ExploreMenu/Exploremenu";
import PropTypes from "prop-types";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
