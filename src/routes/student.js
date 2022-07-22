import { lazy } from "react";
import { Navigate } from "react-router-dom";

import StudentLayout from "../containers/Dashboard/Student/StudentLayout";

// const StudentDashboard = lazy(() =>
//   import("../containers/Dashboard/Student/Dashboard")
// );
const Profile = lazy(() => import("../containers/Dashboard/common/Profile"));
const TrainingSession = lazy(() =>
  import("../containers/Dashboard/Student/TrainingSession")
);
const Internship = lazy(() =>
  import("../containers/Dashboard/Student/internship")
);
// const CvGenerate = lazy(() =>
//   import("../containers/Dashboard/Student/CvGenerate")
// );
const Updates = lazy(() => import("../containers/Dashboard/common/Updates"));
const Update = lazy(() => import("../containers/Dashboard/common/Update"));
const Jobs = lazy(() => import("../containers/Dashboard/common/Jobs"));
const Job = lazy(() => import("../containers/Dashboard/common/Job"));
const Feedback = lazy(() => import("../containers/Dashboard/common/Feedback"));
const Maintenance = lazy(() => import("../containers/Maintainance"));

export const studentRoutes = (isAuthenticated, userRole) => ({
  path: "/student",
  element:
    isAuthenticated && userRole === "ROLE_STUDENT" ? (
      <StudentLayout />
    ) : (
      <Navigate to="/login" />
    ),
  children: [
    { index: true, element: <Navigate to="/student/dashboard" /> },
    {
      path: "dashboard",
      // element: <StudentDashboard />,
      element: <Profile />,
    },
    {
      path: "updates",
      children: [
        { index: true, element: <Updates /> },
        { path: ":id", element: <Update /> },
      ],
    },
    {
      path: "jobs",
      children: [
        { index: true, element: <Jobs /> },
        { path: ":id", element: <Job /> },
      ],
    },
    {
      path: "feedback",
      element: <Feedback />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "training-session",
      element: <TrainingSession />,
    },
    {
      path: "internship",
      element: <Internship />,
    },
    {
      path: "cv-generate",
      element: <Maintenance />,
    },
    { path: "*", element: <Navigate to="/404" /> },
  ],
});
