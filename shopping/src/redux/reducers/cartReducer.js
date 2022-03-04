import { initialState } from "../constants/initialStates";
import { ActionTypes } from "../constants/actionTypes";

export const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};
