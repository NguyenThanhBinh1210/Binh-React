import { loginStart } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
};
