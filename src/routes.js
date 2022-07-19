import React from "react";
import Spinner from "./components/Spinner";
import { Navigate } from "react-router-dom";

import MainLayout from "./containers/MainLayout";
import AdminLayout from "./containers/Dashboard/AdminLayout";
import StudentLayout from "./containers/Dashboard/StudentLayout";
import CompanyLayout from "./containers/Dashboard/CompanyLayout";

const NotFound = React.lazy(() => import("./containers/404"));
const Maintainance = React.lazy(() => import("./containers/Maintainance"));
const LockedUser = React.lazy(() => import("./containers/LockedUser"));
const HomeContent = React.lazy(() => import("./containers/HomeContent"));
const AddJobPost = React.lazy(() => import("./components/AddJobPost"));
const PostJob = React.lazy(() => import("./components/PostJob"));
const NewsView = React.lazy(() => import("./components/NewsView"));
const AddNewsPost = React.lazy(() => import("./components/AddNewsPost"));
const JobList = React.lazy(() => import("./containers/JobList"));
const EditContact = React.lazy(() => import("./components/EditContact"));
const RequestGraduate = React.lazy(() => import("./components/Reuestgraduate"));
const SelectNews = React.lazy(() => import("./components/SelectNews"));
const SelectJob = React.lazy(() => import("./components/SelectJob"));
const AdminDashboard = React.lazy(() => import("./components/AdminDashboard"));
const UserListOfAdmin = React.lazy(() =>
  import("./containers/Dashboard/Admin/Users/UserList")
);
const JobListOfAdmin = React.lazy(() =>
  import("./containers/Dashboard/Admin/Jobs/JobList")
);
const JobListOfCompany = React.lazy(() =>
  import("./containers/Dashboard/Company/Jobs/JobListCompany")
);
const NewsListOfAdmin = React.lazy(() =>
  import("./containers/Dashboard/Admin/News/NewsList")
);
const NewsListOfCompany = React.lazy(() =>
  import("./containers/Dashboard/Company/News/NewsListCompany")
);
const NewsListOfAdminNonApproved = React.lazy(() =>
  import("./containers/Dashboard/Admin/News/NewsListNonApproved")
);
const CompanyListOfAdmin = React.lazy(() =>
  import("./containers/Dashboard/Admin/Company/CompanyList")
);
const StudentRegister = React.lazy(() =>
  import("./components/StudentRegister")
);
const CompanyRegister = React.lazy(() =>
  import("./components/CompanyRegister")
);
const SendMail = React.lazy(() => import("./components/SendMail"));
const EditNews = React.lazy(() => import("./components/EditNews"));
const EditJob = React.lazy(() => import("./components/EditJob"));
const NewsCollection = React.lazy(() => import("./components/NewsCollection"));
const LoginPage = React.lazy(() => import("./components/LoginPage"));
const RegistrationDashboard = React.lazy(() => import("./components/Register"));
const Achievement = React.lazy(() => import("./components/Achievement"));
const AchievementView = React.lazy(() =>
  import("./components/AchievementView")
);
const Requestworkshop = React.lazy(() =>
  import("./components/Requestworkshop")
);
const Requesthall = React.lazy(() => import("./components/Requesthall"));
const Requestground = React.lazy(() => import("./components/Requestground"));
const GoogleCaptcha = React.lazy(() => import("./components/Captcha"));
const FeedbackGuest = React.lazy(() => import("./components/Feedback"));
const NavBarListView = React.lazy(() => import("./components/NavBarListView"));
const OurTeam = React.lazy(() => import("./components/OurTeam"));
const Companydashboard = React.lazy(() =>
  import("./components/Companyprofile")
);

const News = React.lazy(() => import("./containers/Dashboard/common/News"));
const Job = React.lazy(() => import("./containers/Dashboard/common/Job"));
const Feedback = React.lazy(() =>
  import("./containers/Dashboard/common/Feedback")
);
const Profile = React.lazy(() =>
  import("./containers/Dashboard/common/Profile")
);
const TrainingSession = React.lazy(() =>
  import("./containers/Dashboard/Student/TrainingSession")
);
const Internship = React.lazy(() =>
  import("./containers/Dashboard/Student/Internship")
);
const CvGenerate = React.lazy(() =>
  import("./containers/Dashboard/Student/CvGenerate")
);
const StudentDashboard = React.lazy(() =>
  import("./containers/Dashboard/Student/Dashboard")
);

//Include the view enhance the user experience, use suspense and fallback
const View = (props) => {
  return (
    <React.Suspense fallback={<Spinner />}>{props.children}</React.Suspense>
  );
};

const routes = (isAuthenticated, userRole) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <View>
            <HomeContent />
          </View>
        ),
      },
      {
        path: "404",
        element: (
          <View>
            <NotFound />
          </View>
        ),
      },
      {
        path: "423",
        element: (
          <View>
            <LockedUser />
          </View>
        ),
      },
      {
        path: "under-counstructions",
        element: (
          <View>
            <Maintainance />
          </View>
        ),
      },
      {
        path: "home",
        element: (
          <View>
            <HomeContent />
          </View>
        ),
      },
      {
        path: "login",
        element: !isAuthenticated ? (
          <View>
            <LoginPage />
          </View>
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
        element: (
          <View>
            <JobList />
          </View>
        ),
      },
      {
        path: "job/:id",
        element: (
          <View>
            <NewsView />
          </View>
        ),
      },
      {
        path: "editJob/:id",
        element: (
          <View>
            <EditJob />
          </View>
        ),
      },
      {
        path: "job/preview",
        element: (
          <View>
            <PostJob />
          </View>
        ),
      },
      {
        path: "news/:id",
        element: (
          <View>
            <NewsView />
          </View>
        ),
      },
      // { path: "spinner", element: <Spinner /> },
      {
        path: "requestPerson",
        element: (
          <View>
            <RequestGraduate />
          </View>
        ),
      },
      {
        path: "register",
        element: (
          <View>
            <RegistrationDashboard />
          </View>
        ),
      },
      {
        path: "register/companyReg",
        element: (
          <View>
            <CompanyRegister />
          </View>
        ),
      },
      {
        path: "register/studentReg",
        element: (
          <View>
            <StudentRegister />
          </View>
        ),
      },
      {
        path: "register/sendMail",
        element: (
          <View>
            <SendMail />
          </View>
        ),
      },
      {
        path: "selectNews",
        element: (
          <View>
            <SelectNews />
          </View>
        ),
      },
      {
        path: "allNews",
        element: (
          <View>
            <NewsCollection />
          </View>
        ),
      },
      {
        path: "achievements",
        element: (
          <View>
            <Achievement />
          </View>
        ),
      },
      {
        path: "achievement/:id",
        element: (
          <View>
            <AchievementView />
          </View>
        ),
      },
      {
        path: "requestWorkshop",
        element: (
          <View>
            <Requestworkshop />
          </View>
        ),
      },
      {
        path: "request-hall",
        element: (
          <View>
            <Requesthall />
          </View>
        ),
      },
      {
        path: "request-ground",
        element: (
          <View>
            <Requestground />
          </View>
        ),
      },
      {
        path: "requestTraining",
        element: (
          <View>
            <NavBarListView />
          </View>
        ),
      },
      {
        path: "developers",
        element: (
          <View>
            <OurTeam />
          </View>
        ),
      },
      // { path: 'test', element: <UploadImage/> },
      {
        path: "feedback",
        element: (
          <View>
            <FeedbackGuest />
          </View>
        ),
      },
      {
        path: "captcha",
        element: (
          <View>
            <GoogleCaptcha />
          </View>
        ),
      },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/admin",
    element:
      (isAuthenticated && userRole === "ROLE_ADMIN") || true ? (
        <AdminLayout />
      ) : (
        <Navigate to="/login" />
      ),
    children: [
      {
        path: "dashboard",
        element: (
          <View>
            <AdminDashboard />
          </View>
        ),
      },
      {
        path: "user",
        element: (
          <View>
            <UserListOfAdmin />
          </View>
        ),
      },
      {
        path: "news",
        element: (
          <View>
            <SelectNews />
          </View>
        ),
      },
      {
        path: "news/list",
        element: (
          <View>
            <NewsListOfAdmin />
          </View>
        ),
      },
      {
        path: "news/non-approved-list",
        element: (
          <View>
            <NewsListOfAdminNonApproved />
          </View>
        ),
      },
      {
        path: "editNews/:id",
        element: (
          <View>
            <EditNews />
          </View>
        ),
      },
      {
        path: "news/addNews",
        element: (
          <View>
            <AddNewsPost />
          </View>
        ),
      },
      {
        path: "news/preview",
        element: (
          <View>
            <NewsView />{" "}
          </View>
        ),
      },
      {
        path: "news/:id",
        element: (
          <View>
            <NewsView />
          </View>
        ),
      },
      {
        path: "job",
        element: (
          <View>
            <SelectJob />
          </View>
        ),
      },
      {
        path: "job/:id",
        element: (
          <View>
            <PostJob />
          </View>
        ),
      },
      {
        path: "job/preview",
        element: (
          <View>
            <PostJob />
          </View>
        ),
      },
      {
        path: "job/list",
        element: (
          <View>
            <JobListOfAdmin />
          </View>
        ),
      },
      { path: "editJob/:id", element: <h1>Edit Job</h1> },
      {
        path: "job/addJob",
        element: (
          <View>
            <AddJobPost />
          </View>
        ),
      },
      {
        path: "company",
        element: (
          <View>
            <CompanyListOfAdmin />
          </View>
        ),
      },
      {
        path: "settings",
        element: (
          <View>
            <EditContact />
          </View>
        ),
      }, //<h1>Admin Settings</h1>
      {
        path: "editContact",
        element: (
          <View>
            <EditContact />
          </View>
        ),
      }, //<h1>Admin Settings</h1>
      {
        path: "requestWorkshop",
        element: (
          <View>
            <Requestworkshop />
          </View>
        ),
      },
      { path: "/admin", element: <Navigate to="/404" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/student",
    element:
      (isAuthenticated && userRole === "ROLE_STUDENT") || true ? (
        <StudentLayout />
      ) : (
        <Navigate to="/login" />
      ),
    children: [
      { index: true, element: <Navigate to="/student/dashboard" /> },
      {
        path: "dashboard",
        element: (
          <View>
            <StudentDashboard />
          </View>
        ),
      },
      {
        path: "news",
        element: (
          <View>
            <News />
          </View>
        ),
      },
      {
        path: "job",
        element: (
          <View>
            <Job />
          </View>
        ),
      },
      {
        path: "feedback",
        element: (
          <View>
            <Feedback />
          </View>
        ),
      },
      {
        path: "profile",
        element: (
          <View>
            <Profile />
          </View>
        ),
      },
      {
        path: "training-session",
        element: (
          <View>
            <TrainingSession />
          </View>
        ),
      },
      {
        path: "internship",
        element: (
          <View>
            <Internship />
          </View>
        ),
      },
      {
        path: "cv-generate",
        element: (
          <View>
            <CvGenerate />
          </View>
        ),
      },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/company",
    element:
      (isAuthenticated && userRole === "ROLE_COMPANY") || true ? (
        <CompanyLayout />
      ) : (
        <Navigate to="/login" />
      ),
    children: [
      {
        path: "dashboard",
        element: (
          <View>
            <Companydashboard />
          </View>
        ),
      },
      {
        path: "news",
        element: (
          <View>
            <SelectNews />
          </View>
        ),
      },
      {
        path: "news/list",
        element: (
          <View>
            <NewsListOfCompany />
          </View>
        ),
      },
      {
        path: "editNews/:id",
        element: (
          <View>
            <EditNews />
          </View>
        ),
      },
      {
        path: "news/addNews",
        element: (
          <View>
            <AddNewsPost />
          </View>
        ),
      },
      {
        path: "news/preview",
        element: (
          <View>
            <NewsView />{" "}
          </View>
        ),
      },
      {
        path: "news/:id",
        element: (
          <View>
            <NewsView />
          </View>
        ),
      },
      {
        path: "job",
        element: (
          <View>
            <SelectJob />
          </View>
        ),
      },
      {
        path: "job/:id",
        element: (
          <View>
            <PostJob />
          </View>
        ),
      },
      {
        path: "job/preview",
        element: (
          <View>
            <PostJob />
          </View>
        ),
      },
      {
        path: "job/list",
        element: (
          <View>
            <JobListOfCompany />
          </View>
        ),
      },
      { path: "editJob/:id", element: <h1>Edit Job</h1> },
      {
        path: "job/addJob",
        element: (
          <View>
            <AddJobPost />
          </View>
        ),
      },
      { path: "settings", element: <h1>Student Settings</h1> },
      { path: "/company", element: <Navigate to="/404" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
