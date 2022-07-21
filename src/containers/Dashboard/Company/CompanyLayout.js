import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import LogoutIcon from "@mui/icons-material/Logout";
// import TopLogoBar from "../../components/TopLogoBar";
import NavigationBar from "../../../components/mui/NavigationBar";

const sideBarItems = [
  { path: "/company/dashboard", icon: <DashboardIcon />, text: "Dashboard" },
  { path: "/company/news", icon: <NewspaperIcon />, text: "Updates" },
  { path: "/company/job", icon: <WorkIcon />, text: "Job" },
  {
    path: "/company/training-session",
    icon: <FollowTheSignsIcon />,
    text: "Training Session",
  },
  {
    path: "/logout",
    icon: <LogoutIcon />,
    text: "Logout",
  },
];

const CompanyLayout = () => {
  return (
    <>
      {/* <TopLogoBar /> */}
      <NavigationBar title="IPO" sideBarItems={sideBarItems} />
    </>
  );
};

export default CompanyLayout;
