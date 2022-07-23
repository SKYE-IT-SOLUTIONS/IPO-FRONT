import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FeedbackIcon from "@mui/icons-material/Feedback";
import WorkIcon from "@mui/icons-material/Work";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LogoutIcon from "@mui/icons-material/Logout";

// import TopLogoBar from "../../components/TopLogoBar";
import NavigationBar from "../../../components/navbar&drawer/NavigationBar";

const sideBarItems = [
  { path: "/student/dashboard", icon: <DashboardIcon />, text: "Dashboard" },
  { path: "/student/updates", icon: <NewspaperIcon />, text: "Updates" },
  { path: "/student/jobs", icon: <WorkIcon />, text: "Jobs" },
  { path: "/student/feedback", icon: <FeedbackIcon />, text: "Feedback" },

  {
    path: "/student/training-session",
    icon: <FollowTheSignsIcon />,
    text: "Training Session",
  },
  {
    path: "/student/internship",
    icon: <EngineeringIcon />,
    text: "Internship",
  },
  {
    path: "/student/cv-generate",
    icon: <PictureAsPdfIcon />,
    text: "CV Generate",
  },
  {
    path: "/logout",
    icon: <LogoutIcon />,
    text: "Logout",
  },
];

const StudentLayout = () => {
  return (
    <>
      {/* <TopLogoBar /> */}
      <NavigationBar title="Student" sideBarItems={sideBarItems} />
    </>
  );
};

export default StudentLayout;
