import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/ProductActions";

function ProductList() {
  const products = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res: any) => {
        const response = res.data;
        dispatch(setProducts(response));
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  console.log("products:", products);
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="ui grid container" id="productList">
      <ProductComponent />
    </div>
  );
}

export default ProductList;
