import NotFound from './containers/404';
import { Navigate } from 'react-router-dom';
import MainLayout from './containers/MainLayout';
import HomeContent from './containers/HomeContent';
import AddJobPost from './components/AddJobPost';
import PostJob from './components/PostJob'
import NewsView from './components/NewsView';
import AddNewsPost from './components/AddNewsPost';
import Spinner from './components/Spinner';
// import AdminLayout from './containers/AdminLayout';
// import Dashboard from './containers/Dashboard/index';
import JobList from './containers/JobList';

//Testing Components
import MapView from './components/MapViewUpdated';

import AdminLayout from "./containers/Dashboard/AdminLayout";
import StudentLayout from "./containers/Dashboard/StudentLayout";
import CompanyLayout from "./containers/Dashboard/CompanyLayout";

import { default as UserListOfAdmin } from "./containers/Dashboard/Admin/Users/UserList";
import { default as NewsListOfAdmin } from "./containers/Dashboard/Admin/News/NewsList";
import { default as JobListOfAdmin } from "./containers/Dashboard/Admin/Jobs/JobList";
import { default as CompanyListOfAdmin } from "./containers/Dashboard/Admin/Company/CompanyList";


const routes = (isAuthenticated) => [
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { path: '/', element: <HomeContent/> },
        { path: '404', element: <NotFound /> },
        { path: 'home', element: <HomeContent/> },
        { path: 'addJob', element: <AddJobPost/> },
        { path: 'jobs', element: <JobList/> },
        { path: 'job/:id', element: <PostJob/> },
        { path: 'news/:id', element: <NewsView/> },
        { path: 'news/preview', element: <NewsView/> },
        { path: 'addNews', element: <AddNewsPost/> },
        { path: 'spinner', element: <Spinner/> },
        { path: 'test', element:<MapView/> },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },
    {
      path: "/admin",
      element: true ? <AdminLayout /> : <Navigate to="/login" />,
      children: [
        { path: "/admin/dashboard/user", element: <UserListOfAdmin /> },
        { path: "/admin/dashboard/news", element: <NewsListOfAdmin /> },
        { path: "/admin/dashboard/job", element: <JobListOfAdmin /> },
        { path: "/admin/dashboard/company", element: <CompanyListOfAdmin /> },
        { path: "/admin/dashboard/settings", element: <h1>Admin Settings</h1> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/student",
      element: true ? <StudentLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/student/dashboard/profile",
          element: <h1>Profile view of student</h1>,
        },
        {
          path: "/student/dashboard/news",
          element: <h1>News List of student</h1>,
        },
        { path: "/student/dashboard/job", element: <h1>Job list of student</h1> },
        {
          path: "/student/dashboard/feedback",
          element: <h1>Feedback view of student</h1>,
        },
        {
          path: "/student/dashboard/settings",
          element: <h1>Student Settings</h1>,
        },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/company",
      element: true ? <CompanyLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/company/dashboard/profile",
          element: <h1>Profile view of company</h1>,
        },
        {
          path: "/company/dashboard/news",
          element: <h1>News List of company</h1>,
        },
        { path: "/company/dashboard/job", element: <h1>Job list of student</h1> },
        {
          path: "/company/dashboard/settings",
          element: <h1>Student Settings</h1>,
        },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ];
  
  export default routes;
