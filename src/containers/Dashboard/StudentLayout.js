import AccountBoxIcon from "@mui/icons-material/AccountBox";

import TopLogoBar from "../../components/TopLogoBar";
import NavigationBar from "../../components/mui/NavigationBar";

const sideBarItems = [
  { path: "/student/dashboard", icon: <AccountBoxIcon />, text: "Dashboard" },
  { path: "/student/news", icon: <AccountBoxIcon />, text: "News" },
  { path: "/student/job", icon: <AccountBoxIcon />, text: "Job" },
  { path: "/student/feedback", icon: <AccountBoxIcon />, text: "Feedback" },
  { path: "/student/profile", icon: <AccountBoxIcon />, text: "Profile" },
  {
    path: "/student/training-session",
    icon: <AccountBoxIcon />,
    text: "Training Session",
  },
  { path: "/student/internship", icon: <AccountBoxIcon />, text: "Internship" },
  {
    path: "/student/cv-generate",
    icon: <AccountBoxIcon />,
    text: "CV Generate",
  },
];

const StudentLayout = () => {
  return (
    <>
      {/* <TopLogoBar /> */}
      <NavigationBar title="ERC System" sideBarItems={sideBarItems} />
    </>
  );
};

export default StudentLayout;
