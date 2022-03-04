import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  productReducer,
  selectedProductReducer,
  cartReducer,
});

export default reducers;
