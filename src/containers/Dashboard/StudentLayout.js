import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FeedbackIcon from "@mui/icons-material/Feedback";
import WorkIcon from "@mui/icons-material/Work";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// import TopLogoBar from "../../components/TopLogoBar";
import NavigationBar from "../../components/mui/NavigationBar";

const sideBarItems = [
  { path: "/student/dashboard", icon: <DashboardIcon />, text: "Dashboard" },
  { path: "/student/news", icon: <NewspaperIcon />, text: "News" },
  { path: "/student/job", icon: <WorkIcon />, text: "Job" },
  { path: "/student/feedback", icon: <FeedbackIcon />, text: "Feedback" },
  { path: "/student/profile", icon: <AccountBoxIcon />, text: "Profile" },

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
];

const StudentLayout = () => {
  return (
    <>
      {/* <TopLogoBar /> */}
      <NavigationBar title="IPO" sideBarItems={sideBarItems} />
    </>
  );
};

export default StudentLayout;
