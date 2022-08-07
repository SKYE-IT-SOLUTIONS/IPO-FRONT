import { lazy } from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "../containers/MainLayout";
// import Test from "../test/Test";

const HomeContent = lazy(() => import("../containers/HomeContent"));
const NotFound = lazy(() => import("../containers/404"));
const LockedUser = lazy(() => import("../containers/LockedUser"));
const Maintenance = lazy(() => import("../containers/Maintenance"));
const LoginPage = lazy(() => import("../components/home/LoginPage"));
const LogoutPage = lazy(() => import("../components/home/LogoutPage"));
const JobList = lazy(() => import("../containers/JobList"));
const NewsView = lazy(() => import("../components/common/NewsView"));
const EditJob = lazy(() => import("../components/users/common/EditJob"));
const PostJob = lazy(() => import("../components/users/common/PostJob"));
const RequestGraduate = lazy(() =>
  import("../components/home/RequestGraduate")
);
const RegistrationDashboard = lazy(() => import("../components/home/Register"));
const CompanyRegister = lazy(() =>
  import("../components/home/CompanyRegister")
);
const StudentRegister = lazy(() =>
  import("../components/home/StudentRegister")
);
const SendMail = lazy(() => import("../components/common/SendMail"));
const SelectNews = lazy(() => import("../components/users/common/SelectNews"));
const NewsCollection = lazy(() => import("../components/home/NewsCollection"));
const Achievement = lazy(() => import("../components/home/Achievement"));
const AchievementView = lazy(() =>
  import("../components/home/AchievementView")
);
const RequestHall = lazy(() => import("../components/home/RequestHall"));
const RequestGround = lazy(() => import("../components/home/RequestGround"));
const TrainingSessionList = lazy(() =>
  import("../components/home/TrainingSessionList")
);
const OurTeam = lazy(() => import("../components/home/OurTeam"));
const FeedbackGuest = lazy(() => import("../components/home/GeneralFeedback"));
const AdvertisementSubmit = lazy(() =>
  import("../components/home/AdvertisementSubmit")
);
const ContactUs = lazy(() => import("../components/home/ContactUs"));

export const publicRoutes = (isAuthenticated, userRole) => ({
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <HomeContent />,
    },
    // {
    //   path: "test",
    //   element: <Test />,
    // },
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
      path: "adv-submit",
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
      path: "logout",
      element: isAuthenticated ? <LogoutPage /> : <Navigate to="/" />,
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
      path: "request-hall",
      element: <RequestHall />,
    },
    {
      path: "request-ground",
      element: <RequestGround />,
    },
    {
      path: "requestTraining",
      element: <TrainingSessionList />,
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
      path: "contact-us",
      element: <ContactUs />,
    },
    { path: "*", element: <Navigate to="/404" /> },
  ],
});
