import http from "./http-service";
import config from "./apiUrls";

const getMedias = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.MEDIA_GET_ALL, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getStories = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get(config.STORIES_LIST, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};



const getMediaSubCategoryAll = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(
      config.MEDIA_SUB_CATEGORY_GET_ALL,
      reqParams
    );
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getMediaCategoryAll = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.MEDIA_CATEGORY_GET_ALL, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getMedia = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.MEDIA_GET, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getArticleFeatured = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get(config.ARTICLES_FEATURED, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getStoriesTop3 = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get(config.STORIES_TOP3, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getMainFeatured = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get(config.MAIN_FEATURED, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getStoriesFeatured = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get(config.STORIES_FEATURED, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};


const MediaService = {
  getMedias,
  getMediaSubCategoryAll,
  getMediaCategoryAll,
  getMedia,
  getStories,
  getArticleFeatured,
  getStoriesTop3,
  getMainFeatured,
  getStoriesFeatured
};

export default MediaService;
