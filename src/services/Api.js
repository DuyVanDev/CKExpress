import axiosClient from "./axiosClient";
import axiosClientMain from "./axiosClientMain";
import PostImages from "./PostImagesAPI";
export const GROUPID = 10052;
export const API_DOMAIN = "https://api-crmcak.vps.vn/api/ApiMain";
export const IMAGES_DOMAIN = "https://api-crmcak.vps.vn/upload";
export const API_KEY = "netcoApikey2025";
const config = {
  headers: {
    "content-type": "application/json",
  },
};

export const callApi = {
  Main: (data) => {
    data.API_key = API_KEY;
    return axiosClient.post("/API_spCallServer", data, config);
  },
  MainV4: (data) => {
    data.API_key = API_KEY;
    return axiosClientMain.post("/API_spCallServer", data, config);
  },
  PostImages: (data) => {
    data.API_key = API_KEY;
    return PostImages.post("/API_spCallPostImage_TimeKeeping", data, config);
  },
  UploadFile: (data) => {
    data.API_key = API_KEY;
    return PostImages.post("/API_spCallPostImage_NonResizeImage", data, config);
  },
  Upload: (data) => {
    data.API_key = API_KEY;
    return PostImages.post("/API_spCallPostImage", data, config);
  },
  UploadFiles: (data) => {
    data.API_key = API_KEY;
    return PostImages.post("/API_spCallPostFile", data, config);
  },
};
