import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //authinfo
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  // logout functionality
  const handlelogout = () => {
    logOut()
      .then(() => {
        alert("Sign-out Sucessfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //addevent listener

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <>
      <header
        className={`header-section style-4 ${
          headerFixed ? "header-fixed fadeInUp" : ""
        }`}
      >
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
          <div className="container">
            <div className="header-top-area">
              <Link to="signup" className="lab-btn me-3">
                <span>Create Account </span>
              </Link>

              <Link to="Login"> Log in</Link>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-search-acte">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              {/*menu area*/}
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="about">About</Link>
                    </li>
                    <li>
                      <Link to="contect">Contect</Link>
                    </li>
                  </ul>
                </div>
                {/*sign and login*/}

                {user === null ? (
                  <>
                    <Link
                      to="sign-up"
                      className="lab-btn me-3 d-none d-md-block"
                    >
                      Create Account
                    </Link>
                    <Link to="login" className="  d-none d-md-block">
                      Log in
                    </Link>
                  </>
                ) : (
                  <div class="dropdown">
                    <img
                      type="button"
                      className="profile"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      src={user.photoURL}
                      alt="user"
                    ></img>

                    <ul class="dropdown-menu">
                      <h6 className="username menu-area">{user.displayName}</h6>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={handlelogout}
                        >
                          Logout
                        </a>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/shop">
                          Shopping cart
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/cart-page">
                          Order
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}

                {/*menu Toggler */}

                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${
                    menuToggle ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {/*social toggler */}
                <div
                  className="ellepsis-bar d-md-none"
                  onClick={() => setMenuToggle(!socialToggle)}
                >
                  <i className="icofont-info-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavItems;

{
  /* <img className="hello" src={user.photoURL} alt="user"></img> */
}
