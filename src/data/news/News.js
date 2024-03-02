import { GROUPID, callApi } from "@/services";
import {  addNews } from "@/store";

export const Shop_spWeb_News_List = async (dispatch) => {
  const pr = {
    Domain: "",
    GroupId: GROUPID,
    keylang: localStorage.getItem("keyLang"),
  };
  const params = {
    Json: JSON.stringify(pr),
    func: "Shop_spWeb_News_List",
  };
  try {
    const result = await callApi.Main(params);
    result?.length && result?.length > 0 && dispatch(addNews(result));
  } catch (err) {}
};
