import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Profile from "../containers/Dashboard/common/Profile";

import CompanyLayout from "../containers/Dashboard/Company/CompanyLayout";

const Maintenance = lazy(() => import("../containers/Maintenance"));
const CompanyDashboard = lazy(() =>
  import("../components/users/company/Companyprofile")
);
const SelectNews = lazy(() => import("../components/users/common/SelectNews"));
const NewsListOfCompany = lazy(() =>
  import("../containers/Dashboard/Company/News/NewsListCompany")
);
const EditNews = lazy(() => import("../components/users/common/EditNews"));
const AddNewsPost = lazy(() =>
  import("../components/users/common/AddNewsPost")
);
const NewsView = lazy(() => import("../components/common/NewsView"));
const SelectJob = lazy(() => import("../components/users/common/SelectJob"));
const PostJob = lazy(() => import("../components/users/common/PostJob"));
const JobListOfCompany = lazy(() =>
  import("../containers/Dashboard/Company/Jobs/JobListCompany")
);
const AddJobPost = lazy(() => import("../components/users/common/AddJobPost"));

export const companyRoutes = (isAuthenticated, userRole) => ({
  path: "/company",
  element:
    isAuthenticated && userRole === "ROLE_COMPANY" ? (
      <CompanyLayout />
    ) : (
      <Navigate to="/login" />
    ),
  children: [
    { index: true, element: <Navigate to="/company/dashboard" /> },
    {
      path: "dashboard",
      element: <CompanyDashboard />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "news",
      element: <SelectNews />,
    },
    {
      path: "requests",
      element: <Maintenance />,
    },
    {
      path: "news/list",
      element: <NewsListOfCompany />,
    },
    {
      path: "editNews/:id",
      element: <EditNews />,
    },
    {
      path: "news/addNews",
      element: <AddNewsPost />,
    },
    {
      path: "news/preview",
      element: <NewsView />,
    },
    {
      path: "news/:id",
      element: <NewsView />,
    },
    {
      path: "job",
      element: <SelectJob />,
    },
    {
      path: "job/:id",
      element: <PostJob />,
    },
    {
      path: "job/preview",
      element: <PostJob />,
    },
    {
      path: "job/list",
      element: <JobListOfCompany />,
    },
    { path: "editJob/:id", element: <h1>Edit Job</h1> },
    {
      path: "job/addJob",
      element: <AddJobPost />,
    },
    { path: "settings", element: <h1>Student Settings</h1> },
    { path: "*", element: <Navigate to="/404" /> },
  ],
});
