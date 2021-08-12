import { combineReducers } from "redux";
import LocalFakeData from "./LocalFakeData";

export const Reducers = combineReducers({
  productsLocal: LocalFakeData,
});
