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
    const result2 = await callApi.Main(params2);

    dispatch(addSlide(result2));
  } catch (err) {
    console.log(err);
  }
};
