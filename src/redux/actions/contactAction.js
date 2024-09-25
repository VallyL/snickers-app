import axios from "axios";

export const SUBMIT_CONTACT_FORM_REQUEST = "SUBMIT_CONTACT_FORM_REQUEST";
export const SUBMIT_CONTACT_FORM_SUCCESS = "SUBMIT_CONTACT_FORM_SUCCESS";
export const SUBMIT_CONTACT_FORM_FAILURE = "SUBMIT_CONTACT_FORM_FAILURE";

const submitContactFormRequest = () => ({ type: SUBMIT_CONTACT_FORM_REQUEST });
const submitContactFormSuccess = () => ({ type: SUBMIT_CONTACT_FORM_SUCCESS });
const submitContactFormFailure = (error) => ({
  type: SUBMIT_CONTACT_FORM_FAILURE,
  payload: error,
});

export const submitContactForm = (formData) => async (dispatch) => {
  dispatch(submitContactFormRequest());
  try {
    await axios.post(
      "https://66f44eb077b5e88970991dcb.mockapi.io/users",
      formData
    );
    dispatch(submitContactFormSuccess());
  } catch (error) {
    dispatch(submitContactFormFailure(error.message));
  }
};
