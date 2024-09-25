import {
  SUBMIT_CONTACT_FORM_REQUEST,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_FAILURE,
} from "../actions/contactAction";

const initialState = {
  submitting: false,
  error: null,
  success: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM_REQUEST:
      return { ...state, submitting: true, error: null };
    case SUBMIT_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        submitting: false,
        error: null,
        success: !state.success,
      };
    case SUBMIT_CONTACT_FORM_FAILURE:
      return { ...state, submitting: false, error: action.payload };

    default:
      return state;
  }
};

export default contactReducer;
