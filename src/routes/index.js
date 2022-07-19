import { publicRoutes } from "./public";
import { adminRoutes } from "./admin";
import { studentRoutes } from "./student";
import { companyRoutes } from "./company";

const routes = (...args) => [
  publicRoutes(...args),
  adminRoutes(...args),
  studentRoutes(...args),
  companyRoutes(...args),
];

export default routes;
