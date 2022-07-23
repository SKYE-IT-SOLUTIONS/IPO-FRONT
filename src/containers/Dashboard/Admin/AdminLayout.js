import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FeedbackIcon from "@mui/icons-material/Feedback";
import WorkIcon from "@mui/icons-material/Work";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// import TopLogoBar from "../../components/TopLogoBar";
import NavigationBar from "../../../components/navbar&drawer/NavigationBar";

const sideBarItems = [
  { path: "/admin/dashboard", icon: <DashboardIcon />, text: "Dashboard" },
  { path: "/admin/users", icon: <AccountCircleIcon />, text: "Users" },
  { path: "/admin/news", icon: <NewspaperIcon />, text: "Updates" },
  { path: "/admin/job", icon: <WorkIcon />, text: "Job" },
  { path: "/admin/feedbacks", icon: <FeedbackIcon />, text: "Feedback" },

  {
    path: "/admin/training-session",
    icon: <FollowTheSignsIcon />,
    text: "Training Session Requests",
  },
  {
    path: "/admin/internship-requests",
    icon: <EngineeringIcon />,
    text: "Internship Requests",
  },
  {
    path: "/admin/upload/user-data",
    icon: <CloudUploadIcon />,
    text: "Upload Userdata",
  },
  {
    path: "/logout",
    icon: <LogoutIcon />,
    text: "Logout",
  },
];

const AdminLayout = () => {
  return (
    <>
      {/* <TopLogoBar /> */}
      <NavigationBar title="Admin" sideBarItems={sideBarItems} />
    </>
  );
};

export default AdminLayout;
