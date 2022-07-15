import { createStore, combineReducers, applyMiddlewares } from "redux";
import thunk from "thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducers } from "./reducers/productReducers";

const reducers = combineReducers({
  products: productReducers,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducers,
  middleware,
  composeWithDevTools(applyMiddlewares(...middleware))
);

export default store;
