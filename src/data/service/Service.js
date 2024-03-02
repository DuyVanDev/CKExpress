import { GROUPID, callApi } from "@/services";
import { addService } from "@/store";

export const Shop_spWeb_Service_List = async (dispatch) => {
    const pr2 = {
      Domain: "",
      GroupId: GROUPID,
    };
    const params2 = {
      Json: JSON.stringify(pr2),
      func: "Shop_spWeb_Menu_List",
    };
    try {
      const result2 = await callApi.Main(params2);

      let ListService = result2.filter((e) => e.ParentId === 1396);
      dispatch(addService(ListService));
    } catch (err) {
      console.log(err);
    }
  };