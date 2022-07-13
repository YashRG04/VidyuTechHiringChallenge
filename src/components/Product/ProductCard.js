import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const options = {
    size:"small",
    readOnly: true,
    value: product.rating.rate,
    precision: 0.1,
  };

  return (
    <Link className="productCard" to={`product/${product.id}`}>
      <div className="imagesContainer">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="contentContainer">
        <p>
          {product.title}
          <span>&nbsp;{`#${product.category}`}</span>
        </p>

        <div className="ratingsContainer">
          <Rating {...options} />
          <span className="productCardSpan">
            ({product.rating.count}&nbsp;Reviews)
          </span>
        </div>
        <span>{`₹${product.price}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
