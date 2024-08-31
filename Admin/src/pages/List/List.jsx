import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./List.css";
const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/foody/foodlist`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching items");
    }
    fetchList();
  };

  const handleRemove = async (id) => {
    console.log(id);
    const response = await axios.delete(`${url}/api/foody/removeitem/${id}`);
    if (response.data.success) {
      toast.success("item removed successfully!");
    } else {
      toast.error("Error removing items");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>Available Dishes</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/image/` + item.image} alt="image" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>
                <b className="cursor" onClick={() => handleRemove(item._id)}>
                  X
                </b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
