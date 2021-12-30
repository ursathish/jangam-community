import http from "./http-service";
import config from "./apiUrls";

const getBannerAll = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.BANNER_GET_ALL, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};


const postContactUs = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.CONTACT_US_ADD, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const HomeService = {
    getBannerAll,
    postContactUs
 
};

export default HomeService;
