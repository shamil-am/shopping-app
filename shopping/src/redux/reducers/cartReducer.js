import { initialState } from "../constants/initialStates";
import { ActionTypes } from "../constants/actionTypes";

export const cartReducer = (state = initialState.cart, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      let findedIndex = state.findIndex((product) => product.id === payload.id);
      return findedIndex === -1
        ? [...state, { ...payload, count: 1 }]
        : state.map((product, index) => {
            return index === findedIndex
              ? { ...product, count: product.count + 1 }
              : product;
          });
    default:
      return state;
  }
};
