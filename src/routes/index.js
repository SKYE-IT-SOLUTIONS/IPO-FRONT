import { publicRoutes } from "./public";
import { adminRoutes } from "./admin";
import { studentRoutes } from "./student";
import { companyRoutes } from "./company";

const routes = (isAuthenticated, userRole) => [
  publicRoutes(isAuthenticated, userRole),
  adminRoutes(isAuthenticated, userRole),
  studentRoutes(isAuthenticated, userRole),
  companyRoutes(isAuthenticated, userRole),
];

export default routes;
