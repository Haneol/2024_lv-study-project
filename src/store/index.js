import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducer from "../redux/cartReducer";
import locationReducer from "../redux/locationReducer";

const appReducer = combineReducers({
  cart: cartReducer,
  location: locationReducer,
});

const store = createStore(appReducer, composeWithDevTools());

export default store;
