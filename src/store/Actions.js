import {
  ADD_ABOUT,
  ADD_MENU,
  ADD_SLIDE,
  ADD_SERVICE,
  ADD_SETTING,
  ADD_NEWS,
  ADD_CAREER
} from "./Contants";

export const addMenu = (payload) => ({
  type: ADD_MENU,
  payload,
});

export const addSetting = (payload) => ({
  type: ADD_SETTING,
  payload,
});

export const addSlide = (payload) => ({
  type: ADD_SLIDE,
  payload,
});

export const addService = (payload) => ({
  type: ADD_SERVICE,
  payload,
});

export const addAbout = (payload) => ({
  type: ADD_ABOUT,
  payload,
});


export const addNews = (payload) => ({
  type: ADD_NEWS,
  payload,
});

export const addCareer = (payload) => ({
  type: ADD_CAREER,
  payload,
});