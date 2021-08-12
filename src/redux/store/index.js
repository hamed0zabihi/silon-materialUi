import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "../reducers/";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const Store = createStore(
  Reducers,
  compose(applyMiddleware(thunk), reduxDevTools)
);
//

// subscribesadfsadf
Store.subscribe(() => console.log(Store.getState()));
