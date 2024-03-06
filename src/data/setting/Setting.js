import { useGlobalState } from "@/hooks";
import { GROUPID, IMAGES_DOMAIN, callApi } from "@/services";
import { addSetting } from "@/store";

export const Shop_spWeb_Setting_List = async (dispatch) => {

  const pr2 = {
    Domain: "",
    GroupId: GROUPID,
  };
  const params2 = {
    Json: JSON.stringify(pr2),
    func: "Shop_spWeb_Setting_List",

  };
  try {
    const result2 = await callApi.Main(params2);
    let Logo =
      IMAGES_DOMAIN +
      result2
        .find((e) => e.KeySetting === "Logo")
        .DataSetting.replace(",", "");

    let Hotline = result2.find(
      (e) => e.KeySetting === "Hotline"
    )?.DataSetting;
    let Email = result2.find((e) => e.KeySetting === "Email")?.DataSetting;
    let Slogan = result2.find((e) => e.KeySetting === "Slogan")?.DataSetting;
    let Map = result2.find((e) => e.KeySetting === "Map")?.DataSetting;
    let TermsAndConditions = result2.find(
      (e) => e.KeySetting === "TermsAndConditions"
    )?.DataSetting;
    let PrivacyPolicy = result2.find(
      (e) => e.KeySetting === "PrivacyPolicy"
    )?.DataSetting;

    let Contentproduction = result2.find(
      (e) => e.KeySetting === "Contentproduction"
    );

    let Address = result2.find(
      (e) => e.KeySetting === "Address"
    )?.DataSetting;
    let AboutCompany = result2.find(
      (e) => e.KeySetting === "AboutCompany"
    )?.DataSetting;

    let ImageABoutUs =
      IMAGES_DOMAIN +
      result2
        .find((e) => e.KeySetting === "ImageABoutUs")
        ?.DataSetting.replace(",", "");

    let CompanyName = result2.find(
      (e) => e.KeySetting === "CompanyName"
    )?.DataSetting;

    let CareerGoals = result2.find(
      (e) => e.KeySetting === "CareerGoals"
    )?.DataSetting;

    let QRCode = result2.find(
      (e) => e.KeySetting === "QRCode"
    )?.DataSetting;
    let test = result2.find(
      (e) => e.KeySetting === "ax"
    )?.DataSetting;


    let data = {
      test,
      Logo,
      Email,
      Slogan,
      Hotline,
      AboutCompany,
      ImageABoutUs,
      Map,
      Contentproduction,
      Address,
      CompanyName,
      PrivacyPolicy,
      TermsAndConditions,
      CareerGoals,
      QRCode
    };
    dispatch(addSetting(data));
  } catch (err) {
    console.log(err);
  }
};