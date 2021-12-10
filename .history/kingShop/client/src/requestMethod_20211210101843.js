import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWVlYzEyZWVhNjFhNGI5NzRiY2QyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg1Mzg1MiwiZXhwIjoxNjM5MTEzMDUyfQ.wFtx3sjAmkH4FQ6iMKRKNmRsDg_lqPS0yfMR6trxL90";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
