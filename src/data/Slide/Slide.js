import { useGlobalState } from "@/hooks";
import { GROUPID, callApi } from "@/services";
import { addSlide } from "@/store";

export const Shop_spWeb_Slide_List = async (dispatch) => {
  const pr2 = {
    Domain: "",
    GroupId: GROUPID,
  };
  const params2 = {
    Json: JSON.stringify(pr2),
    func: "Shop_spWeb_Slides_List",
  };
  try {
    const result = await callApi.Main(params2);
    const sortResultByIndexNumber = result?.sort(
      (a, b) => a.IndexNumber - b.IndexNumber
    );

    dispatch(addSlide(sortResultByIndexNumber));
  } catch (err) {
    console.log(err);
  }
};
