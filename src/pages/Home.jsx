import Shadow from "@/components/Shadow/Shadow";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Info from "../components/Info/Info";
import Notify from "../components/Notify/Notify";
import "@/index.css";
import PostOffice from "@/components/PostOffice/PostOffice";
import Slogan from "@/components/Slogan/Slogan";
import Profive from "@/components/Profive/Profive";
import Partner from "@/components/Partner";
import Download from "@/components/Download";
import { useGlobalState } from "@/hooks";
import { useEffect } from "react";
import { GROUPID, IMAGES_DOMAIN, callApi } from "@/services";
import { addAbout, addMenu, addSetting, addSlide } from "@/store";

const Home = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting, menu, slide } = globalState;
  console.log(menu)

  return (
    <div>
      <Banner slide={slide}/>
      <div className="">
        <Shadow />

        <Info />
        <Contact />
        <PostOffice />
        <Slogan setting={setting}/>
        <Profive />
        <Partner setting={setting}/>
        <Download setting={setting}/>
        {/* <Notify /> */}
      </div>
    </div>
  );
};

export default Home;