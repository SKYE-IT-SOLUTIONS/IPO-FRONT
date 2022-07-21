import { lazy } from "react";
import { Navigate } from "react-router-dom";

import StudentLayout from "../containers/Dashboard/StudentLayout";

const StudentDashboard = lazy(() =>
  import("../containers/Dashboard/Student/Dashboard")
);
const Profile = lazy(() => import("../containers/Dashboard/common/Profile"));
const TrainingSession = lazy(() =>
  import("../containers/Dashboard/Student/TrainingSession")
);
const Internship = lazy(() =>
  import("../containers/Dashboard/Student/internship")
);
const CvGenerate = lazy(() =>
  import("../containers/Dashboard/Student/CvGenerate")
);
const News = lazy(() => import("../containers/Dashboard/common/News"));
const Job = lazy(() => import("../containers/Dashboard/common/Job"));
const Feedback = lazy(() => import("../containers/Dashboard/common/Feedback"));

export const studentRoutes = (isAuthenticated, userRole) => ({
  path: "/student",
  element:
    (isAuthenticated && userRole === "ROLE_STUDENT") || true ? (
      <StudentLayout />
    ) : (
      <Navigate to="/login" />
    ),
  children: [
    { index: true, element: <Navigate to="/student/dashboard" /> },
    {
      path: "dashboard",
      element: <StudentDashboard />,
    },
    {
      path: "news",
      element: <News />,
    },
    {
      path: "job",
      element: <Job />,
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
      element: <CvGenerate />,
    },
    { path: "*", element: <Navigate to="/404" /> },
  ],
});
