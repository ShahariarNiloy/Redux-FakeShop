import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSelectedProduct,
  selectedProduct,
} from "../redux/actions/ProductActions";

function ProductDetails() {
  const { productId } = useParams();
  const { product } = useSelector((state: any) => state.singleProduct);
  const dispatch = useDispatch();
  console.log(productId);
  const fetchProduct = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res: any) => {
        const response = res.data;
        dispatch(selectedProduct(response));
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  console.log("product:", product);
  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(deleteSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={product?.image} />
            </div>
            <div className="column rp">
              <h1>{product?.title}</h1>
              <h2>
                <a className="ui teal tag label">${product?.price}</a>
              </h2>
              <h3 className="ui brown block header">{product?.category}</h3>
              <p>{product?.description}</p>
              <div className="ui vertical animated button" tabIndex={0}>
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
