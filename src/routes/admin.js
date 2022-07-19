import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AdminLayout from "../containers/Dashboard/AdminLayout";

const AdminDashboard = lazy(() => import("../components/AdminDashboard"));
const UserListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/Users/UserList")
);
const SelectNews = lazy(() => import("../components/SelectNews"));
const NewsListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/News/NewsList")
);
const NewsListOfAdminNonApproved = lazy(() =>
  import("../containers/Dashboard/Admin/News/NewsListNonApproved")
);
const EditNews = lazy(() => import("../components/EditNews"));
const AddNewsPost = lazy(() => import("../components/AddNewsPost"));
const NewsView = lazy(() => import("../components/NewsView"));
const SelectJob = lazy(() => import("../components/SelectJob"));
const PostJob = lazy(() => import("../components/PostJob"));
const JobListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/Jobs/JobList")
);
const AddJobPost = lazy(() => import("../components/AddJobPost"));
const CompanyListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/Company/CompanyList")
);
const EditContact = lazy(() => import("../components/EditContact"));
const RequestWorkshop = lazy(() => import("../components/Requestworkshop"));

export const adminRoutes = (isAuthenticated, userRole) => ({
  path: "/admin",
  element:
    (isAuthenticated && userRole === "ROLE_ADMIN") || true ? (
      <AdminLayout />
    ) : (
      <Navigate to="/login" />
    ),
  children: [
    { index: true, element: <Navigate to="/admin/dashboard" /> },
    {
      path: "dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "user",
      element: <UserListOfAdmin />,
    },
    {
      path: "news",
      element: <SelectNews />,
    },
    {
      path: "news/list",
      element: <NewsListOfAdmin />,
    },
    {
      path: "news/non-approved-list",
      element: <NewsListOfAdminNonApproved />,
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
      element: <JobListOfAdmin />,
    },
    { path: "editJob/:id", element: <h1>Edit Job</h1> },
    {
      path: "job/addJob",
      element: <AddJobPost />,
    },
    {
      path: "company",
      element: <CompanyListOfAdmin />,
    },
    {
      path: "settings",
      element: <EditContact />,
    }, //<h1>Admin Settings</h1>
    {
      path: "editContact",
      element: <EditContact />,
    }, //<h1>Admin Settings</h1>
    {
      path: "requestWorkshop",
      element: <RequestWorkshop />,
    },
    { path: "*", element: <Navigate to="/404" /> },
  ],
});
