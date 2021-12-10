import NotFound from './containers/404';
import { Navigate } from 'react-router-dom';
import Home from './containers/Home';
import HomeContent from './containers/HomeContent';
import AddJobPost from './components/AddJobPost';
import PostJob from './components/PostJob'
import NewsView from './components/NewsView';
import AddNewsPost from './components/AddNewsPost';
import { isUser } from './api/auth/authAPI';

const auth = async () => {
  const {status, error} = await isUser();
  console.log(error);
  return status;
};

const routes = () => [
    {
      path: '/admin',
      element: auth() ? <h1>UserLogged</h1> : <Navigate to='/login' />,
      children: [
        { path: 'dashboard/ongoing', element: "" },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },
    {
      path: '/',
      element: <Home/>,
      children: [
        { path: '/', element: <HomeContent/> },
        { path: '404', element: <NotFound /> },
        { path: 'home', element: <HomeContent/> },
        { path: '/addJob', element: <AddJobPost/> },
        { path: '/jobPost', element: <PostJob/> },
        { path: '/news', element: <NewsView/> },
        { path: '/addnews', element: <AddNewsPost/> },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },{
      path: '/ass',
      element: <h1>Hello</h1>,
      children: [
        { path: 'login', element: auth() ? <Navigate to='/' /> : <Navigate to='/404' /> },
        { path: 'register', element:"" },
        { path: 'delivery', element: "" },
      ]
    }
  ];
  
  export default routes;