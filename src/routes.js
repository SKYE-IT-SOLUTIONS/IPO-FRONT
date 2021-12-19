import NotFound from "./containers/404";
import { Navigate } from "react-router-dom";
import MainLayout from "./containers/MainLayout";
import HomeContent from "./containers/HomeContent";
import AddJobPost from "./components/AddJobPost";
import PostJob from "./components/PostJob";
import NewsView from "./components/NewsView";
import AddNewsPost from "./components/AddNewsPost";
import Spinner from "./components/Spinner";
// import AdminLayout from './containers/AdminLayout';
// import Dashboard from './containers/Dashboard/index';
import JobList from "./containers/JobList";
import EditContact from "./components/EditContact";
import SubmitCv from "./components/Submitcv";
import RequestGraduate from "./components/Reuestgraduate";
import RegistrationDashboard from "./components/Register";
import SelectNews from './components/SelectNews'

//Testing Components
// import MapView from "./components/MapViewUpdated";

import AdminLayout from "./containers/Dashboard/AdminLayout";
import StudentLayout from "./containers/Dashboard/StudentLayout";
import CompanyLayout from "./containers/Dashboard/CompanyLayout";

import { default as UserListOfAdmin } from "./containers/Dashboard/Admin/Users/UserList";
import { default as NewsListOfAdmin } from "./containers/Dashboard/Admin/News/NewsList";
import { default as JobListOfAdmin } from "./containers/Dashboard/Admin/Jobs/JobList";
import { default as CompanyListOfAdmin } from "./containers/Dashboard/Admin/Company/CompanyList";
import StudentRegister from './components/StudentRegister';
import CompanyRegister from './components/CompanyRegister';
import SendMail from './components/SendMail';
import EditNews from './components/EditNews';

const routes = (isAuthenticated,userRole) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomeContent /> },
      { path: "404", element: <NotFound /> },
      { path: "home", element: <HomeContent /> },
      { path: "jobs", element: <JobList /> },
      { path: "job/:id", element: <PostJob /> },
      { path: "job/preview", element: <PostJob /> },
      { path: "news/:id", element: <NewsView /> },
      { path: "spinner", element: <Spinner /> },
      { path: "requestgraduate", element: <RequestGraduate /> },
      { path: 'studentReg', element: <StudentRegister/> },
      { path: 'companyReg', element: <CompanyRegister/> },
      { path: 'sendMail', element: <SendMail/> },
      { path: 'editnews/:id', element: <EditNews/>},
      { path: "submitCv", element: <SubmitCv /> },
      { path: "requestPerson", element: <RequestGraduate /> },
      { path: 'register', element: <RegistrationDashboard/>},
      { path: 'register/companyReg', element: <CompanyRegister/> },
      { path: 'register/studentReg', element: <StudentRegister/> },
      { path: 'register/sendMail', element: <SendMail/> },
      { path: 'selectnews', element: <SelectNews/> },
      { path: "*", element: <Navigate to="/404" /> },
      
    ],
  },
  {
    path: "/admin",
    element: (isAuthenticated && userRole === "ROLE_ADMIN" ) || true ? <AdminLayout /> : <Navigate to="/login" />,
    children: [
      { path: "dashboard", element:  <h1>Admin Dashboard</h1> },
      { path: "user", element: <UserListOfAdmin />},
      { path: "news", element: <SelectNews/> },
      { path: "news/addNews", element: <AddNewsPost /> },
      { path: "news/preview", element: <NewsView /> },
      { path: "news/:id", element: <NewsView /> },
      { path: "job", element: <JobListOfAdmin /> },
      { path: "job/addJob", element: <AddJobPost /> },
      { path: "company", element: <CompanyListOfAdmin /> },
      { path: "settings", element:  <EditContact />},//<h1>Admin Settings</h1>
      { path: "editContact", element: <EditContact /> },
      { path: "/admin", element: <Navigate to="/404" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/student",
    element: (isAuthenticated && userRole === "ROLE_STUDENT" )  ? <StudentLayout /> : <Navigate to="/login" />,
    children: [
      {path: "dashboard", element: <h1>Profile view of student</h1>},
      {path: "news", element: <h1>News List of student</h1>},
      {path: "job", element: <h1>Job list of student</h1> },
      {path: "feedback", element: <h1>Feedback view of student</h1>},
      {path: "settings", element: <h1>Student Settings</h1>},
      {path: "/student", element: <Navigate to="/404" /> },
      {path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/company",
    element: (isAuthenticated && userRole === "ROLE_COMPANY" ) ? <CompanyLayout /> : <Navigate to="/login" />,
    children: [
      {path: "/company/dashboard", element: <h1>Profile view of company</h1>},
      {path: "/company/dashboard/news", element: <h1>News List of company</h1>},
      {path: "/company/dashboard/job", element: <h1>Job list of student</h1> },
      {path: "/company/dashboard/settings", element: <h1>Student Settings</h1>},
      {path: "/company", element: <Navigate to="/404" />},
      {path: "*", element: <Navigate to="/404" />},
    ],
  },
];

export default routes;
