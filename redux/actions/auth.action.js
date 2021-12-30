import { SET_AUTH_TOKEN } from "../constants";

export const setAuthToken = (payload) => ({
  type: SET_AUTH_TOKEN,
  payload,
});
