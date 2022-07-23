import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AdminLayout from "../containers/Dashboard/Admin/AdminLayout";
import SelectUsers from "../components/users/admin/SelectUsers";
import Profile from "../containers/Dashboard/common/Profile";

const AdminDashboard = lazy(() =>
  import("../containers/Dashboard/Admin/AdminDashboard")
);
const UserListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/Users/UserList")
);
const SelectNews = lazy(() => import("../components/users/common/SelectNews"));
const NewsListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/News/NewsList")
);
const NewsListOfAdminNonApproved = lazy(() =>
  import("../containers/Dashboard/Admin/News/NewsListNonApproved")
);
const EditNews = lazy(() => import("../components/users/common/EditNews"));
const AddNewsPost = lazy(() =>
  import("../components/users/common/AddNewsPost")
);

const NewsView = lazy(() => import("../components/common/NewsView"));
const SelectJob = lazy(() => import("../components/users/common/SelectJob"));
const PostJob = lazy(() => import("../components/users/common/PostJob"));
const JobListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/Jobs/JobList")
);
const AddJobPost = lazy(() => import("../components/users/common/AddJobPost"));
const CompanyListOfAdmin = lazy(() =>
  import("../containers/Dashboard/Admin/Company/CompanyList")
);
const EditContact = lazy(() => import("../components/users/admin/EditContact"));
const RequestWorkshop = lazy(() =>
  import("../components/home/RequestWorkshop")
);
const UploadUserData = lazy(() =>
  import("../containers/Dashboard/Student/UploadUserData")
);

const Maintenance = lazy(() => import("../containers/Maintenance"));
const InternshipRequest = lazy(() =>
  import("../components/users/admin/InternshipRequest")
);
const MaintainCompany = lazy(() =>
  import("../components/users/admin/MaintainCompany")
);

export const adminRoutes = (isAuthenticated, userRole) => ({
  path: "/admin",
  element:
    isAuthenticated && userRole === "ROLE_ADMIN" ? (
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
      path: "profile",
      element: <Profile />,
    },
    {
      path: "users",
      element: <SelectUsers />,
    },

    {
      path: "students",
      element: <UserListOfAdmin />,
    },
    {
      path: "news",
      element: <SelectNews />,
    },
    {
      path: "feedbacks",
      element: <Maintenance />,
    },
    {
      path: "training-session",
      element: <Maintenance />,
    },
    {
      path: "internship-requests",
      element: <InternshipRequest />,
    },
    {
      path: "internship-requests/student-requests",
      element: <Maintenance />,
    },
    {
      path: "internship-requests/maintain-company-list",
      element: <MaintainCompany />,
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
      path: "companies",
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
    {
      path: "upload",
      children: [{ path: "user-data", element: <UploadUserData /> }],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ],
});
