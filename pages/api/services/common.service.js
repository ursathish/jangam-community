import http from "./http-service";
import config from "./apiUrls";

const getStoriesMenuDetails = async (data) => {
  try {
    const reqParams = {
      ...data,
      status: "Y",
      page: 0,
      size: 100,
    };
    const response = await http.post(
      config.STORIES_SUB_MENU_GET_ALL,
      reqParams
    );
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const postSubscribe = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.SUBSCRIBE, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const CommonService = {
  getStoriesMenuDetails,
  postSubscribe,
};

export default CommonService;
