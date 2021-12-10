import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
  } catch (err) {
    dispatch(loginFailure());
  }
};
