import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLoggedIn, setUserRole, setUserId } from "../../../store/userSlice";

let heighty=window.scrollY;

const Body = styled.div`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  position: relative;
  min-height: 615px;
  height: heighty;
  min-width: 40px;
  overflow: hidden;
  transition: all 0.5s ease;
  @media only screen and (min-width: 1024px) {
    width: ${(props) => (props.active ? "285px" : "86px")};
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    width: ${(props) => (props.active ? "285px" : "85px")};
  }
  @media (min-width: 500px) and (max-width: 700px) {
    width: ${(props) => (props.active ? "285px" : "100px")};
  }
  @media (min-width: 400px) and (max-width: 500px) {
    width: ${(props) => (props.active ? "500px" : "150px")};
  }
  @media (min-width: 300px) and (max-width: 400px) {
    width: ${(props) => (props.active ? "500px" : "150px")};
  }
  @media (max-width: 300px) {
    width: ${(props) => (props.active ? "285px" : "40px")};
  }
`;
const SideNavBarContainer = styled.div`
  position: relative;
  z-index: 999;
  left: 0;
  height: 100%;
  width: ${(props) => (props.active ? "240px" : "80px")};
  background-color: ${(props) => (props.color ? props.color : "#11101d")};
  padding: 6px 16px;
  transition: all 0.5s ease;
`;
const NavHeder = styled.div`
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: ${(props) => (props.active ? "1" : "0")};
  cursor: pointer;
  /* pointer-events: none; */
  transition: all 0.5s ease;
  
`;
const NavHeaderIcon = styled.i`
  @media only screen and (min-width: 1024px) {
    font-size: 28px;
    margin-right: 5px;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    font-size: 25px;
    margin-right: 5px;
  }
  @media (min-width: 300px) and (max-width: 700px) {
    font-size: 20px;
    margin-right: 5px;
  }
  @media (max-width: 300px) {
    font-size: 18px;
    margin-right: 5px;
  }
`;
const NavHeaderName = styled.div`
  
  font-weight: 500;
  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    font-size: 10px;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 8px;
  }
  @media (max-width: 300px) {
    font-size: 0px;
  }
`;
const MenuIcon = styled.i`
  position: absolute;
  color: #fff;
  text-align: center;
  transform: translateX(-50%);

  @media only screen and (min-width: 1024px) {
    left: ${(props) => (props.active ? "86%" : "50%")};
  top: 6px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  line-height: 50px;  
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    left: ${(props) => (props.active ? "75%" : "45%")};
  top: 6px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  line-height: 50px;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    left: ${(props) => (props.active ? "58%" : "40%")};
  top: 6px;
  font-size: 20px;
  height: 0px;
  width: 100px;
  line-height: 50px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    left: ${(props) => (props.active ? "43%" : "40%")};
  top: 6px;
  font-size: 15px;
  height: 0px;
  width: 100px;
  line-height: 50px;
  }
  @media (min-width: 300px) and (max-width: 400px) {
    left: ${(props) => (props.active ? "43%" : "40%")};
  top: 6px;
  font-size: 0px;
  height: 0px;
  width: 100px;
  line-height: 50px;
  }
  @media (max-width: 300px) {
    left: ${(props) => (props.active ? "40%" : "50%")};
  top: 6px;
  font-size: 0px;
  height: 20px;
  width: 20px;
  line-height: 50px;
  margin-left: -15px;
  }
`;
const NavBody = styled.ul`
  margin-top: 15px;
  margin-left: ${(props) => (props.active ? "15px" : "0px")};
  padding: 0px;
  align-items: center;
`;
const NavListItem = styled.li`
  position: relative;
  height: 50%;
  width: 100%;
  list-style: none;
  line-height: 50px;
`;
const NavListLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.5s ease;
  border-radius: 12px;
  white-space: nowrap;
  :hover {
    color: ${(props) => (props.color ? props.color : "#11101d")};
    background-color: #fff;
  }
`;
const NavListItemIcon = styled.i`
  text-align: center;

  @media only screen and (min-width: 1024px) {
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    font-size: 22px;  
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    height: 40px;
    min-width: 40px;
    border-radius: 12px;
    line-height: 40px;
    font-size: 20px;  
  }
  @media (min-width: 300px) and (max-width: 700px) {
    height: 30px;
    min-width: 30px;
    border-radius: 12px;
    line-height: 30px;
    font-size: 18px;
  }
  @media (max-width: 300px) {
    height: 8px;
    min-width: 10px;
    border-radius: 8px;
    line-height: 10px;
    font-size: 15px;
  }
`;
const NavListItemName = styled.span`
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => (props.active ? "none" : "auto")};
  transition: all 0.5s ease;
  
  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 400px) and (max-width: 700px) {
    font-size: 12px;
  }
  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 10px;
  }
  @media (max-width: 300px) {
    font-size: 8px;
  }
`;
const NavListItemTooltip = styled.span`
  position: absolute;
  left: 122px;
  top: 0px;
  transform: translate(-40%, -35%);
  border-radius: 6px;
  height: 35px;
  width: 122px;
  background: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: ${(props) => (props.active ? "none" : "block")};

  ${NavListItem}:hover & {
    transition: all 0.5s ease;
    opacity: 1;
    top: 50%;
  }
`;
const CompanySideNav = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [active, setActive] = useState(true);

  function handleResize() {
    console.log("Inner", window.scrollY);
    if (window.innerWidth < 1214) {
      setActive(false);
    } else {
      setActive(true);
    }
  }
  window.addEventListener("resize", handleResize);
  return (
    <React.Fragment>
      <Body active={active}>
        <SideNavBarContainer active={active}>
          <NavHeder active={active}>
            <NavHeaderIcon className="bx bx-grid-alt"></NavHeaderIcon>
            <NavHeaderName>Dashboard</NavHeaderName>
          </NavHeder>
          <MenuIcon
            className="bx bx-menu"
            active={active}
            onClick={() => setActive(!active)}
          ></MenuIcon>

          <NavBody>
            <NavListItem>
              <NavListLink onClick={() => navigate("/home")}>
                <NavListItemIcon className="bx bx-home"></NavListItemIcon>
                <NavListItemName active={active}>Home</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Home</NavListItemTooltip>
            </NavListItem>


            <NavListItem>
              <NavListLink onClick={() => navigate("/company/news")}>
                <NavListItemIcon className="bx bx-mail-send"></NavListItemIcon>
                <NavListItemName active={active}>News</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>News</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink onClick={() => navigate("/company/job")}>
                <NavListItemIcon className="bx bx-shopping-bag"></NavListItemIcon>
                <NavListItemName active={active}>Jobs</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Jobs</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink
                onClick={() => navigate("/company/settings")}
              >
                <NavListItemIcon className="bx bx-cog"></NavListItemIcon>
                <NavListItemName active={active}>Settings</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Settings</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink  onClick={ () => {
                          dispatch(setUserLoggedIn("SSNB"));
                          dispatch(setUserRole(""));
                          dispatch(setUserId(""));
                          navigate("/home");
                      }}>
                <NavListItemIcon className="bx bx-log-out"></NavListItemIcon>
                <NavListItemName active={active}  href="/"
                     >Logout</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Logout</NavListItemTooltip>
            </NavListItem>

          </NavBody>
        </SideNavBarContainer>
      </Body>
    </React.Fragment>
  );
};

export default CompanySideNav;
