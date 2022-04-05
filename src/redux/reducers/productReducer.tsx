import { ActionTypes } from "../contents/actions-type";
const initialState = {
  products: [],
};
export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
