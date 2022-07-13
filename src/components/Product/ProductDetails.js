import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import "./ProductDetails.css";
import { Rating } from "@material-ui/lab";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetails, loading, rate, count } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const options = {
    size: "large",
    readOnly: true,
    precision: 0.1,
    value: rate,
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  console.log(quantity);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="ProductDetails">
            <div className="imageContainer">
              <img
                className="ProductDetails__image"
                src={productDetails.image}
                alt={productDetails.title}
              />
            </div>
            <div className="detailsBlock">
              <div className="detailsBlock-1">
                <h1>{productDetails.title}</h1>
                <span>{productDetails.category}</span>
                <p>Product # {productDetails.id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  ({count}&nbsp;Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${productDetails.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <p>{quantity}</p>
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="detailsBlock-4">
                <h1>Description : </h1>
                <p>{productDetails.description}</p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
