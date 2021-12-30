import {
  SET_APP_LANGUAGE,
  SET_LOGIN_DETAILS,
  SET_BREADCRUMB_KEY,
  SET_STORIES_LIST,
} from "../constants";

export const setAppLanguage = (payload) => ({
  type: SET_APP_LANGUAGE,
  payload,
});
export const setLoginDetails = (payload) => ({
  type: SET_LOGIN_DETAILS,
  payload,
});

export const setBreadcrumbKey = (payload) => ({
  type: SET_BREADCRUMB_KEY,
  payload,
});

export const setStoriesMenuDetails = (payload) => ({
  type: SET_STORIES_LIST,
  payload,
});
