import { createStore, applyMiddleware } from "redux";
import cartReducer from "./reducers/reducer";
import { thunk } from "redux-thunk";

const store = createStore(cartReducer, applyMiddleware(thunk));

export default store;
