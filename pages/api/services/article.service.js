import http from "./http-service";
import config from "./apiUrls";

const getArticles = async (data) => {
  try {
    const reqParams = {
      ...data,
    };
    const response = await http.get('data/articles.json');
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
    const response = await http.post(config.ARTICLE_GET, reqParams);
    return { status: response.status, data: response.data };
  } catch (err) {
    return Promise.reject(err);
  }
};

const ArticleService = {
  getArticles,
  getArticle,
  getArticlesSubCategoryAll,
  getArticlesCategoryAll
};

export default ArticleService;
