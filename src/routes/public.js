import { lazy } from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "../containers/MainLayout";

const HomeContent = lazy(() => import("../containers/HomeContent"));
const NotFound = lazy(() => import("../containers/404"));
const LockedUser = lazy(() => import("../containers/LockedUser"));
const Maintenance = lazy(() => import("../containers/Maintainance"));
const LoginPage = lazy(() => import("../components/LoginPage"));
const JobList = lazy(() => import("../containers/JobList"));
const NewsView = lazy(() => import("../components/NewsView"));
const EditJob = lazy(() => import("../components/EditJob"));
const PostJob = lazy(() => import("../components/PostJob"));
const RequestGraduate = lazy(() => import("../components/Reuestgraduate"));
const RegistrationDashboard = lazy(() => import("../components/Register"));
const CompanyRegister = lazy(() => import("../components/CompanyRegister"));
const StudentRegister = lazy(() => import("../components/StudentRegister"));
const SendMail = lazy(() => import("../components/SendMail"));
const SelectNews = lazy(() => import("../components/SelectNews"));
const NewsCollection = lazy(() => import("../components/NewsCollection"));
const Achievement = lazy(() => import("../components/Achievement"));
const AchievementView = lazy(() => import("../components/AchievementView"));
const RequestWorkshop = lazy(() => import("../components/Requestworkshop"));
const RequestHall = lazy(() => import("../components/Requesthall"));
const RequestGround = lazy(() => import("../components/Requestground"));
const NavBarListView = lazy(() => import("../components/NavBarListView"));
const OurTeam = lazy(() => import("../components/OurTeam"));
const FeedbackGuest = lazy(() => import("../components/Feedback"));
const GoogleCaptcha = lazy(() => import("../components/Captcha"));
const AdvertisementSubmit =lazy(()=>import('../components/AdvertisementSubmit'))

export const publicRoutes = (isAuthenticated, userRole) => ({
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <HomeContent />,
    },
    {
      path: "404",
      element: <NotFound />,
    },
    {
      path: "423",
      element: <LockedUser />,
    },
    {
      path: "under-constructions",
      element: <Maintenance />,
    },
    {
      path: "home",
      element: <HomeContent />,
    },
    {
      path: "add-submit",
      element: <AdvertisementSubmit />,
    },
    {
      path: "login",
      element: !isAuthenticated ? (
        <LoginPage />
      ) : userRole === "ROLE_ADMIN" ? (
        <Navigate to="/admin/dashboard" />
      ) : userRole === "ROLE_COMPANY" ? (
        <Navigate to="/company/dashboard" />
      ) : (
        <Navigate to="/student/dashboard" />
      ),
    },
    {
      path: "jobs",
      element: <JobList />,
    },
    {
      path: "job/:id",
      element: <NewsView />,
    },
    {
      path: "editJob/:id",
      element: <EditJob />,
    },
    {
      path: "job/preview",
      element: <PostJob />,
    },
    {
      path: "news/:id",
      element: <NewsView />,
    },
    // { path: "spinner", element: <Spinner /> },
    {
      path: "requestPerson",
      element: <RequestGraduate />,
    },
    {
      path: "register",
      element: <RegistrationDashboard />,
    },
    {
      path: "register/companyReg",
      element: <CompanyRegister />,
    },
    {
      path: "register/studentReg",
      element: <StudentRegister />,
    },
    {
      path: "register/sendMail",
      element: <SendMail />,
    },
    {
      path: "selectNews",
      element: <SelectNews />,
    },
    {
      path: "allNews",
      element: <NewsCollection />,
    },
    {
      path: "achievements",
      element: <Achievement />,
    },
    {
      path: "achievement/:id",
      element: <AchievementView />,
    },
    {
      path: "requestWorkshop",
      element: <RequestWorkshop />,
    },
    {
      path: "request-hall",
      element: <RequestHall />,
    },
    {
      path: "request-ground",
      element: <RequestGround />,
    },
    {
      path: "requestTraining",
      element: <NavBarListView />,
    },
    {
      path: "developers",
      element: <OurTeam />,
    },
    {
      path: "feedback",
      element: <FeedbackGuest />,
    },
    {
      path: "captcha",
      element: <GoogleCaptcha />,
    },
    { path: "*", element: <Navigate to="/404" /> },
  ],
});
