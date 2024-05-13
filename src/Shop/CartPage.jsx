import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./checkOutPage";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    /// fetch Cart items form local Storage

    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    setcartItems(storedCartItems);
  }, []);

  // calculate price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  /// handle quantity Increse
  const handleIncrese = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    ////update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  ///handle Decrese

  const handleDecrese = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);

      ////update local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //// Handle Item remove

  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    setcartItems(updateCart);
    updateLocalStorage(updateCart);
  };
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  /// cart subtotal

  const cartsubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //order total

  const orderTotal = cartsubtotal;

  return (
    <div>
      <PageHeader title={"shop cart"} curPage={"cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/**cart top */}

            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-products">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-products">Quantity</th>
                    <th className="cat-products">Total</th>
                    <th className="cat-products">Edit</th>
                  </tr>
                </thead>

                {/** Table Body */}
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cart-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrese(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrese(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        $ {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/**    cart top ends */}
            {/* cart bottom */}

            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon Code...."
                  />
                  <input type="submit" value="Apply Coupon"></input>
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart"></input>
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>
              {/**---------------------checkout box end */}
              <div className="shiping-box">
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk"> United Kingdom (Uk)</option>
                          <option value="us"> United State (USA)</option>

                          <option value="bd"> Banglagesh</option>
                          <option value="pk">Pakistan </option>
                          <option value="ind">India </option>
                          <option value="nep">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">New York</option>
                          <option value="us "> London</option>
                          <option value="bd "> Dhaka</option>

                          <option value="pk">Korachi </option>
                          <option value="ind">New Delhi </option>
                          <option value="nep">Kathmandu</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="postalCode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul>
                        <li>
                          <span className="pull-left">Cart subtotal</span>
                          <p className="pull-right">$ {cartsubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
