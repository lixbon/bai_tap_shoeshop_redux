import { combineReducers } from "redux";
import { shoeReducer } from "./shoeReducer";

export const rootReducer_ShoeShop = combineReducers({
  shoeReducer: shoeReducer,
});
