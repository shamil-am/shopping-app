import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  products: [
    {
      id: 1,
      title: "Dibesh",
      category: "Programming",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      //   return payload;
      return state;
    default:
      return state;
  }
};
