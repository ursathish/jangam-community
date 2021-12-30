import http from "./http-service";
import config from "./apiUrls";

const getArticles = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get('articles/articles.json');
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};


const getEvents = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get('events/event.json');
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};



const getHistories = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get('history/history.json');
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};


const getArticlesSubCategoryAll = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.ARTICLE_SUB_CATEGORY_GET_ALL, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getArticlesCategoryAll = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.post(config.ARTICLE_CATEGORY_GET_ALL, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getArticle = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get('articles.json', reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getEvent = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get('event.json', reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const getHistory = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get('history.json', reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const ArticleService = {
  getArticles,
  getArticle,
  getArticlesSubCategoryAll,
  getArticlesCategoryAll,
  getHistories,
  getEvents,
  getHistory,
  getEvent
};

export default ArticleService;
