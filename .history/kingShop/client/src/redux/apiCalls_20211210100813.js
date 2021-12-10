import { loginFailure, loginStart } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
  } catch (err) {
    dispatch(loginFailure());
  }
};
