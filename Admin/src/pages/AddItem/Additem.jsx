import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Additem.css";

const Additem = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Pasta",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="add">
      <form action="" className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter name"
          />
        </div>
        <div className="add-product-desc flex-col">
          <p>Description</p>
          <textarea
            type="text"
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Enter product description"
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Bugers">Bugers</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Price</p>
            <input
              type="Number"
              name="price"
              placeholder="$0"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Additem;
