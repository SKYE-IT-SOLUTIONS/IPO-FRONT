import NotFound from "./containers/404";
import { Navigate } from "react-router-dom";
import Home from "./containers/Home";
import HomeContent from "./containers/HomeContent";
import AddJobPost from "./components/AddJobPost";
import PostJob from "./components/PostJob";
import NewsView from "./components/NewsView";
import AddNewsPost from "./components/AddNewsPost";

import Dashboard from "./containers/Dashboard/Dashboard";
import UserList from "./containers/Dashboard/Users/UserList";
import NewsList from "./containers/Dashboard/News/NewsList";

const routes = (isAuthenticated) => [
  {
    path: "/admin",
    element: isAuthenticated ? <Dashboard /> : <Navigate to="/login" />,
    children: [
      { path: "/admin/dashboard", element: <h1>Dash</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <HomeContent /> },
      { path: "404", element: <NotFound /> },
      { path: "home", element: <HomeContent /> },
      { path: "/addJob", element: <AddJobPost /> },
      { path: "/jobPost", element: <PostJob /> },
      { path: "/news", element: <NewsView /> },
      { path: "/addnews", element: <AddNewsPost /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/ass",
    element: <h1>Hello</h1>,
    children: [
      {
        path: "login",
        element: isAuthenticated ? <Navigate to="/" /> : <Navigate to="/404" />,
      },
      { path: "register", element: "" },
      { path: "delivery", element: "" },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard/users", element: <UserList/> },
      { path: "/dashboard/news", element: <NewsList/> },
      { path: "delivery", element: "" },
    ],
  },
];

export default routes;
