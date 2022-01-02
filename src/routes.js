import React from 'react'
import Spinner from './components/Spinner';
import { Navigate } from "react-router-dom";

import MainLayout from './containers/MainLayout';
import AdminLayout from './containers/Dashboard/AdminLayout';
import StudentLayout from './containers/Dashboard/StudentLayout';
import CompanyLayout from './containers/Dashboard/CompanyLayout';

const NotFound = React.lazy(()=>import('./containers/404'));
const HomeContent = React.lazy(()=>import('./containers/HomeContent'));
const AddJobPost = React.lazy(()=>import('./components/AddJobPost'));
const PostJob = React.lazy(()=>import('./components/PostJob'));
const NewsView = React.lazy(()=>import('./components/NewsView'));
const AddNewsPost = React.lazy(()=>import('./components/AddNewsPost'));
const JobList = React.lazy(()=>import('./containers/JobList'));
const EditContact = React.lazy(()=>import('./components/EditContact'));
const SubmitCv = React.lazy(()=>import('./components/Submitcv'));
const RequestGraduate = React.lazy(()=>import('./components/Reuestgraduate'));
const SelectNews = React.lazy(()=>import('./components/SelectNews'));
const SelectJob = React.lazy(()=>import('./components/SelectJob'));
const AdminDashboard = React.lazy(()=>import('./components/AdminDashboard'));
const UserListOfAdmin = React.lazy(()=>import("./containers/Dashboard/Admin/Users/UserList"));
const JobListOfAdmin = React.lazy(()=>import("./containers/Dashboard/Admin/Jobs/JobList"));
const NewsListOfAdmin = React.lazy(()=>import("./containers/Dashboard/Admin/News/NewsList"));
const CompanyListOfAdmin = React.lazy(()=>import('./containers/Dashboard/Admin/Company/CompanyList'));
const StudentRegister = React.lazy(()=>import('./components/StudentRegister'));
const CompanyRegister = React.lazy(()=>import('./components/CompanyRegister'));
const SendMail = React.lazy(() => import('./components/SendMail'));
const EditNews = React.lazy(() => import('./components/EditNews'));
const EditJob = React.lazy(() => import('./components/EditJob'));
const NewsCollection=React.lazy(()=>import("./components/NewsCollection"));
const LoginPage = React.lazy(()=>import("./components/LoginPage"));
const RegistrationDashboard = React.lazy(()=>import("./components/Register"));
const Achievement = React.lazy(()=>import("./components/Achievement"));
const AchievementView = React.lazy(()=>import("./components/AchievementView"));
const Requestworkshop = React.lazy(()=>import("./components/Requestworkshop"));
const GoogleCaptcha = React.lazy(()=>import("./components/Captcha"));

//Include the view enhance the user experience, use suspense and fallback
const View = (props)=>{
  return( <React.Suspense fallback={<Spinner/>}>{props.children}</React.Suspense>);
}

const routes = (isAuthenticated,userRole) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <View><HomeContent/></View> },
      { path: "404", element: <View><NotFound/></View> },
      { path: "home", element: <View><HomeContent/></View> },
      { path: "login", element: <View><LoginPage/></View> },
      { path: "jobs", element: <View><JobList/></View> },
      { path: "job/:id", element: <View><NewsView/></View> },
      { path: "editJob/:id", element: <View><EditJob/></View> },
      { path: "job/preview", element: <View><PostJob/></View> },
      { path: "news/:id", element: <View><NewsView/></View> },
      // { path: "spinner", element: <Spinner /> },
      { path: "requestPerson", element: <View><RequestGraduate/></View> },
      { path: 'register', element: <View><RegistrationDashboard/></View> },
      { path: 'register/companyReg', element: <View><CompanyRegister/></View> },
      { path: 'register/studentReg', element: <View><StudentRegister/></View> },
      { path: 'register/sendMail', element: <View><SendMail/></View> },
      { path: 'selectNews', element: <View><SelectNews/></View> },
      { path: 'allNews', element: <View><NewsCollection/></View> },
      { path: 'achievements', element: <View><Achievement/></View> },
      { path: 'achievement/:id', element: <View><AchievementView/></View> },
      // { path: 'test', element: <UploadImage/> },
      { path: 'captcha', element: <View><GoogleCaptcha/></View> },
      { path: "*", element: <Navigate to="/404" /> },

      
    ],
  },
  {
    path: "/admin",
    element: (isAuthenticated && userRole === "ROLE_ADMIN" ) || true ? <AdminLayout /> : <Navigate to="/login" />,
    children: [
      { path: "dashboard", element:  <View><AdminDashboard/></View> },
      { path: "user", element: <View><UserListOfAdmin/></View> },
      { path: "news", element: <View><SelectNews/></View> },
      { path: "news/list", element: <View><NewsListOfAdmin/></View> },
      { path: 'editNews/:id', element: <View><EditNews/></View> },
      { path: "news/addNews", element: <View><AddNewsPost/></View> },
      { path: "news/preview", element: <View><NewsView /> </View> },
      { path: "news/:id", element: <View><NewsView/></View> },
      { path: "job", element: <View><SelectJob/></View> },
      { path: "job/:id", element: <View><PostJob /></View> },
      { path: "job/preview", element: <View><PostJob /></View> },
      { path: "job/list", element: <View><JobListOfAdmin/></View> },
      { path: 'editJob/:id', element: <h1>Edit Job</h1>},
      { path: "job/addJob", element: <View><AddJobPost/></View> },
      { path: "company", element: <View><CompanyListOfAdmin/></View> },
      { path: "settings", element:  <View><EditContact /></View>},//<h1>Admin Settings</h1>
      { path: "editContact", element: <View><EditContact /></View>},//<h1>Admin Settings</h1>
      { path: "requestWorkshop", element: <View><Requestworkshop/></View>},
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
      {path: "services", element: <h1>Student Services</h1> },
      {path: "submitCv", element: <SubmitCv /> },
      {path: "feedback", element: <h1>Feedback view of student</h1>},
      {path: "settings", element: <h1>Student Settings</h1>},
      {path: "/student", element: <Navigate to="/404" /> },
      {path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/company",
    element: (isAuthenticated && userRole === "ROLE_COMPANY" ) || true ? <CompanyLayout /> : <Navigate to="/login" />,
    children: [
      {path: "dashboard", element: <h1>Profile view of company</h1>},
      {path: "news", element: <h1>News List of company</h1>},
      {path: "job", element: <h1>Job list of student</h1> },
      {path: "settings", element: <h1>Student Settings</h1>},
      {path: "/company", element: <Navigate to="/404" />},
      {path: "*", element: <Navigate to="/404" />},
    ],
  },
];

export default routes;
