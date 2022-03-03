import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  products: [],
  selectedProduct: {},
};
export const productReducer = (
  state = initialState.products,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState.selectedProduct,
  action
) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return action.payload;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
