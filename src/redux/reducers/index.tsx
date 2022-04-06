import { combineReducers } from "redux";
import { productDetailReducer, productReducer } from "./productReducer";

export const reducer = combineReducers({
  allProducts: productReducer,
  singleProduct: productDetailReducer,
});
