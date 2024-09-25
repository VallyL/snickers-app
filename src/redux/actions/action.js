import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";

export const addToCart = (product) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
  try {
    await axios.post(
      "https://66f3c85977b5e8897096cdc5.mockapi.io/cartItem",
      product
    );
  } catch (error) {
    console.error("Error adding to cart API:", error);
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
  try {
    await axios.delete(
      `https://66f3c85977b5e8897096cdc5.mockapi.io/cartItem/${productId}`
    );
  } catch (error) {
    console.error("Error removing from cart API:", error);
  }
};

export const fetchCart = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://66f3c85977b5e8897096cdc5.mockapi.io/cartItem"
    );
    dispatch({ type: FETCH_CART_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching cart from API:", error);
  }
};
