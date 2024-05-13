import React, { useState } from "react";
import Ratting from "../components/Ratting";
import imgr01 from "../assets/images/instructor/01.jpg";
import imgr02 from "../assets/images/instructor/02.jpg";
import imgr03 from "../assets/images/instructor/03.jpg";
import imgr04 from "../assets/images/instructor/04.jpg";
import imgr05 from "../assets/images/shop/01.jpg";

const reviwtitle = "Add a Review";
let ReviewList = [
  {
    imgUrl: imgr01,
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: imgr02,
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: imgr03,
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: imgr04,
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Review
        </li>
      </ul>

      {/*desc and review section */}

      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* add review field   */}

          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="messeage"
                    rows={10}
                    placeholder="Type Here Message"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/*description */}

        <div className="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quasi
            necessitatibus, enim odit porro nam accusantium praesentium!
            Consequuntur nostrum, totam quasi illum vel magni quia rerum harum
            perspiciatis asperiores ut facere officia labore non iste numquam
            voluptate cumque reprehenderit nesciunt dolorem veritatis dicta?
            Maiores laudantium molestias aperiam nam distinctio optio.Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Vel quasi
            necessitatibus, enim odit porro nam accusantium praesentium!
            Consequuntur nostrum, totam quasi illum vel magni quia rerum harum
            perspiciatis asperiores ut facere officia labore non iste numquam
            voluptate cumque reprehenderit nesciunt dolorem veritatis dicta?
            Maiores laudantium molestias aperiam nam distinctio optio.
          </p>

          <div className="post-item">
            <div className="post-thumb">
              <img src={imgr05} alt=""></img>
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officia?
                </li>
                <li> amet consectetur adipisicing elit. Beatae, officia?</li>
                <li> amet consectetur adipisicing elit. Beatae, officia?</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officia?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officia?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officia?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officia?
                </li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quasi
            necessitatibus, enim odit porro nam accusantium praesentium!
            Consequuntur nostrum, totam quasi illum vel magni quia rerum harum
            perspiciatis asperiores ut facere officia labore non iste numquam
            voluptate cumque reprehenderit nesciunt dolorem veritatis dicta?
            Maiores laudantium molestias aperiam nam distinctio optio.Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Vel quasi
            necessitatibus, enim odit porro nam accusantium praesentium!
            Consequuntur nostrum, totam quasi illum vel magni quia rerum harum
            perspiciatis asperiores ut facere officia labore non iste numquam
            voluptate cumque reprehenderit nesciunt dolorem veritatis dicta?
            Maiores laudantium molestias aperiam nam distinctio optio.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
