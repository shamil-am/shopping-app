import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  productReducer,
  selectedProductReducer,
});

export default reducers;
