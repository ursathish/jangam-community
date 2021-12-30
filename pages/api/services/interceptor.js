import Axios from "axios";
// import { store } from "../store";
// import { SET_AUTH_TOKEN, SET_SERVICE_LOADER } from "../store/constants";
import NotificationService from "./notification.service";
// import Config from "../environment";
import config from "../../../environment";

// console.log(process.env.SERVICE_URL);

const axios = Axios.create({
 
});

axios.interceptors.request.use(
  async (config) => {
    // const { auth, app } = store.getState();
    const interceptedConfig = config;
    interceptedConfig.headers["Content-type"] = "application/json";
    // if (auth.authToken !== null) {
    //   interceptedConfig.headers.Authorization = `Bearer ${auth.authToken}`;
    // }
    // store.dispatch({
    //   type: SET_SERVICE_LOADER,
    //   payload: true,
    // });
    return interceptedConfig;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    // if (response.headers.authorization) {
    //   store.dispatch({
    //     type: SET_AUTH_TOKEN,
    //     payload: response.headers.authorization,
    //   });
    // }
    // store.dispatch({
    //   type: SET_SERVICE_LOADER,
    //   payload: false,
    // });
    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 440) {
        // store.dispatch({ type: "USER_LOGOUT" });
        // store.dispatch({
        //   type: SET_SERVICE_LOADER,
        //   payload: false,
        // });
        NotificationService.showErrorMessage(error.response.data.message);
      } else {
        // store.dispatch({
        //   type: SET_SERVICE_LOADER,
        //   payload: false,
        // });
        NotificationService.showErrorMessage(error.response.data.message);
      }
    } else {
      // store.dispatch({ type: "USER_LOGOUT" });
      NotificationService.showErrorMessage(
        "It may server down.Please contact to Sixides Admin"
      );
    }
    return Promise.reject(error.response || error.request || error.message);
  }
);

export default axios;
