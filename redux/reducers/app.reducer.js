import {
  SET_APP_LANGUAGE,
  SET_LOGIN_DETAILS,
  SET_SERVICE_LOADER,
  SET_BREADCRUMB_KEY,
  SET_STORIES_LIST,
} from "../constants";

const initialState = {
  language: "en",
  loginDetails: {},
  isServiceLoader: false,
  breadcrumbKey: "Dashboard",
  storiesMenuList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_APP_LANGUAGE:
      return { ...state, language: payload };
    case SET_LOGIN_DETAILS:
      return { ...state, loginDetails: payload };
    case SET_SERVICE_LOADER:
      return { ...state, isServiceLoader: payload };
    case SET_BREADCRUMB_KEY:
      return { ...state, breadcrumbKey: payload };
    case SET_STORIES_LIST:
      return { ...state, storiesMenuList: payload };
    default:
      return state;
  }
};
