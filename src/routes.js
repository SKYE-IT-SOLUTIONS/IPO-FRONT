import NotFound from './containers/404';
import { Navigate } from 'react-router-dom';
import MainLayout from './containers/MainLayout';
import HomeContent from './containers/HomeContent';
import AddJobPost from './components/AddJobPost';
import PostJob from './components/PostJob'
import NewsView from './components/NewsView';
import AddNewsPost from './components/AddNewsPost';
import Spinner from './components/Spinner';
import AdminLayout from './containers/AdminLayout';
import Dashboard from './containers/Dashboard/index';
import JobList from './containers/JobList';
import Editcontact from './components/EditContact';
import Submitcv from './components/Submitcv';
import RequestGraduate from './components/Reuestgraduate';

//Testing Components
import MapView from './components/MapViewUpdated';


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
        { path: '*', element: <Navigate to='/404' /> },
        { path: 'editcontact', element: <Editcontact/> },
        { path: 'submitcv', element: <Submitcv/> },
        { path: 'requestgraduate', element: <RequestGraduate/> },

      ]
    },
    {
      path: '/admin',
      element: true ? <AdminLayout/> : <Navigate to='/login' />,
      children: [
        { path: 'dashboard', element: <Dashboard/> },
        { path: 'dashboard/ongoing', element: "" },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    }
  ];
  
  export default routes;