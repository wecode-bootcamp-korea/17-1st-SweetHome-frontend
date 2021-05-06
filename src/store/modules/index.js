import { combineReducers } from "redux";
import productList from "./productList";
import loading from "./loading";

const rootReducer = combineReducers({
  productList,
  loading,
});

export default rootReducer;
