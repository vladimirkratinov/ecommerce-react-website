import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div>
      <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsleterr and stay updated</p>
        <div>
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
