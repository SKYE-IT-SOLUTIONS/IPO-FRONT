import NotFound from './containers/404';
import { Navigate } from 'react-router-dom';
import Home from './containers/Home';
import HomeContent from './containers/HomeContent';

const routes = (isAuthenticated) => [
    {
      path: '/admin',
      element: isAuthenticated ? "" : <Navigate to='/login' />,
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
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },{
      path: '/',
      element: <h1>Hello</h1>,
      children: [
        { path: 'login', element: isAuthenticated ? <Navigate to='/' /> : <Navigate to='/404' /> },
        { path: 'register', element:"" },
        { path: 'delivery', element: "" },
        { path: 'terms', element: "" },
        { path: 'payments/:requestId', element: "" },
      ]
    },
  ];
  
  export default routes;