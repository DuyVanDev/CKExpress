import { GROUPID, callApi } from "@/services";
import {  addCareer } from "@/store";

export const Shop_spWeb_Career_List = async (dispatch) => {
  const pr = {
    Domain: "",
    GroupId: GROUPID,
    keylang: localStorage.getItem("keyLang"),
  };
  const params = {
    Json: JSON.stringify(pr),
    func: "Shop_spCareer_List",
  };
  try {
    const result = await callApi.Main(params);
    const sortResultByIndexNumber = result?.sort((a,b) => a.IndexNumber - b.IndexNumber)
    result?.length && result?.length > 0 && dispatch(addCareer(sortResultByIndexNumber));

  } catch (err) {}
};
