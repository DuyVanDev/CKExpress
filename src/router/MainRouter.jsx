import { BrowserRouter, Routes, Route } from "react-router-dom";

import { publicRoute } from "./routes";

import { Wrapper } from "./Wrapper";
import React, { useEffect, useState } from "react";
import Anchor from "@/components/Anchor";
import Chat from "@/components/Chat";
import PublicRoute from "./PublicRoute";
import NotFound from "@/pages/NotFound/NotFound";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGlobalState } from "@/hooks";
import { GROUPID, IMAGES_DOMAIN, callApi } from "@/services";
import { addMenu, addService, addSetting, addSlide } from "@/store";
import { Shop_spWeb_Setting_List } from "@/data/setting/Setting";
import { Shop_spWeb_Menu_List } from "@/data/menu/Menu";
import { Shop_spWeb_Slide_List } from "@/data/Slide/Slide";
import { Shop_spWeb_Service_List } from "@/data/service/Service";
import { Shop_spWeb_News_List } from "@/data/news/News";
import { Shop_spWeb_Career_List } from "@/data/career/Career";

export const MainRouter = () => {
  const [globalState, dispatch] = useGlobalState();

  useEffect(() => {
    Shop_spWeb_Setting_List(dispatch)
    Shop_spWeb_Menu_List(dispatch)
    Shop_spWeb_Slide_List(dispatch)
    Shop_spWeb_Service_List(dispatch)
    Shop_spWeb_News_List(dispatch)
    Shop_spWeb_Career_List(dispatch)
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          {publicRoute.map((routeConfig, index) => {
            let Layout = routeConfig.layout
              ? routeConfig.layout
              : React.Fragment;
            const Component = routeConfig.childrend;
            return (
              <Route
                key={index}
                path={routeConfig.path}
                element={
                  <Layout>
                    <PublicRoute>
                      <Component />
                      {/* <Chat /> */}
                      <Anchor />
                    </PublicRoute>
                  </Layout>
                }
              />
            );
          })}
          <Route
            path="*"
            element={
              <DefaultLayout>
                <NotFound />
                <Anchor />
              </DefaultLayout>
            }
          />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
