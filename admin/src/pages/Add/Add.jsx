import React, { useState } from "react";
import "./Add.css";
import { assets, url } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Image not selected");
      return null;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        name: "",
        description: "",
        price: "",
        category: data.category,
      });
      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              e.target.value = "";
            }}
            type="file"
            accept="image/*"
            id="image"
            hidden
          />
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
            />
          </label>
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            rows={6}
            placeholder="Write content here"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandler}>
              {/* Popular categories */}
              <option value="Pizza">Pizza</option>
              <option value="Burgers">Burgers</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Biryani">Biryani</option>
              <option value="Curries">Curries</option>
              <option value="Tandoor">Tandoor</option>
              <option value="Wraps">Wraps</option>

              {/* Sweet and desserts */}
              <option value="Deserts">Desserts</option>
              <option value="Cake">Cake</option>
              <option value="Ice Cream">Ice Cream</option>
              <option value="Cookies">Cookies</option>
              <option value="Pastries">Pastries</option>
              <option value="Donuts">Donuts</option>
              <option value="Brownies">Brownies</option>
              <option value="Chocolates">Chocolates</option>

              {/* Beverages */}
              <option value="Beverages">Beverages</option>
              <option value="Coffee">Coffee</option>
              <option value="Tea">Tea</option>
              <option value="Milkshakes">Milkshakes</option>
              <option value="Smoothies">Smoothies</option>
              <option value="Mocktails">Mocktails</option>
              <option value="Juices">Juices</option>
              <option value="Soda">Soda</option>

              {/* Breakfast options */}
              <option value="Breakfast">Breakfast</option>
              <option value="Pancakes">Pancakes</option>
              <option value="Omelettes">Omelettes</option>
              <option value="Waffles">Waffles</option>
              <option value="Bagels">Bagels</option>
              <option value="Cereal">Cereal</option>
              <option value="Toast">Toast</option>

              {/* International cuisines */}
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Japanese">Japanese</option>
              <option value="Thai">Thai</option>
              <option value="Korean">Korean</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="American">American</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>

              {/* Vegetarian/Vegan/Healthy */}
              <option value="Pure Veg">Pure Veg</option>
              <option value="Vegan">Vegan</option>
              <option value="Gluten-Free">Gluten-Free</option>
              <option value="Healthy Bowls">Healthy Bowls</option>
              <option value="Protein-Rich">Protein-Rich</option>
              <option value="Low-Carb">Low-Carb</option>

              {/* Snacks and small bites */}
              <option value="Snacks">Snacks</option>
              <option value="Appetizers">Appetizers</option>
              <option value="Fries">Fries</option>
              <option value="Nachos">Nachos</option>
              <option value="Spring Rolls">Spring Rolls</option>
              <option value="Popcorn">Popcorn</option>
              <option value="Chips">Chips</option>
              <option value="Momo">Momos</option>

              {/* Seafood and non-veg */}
              <option value="Seafood">Seafood</option>
              <option value="Grilled Chicken">Grilled Chicken</option>
              <option value="Barbecue">Barbecue</option>
              <option value="Meat Platters">Meat Platters</option>
              <option value="Fish and Chips">Fish and Chips</option>

              {/* Others */}
              <option value="Soups">Soups</option>
              <option value="Stews">Stews</option>
              <option value="Rice Bowls">Rice Bowls</option>
              <option value="Tacos">Tacos</option>
              <option value="Sushi">Sushi</option>
              <option value="Kebabs">Kebabs</option>
              <option value="Dim Sum">Dim Sum</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="Number"
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              placeholder="25"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
