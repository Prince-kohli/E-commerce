import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign up for free";
const title = "shop anytime anywhere";
const desc =
  "Take shop on your any device with our app & learn all time whar you want. Just download  & install & start to learn";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container"></div>
      <div className="section-header text-center">
        <Link to="/sign-up" className="lab-btn mb-4">
          {btnText}
        </Link>
        <h2 className="title">{title}</h2>
        <p>{desc}</p>
      </div>

      <div className="section-wrapper">
        <ul className="lab-ul">
          <li>
            <a href="">
              <img src="images/app/01.jpg" alt="" />{" "}
              <img src="images/app/02.jpg" alt="" />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppSection;
