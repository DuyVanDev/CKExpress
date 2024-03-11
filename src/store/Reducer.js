import { ToastWaring } from "../utils";
import {
  ADD_ABOUT,
  ADD_MENU,
  ADD_SLIDE,
  ADD_SERVICE,
  ADD_SETTING,
  ADD_NEWS,
  ADD_CAREER,
} from "./Contants";

const menu = localStorage.getItem("menu");
const setting = localStorage.getItem("setting");
const slide = localStorage.getItem("slide");
const services = localStorage.getItem("services");
const about = localStorage.getItem("about");
const news = localStorage.getItem("news");
const career = localStorage.getItem("career");

export const initState = {
  menu: menu ? JSON.parse(menu) : [],
  setting: setting ? JSON.parse(setting) : {},
  slide: slide ? JSON.parse(slide) : {},
  services: services ? JSON.parse(services) : [],
  about: about ? JSON.parse(about) : {},
  news: news ? JSON.parse(news) : {},
  career: career ? JSON.parse(career) : {},
};

export const reducer = (state, action) => {
  // console.log(state, action, action.type, action.payload, "state, action");
  switch (action.type) {
    case ADD_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    case ADD_SETTING:
      return {
        ...state,
        setting: action.payload,
      };
    case ADD_SLIDE:
      return {
        ...state,
        slide: action.payload,
      };
    case ADD_SERVICE:
      return {
        ...state,
        services: action.payload,
      };
    case ADD_ABOUT:
      return {
        ...state,
        about: action.payload,
      };
    case ADD_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case ADD_CAREER:
      return {
        ...state,
        career: action.payload,
      };
    default:
      return state;
  }
};
