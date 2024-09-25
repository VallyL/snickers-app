import { createStore, applyMiddleware, combineReducers } from "redux";
import cartReducer from "./reducers/reducer";
import { thunk } from "redux-thunk";
import contactReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  contact: contactReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
