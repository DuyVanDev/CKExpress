import routes from "@/config/routes";
import { lazy } from "react";
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Home = lazy(() => import("../pages/Home"));
const CompanyProfile = lazy(() => import("@/pages/CompanyProfile"));
const About = lazy(() => import("@/pages/About"));
const Promotion = lazy(() => import("@/pages/News/Promotion"));
const Activity = lazy(() => import("@/pages/News/Activity"));
const Tutorial = lazy(() => import("@/pages/News/Tutorial"));
const SignIn = lazy(() => import("@/pages/Auth/SignIn"));
const SignUp = lazy(() => import("@/pages/Auth/SignUp"));
const TrackingBill = lazy(() => import("@/pages/TrackingBill"));
const RegisterPartner = lazy(() => import("@/pages/Partner/RegisterParner"));
const CustomerCare = lazy(() => import("@/pages/CustomerCare"));
const Career = lazy(() => import("@/pages/Career"));
const NewsDetail = lazy(() => import("@/pages/NewsDetail/NewsDetail"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const PostSystem = lazy(() => import("@/pages/PostSystem/PostSystem"));
const EstimateTariff = lazy(() =>
  import("@/pages/EstimateTariff/EstimateTariff")
);
const Privacy = lazy(() => import("@/pages/Privacy"));
const InfoCompany = lazy(() => import("@/pages/InfoCompany"));
const CommonPage = lazy(() => import("@/pages/CommonPage"));
const Service = lazy(() => import("@/pages/Service"));
const Complain = lazy(() => import("@/pages/Complain"));
const ExpressDeliveryIN = lazy(() =>
  import("@/pages/InternationalService/ExpressDeliveryIN")
);
export const publicRoute = [
  {
    path: routes.home,
    childrend: Home,
    layout: DefaultLayout,
  },
  {
    path: routes.aboutUs,
    childrend: About,
    layout: DefaultLayout,
  },
  {
    path: routes.expressDelivery,
    childrend: ExpressDeliveryIN,
    layout: DefaultLayout,
  },
  {
    path: routes.companyProfile,
    childrend: CompanyProfile,
    layout: DefaultLayout,
  },
  {
    path: routes.promotions,
    childrend: Promotion,
    layout: DefaultLayout,
  },
  {
    path: routes.activity,
    childrend: Activity,
    layout: DefaultLayout,
  },
  {
    path: routes.turtorial,
    childrend: Tutorial,
    layout: DefaultLayout,
  },
  {
    path: routes.login,
    childrend: SignIn,
    layout: null,
  },
  {
    path: routes.register,
    childrend: SignUp,
    layout: null,
  },
  {
    path: routes.trackingBill,
    childrend: TrackingBill,
    layout: DefaultLayout,
  },
  {
    path: routes.registerPartner,
    childrend: RegisterPartner,
    layout: DefaultLayout,
  },
  {
    path: routes.customerCare,
    childrend: CustomerCare,
    layout: DefaultLayout,
  },
  {
    path: routes.career,
    childrend: Career,
    layout: DefaultLayout,
  },
  {
    path: routes.promoDetails,
    childrend: NewsDetail,
    layout: DefaultLayout,
  },
  {
    path: routes.actiDetails,
    childrend: NewsDetail,
    layout: DefaultLayout,
  },
  {
    path: routes.tutoDetails,
    childrend: NewsDetail,
    layout: DefaultLayout,
  },
  {
    path: routes.serviceDetail,
    childrend: ServiceDetail,
    layout: DefaultLayout,
  },
  {
    path: routes.estimateTariff,
    childrend: EstimateTariff,
    layout: DefaultLayout,
  },

  {
    path: routes.infoCompany,
    childrend: CommonPage,
    layout: DefaultLayout,
  },
  {
    path: routes.rule,
    childrend: CommonPage,
    layout: DefaultLayout,
  },
  {
    path: routes.support,
    childrend: CommonPage,
    layout: DefaultLayout,
  },
  {
    path: routes.privacy,
    childrend: CommonPage,
    layout: DefaultLayout,
  },
  {
    path: routes.complain,
    childrend: Complain,
    layout: DefaultLayout,
  },
  {
    path: routes.postSystem,
    childrend: PostSystem,
    layout: DefaultLayout,
  },
];

export const protectedRoute = [];
