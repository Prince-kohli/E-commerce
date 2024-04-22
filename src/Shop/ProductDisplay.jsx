import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { s } from "vite/dist/node/types.d-jgA8ss1A";

const desc =
  "Engergistia an deliver atactics metrcs after avsionary Apropria transitin enterpris an sources application emerging psd template";
const ProductDisplay = ({ item }) => {
  //   console.log(item);

  const { id, price, seller, ratingsCount, quantity, img, name } = item;

  const [preQuantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select size");
  const [color, setColor] = useState("Select color");

  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecreses = () => {
    if (preQuantity > 1) {
      setQuantity(preQuantity - 1);
    }
  };

  const handleIncreses = () => {
    setQuantity(preQuantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      price: price,
      quantity: preQuantity,
      size: size,
      color: color,
      coupon: coupon,
      name: name,
    };
    // console.log(product);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += preQuantity;
    } else {
      existingCart.push(product);
    }
    ///upDate local storage

    localStorage.setItem("cart", JSON.stringify(existingCart));

    ///Resetform fields

    setQuantity(1);
    setSize("Select SIze");
    setColor("Select color");
    setCoupon("");
  };

  return (
    <div>
      <h4>{name}</h4>
      <p className="rating">
        <i className="icofont-star"></i>
        <i className="icofont-star"></i>
        <i className="icofont-star"></i>
        <i className="icofont-star"></i>
        <i className="icofont-star"></i>
        <span>{ratingsCount}review</span>
      </p>
      <h4>${price}</h4>
      <h6>{seller}</h6>
      <p>{desc}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-product size">
            <select value={size} onChange={handleSize}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecreses}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={preQuantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncreses}>
              +
            </div>
          </div>
          {/*coupon field */}

          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/*button sectin */}

          <button type="submit" className="lab-btn">
            <span>Add To Cart</span>
          </button>

          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
