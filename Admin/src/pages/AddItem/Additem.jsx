import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Additem.css";
import axios from "axios";
import { toast } from "react-toastify";

const Additem = (props) => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      if (!image) {
        toast.warn("Please upload image!");
      } else {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(
          `${props.url}/api/foody/additem`,
          formData
        );
        if (response.data.success) {
          setData({
            name: "",
            description: "",
            price: "",
            category: "Salad",
          });
          setImage(false);
          toast.success(" " + data.name + " Added Successfully!");
        } else {
          event.preventDefault();
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add Data!");
    }
  };

  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload_image"
              style={{ opacity: image ? 1 : 0.4 }}
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            name="image"
            hidden
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
            required
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
              required
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
