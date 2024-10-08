import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducer from "../redux/cartReducer";
import locationReducer from "../redux/locationReducer";
import modalReducer from "../redux/modalReducer";
import scrollReducer from "../redux/scrollReducer";

const appReducer = combineReducers({
  cart: cartReducer,
  location: locationReducer,
  modal: modalReducer,
  scroll: scrollReducer,
});

const store = createStore(appReducer, composeWithDevTools());

export default store;
