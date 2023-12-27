import React from "react";
import "./Breadcrumb.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="breadcrumb">
        Home
        <img src={arrow_icon} alt="" />
        {product.category}
        <img src={arrow_icon} alt="" />
        {product.name}
      </div>
    </div>
  );
};

export default Breadcrumb;
