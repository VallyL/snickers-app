import { createStore } from "redux";
import productReducer from "./reducers/reducer";

const store = createStore(productReducer);

export default store;
