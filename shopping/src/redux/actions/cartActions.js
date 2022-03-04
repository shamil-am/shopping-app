import { ActionTypes } from "../constants/actionTypes";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
