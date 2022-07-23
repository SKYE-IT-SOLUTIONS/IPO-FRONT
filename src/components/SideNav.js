import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  position: relative;
  height: 590px;
  width: ${(props) => (props.active ? "285px" : "82px")};
  overflow: hidden;
  transition: all 0.5s ease;
`;
const SideNavBarContainer = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  width: ${(props) => (props.active ? "240px" : "82px")};
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
  pointer-events: none;
  transition: all 0.5s ease;
`;
const NavHeaderIcon = styled.i`
  font-size: 28px;
  margin-right: 5px;
`;
const NavHeaderName = styled.div`
  font-style: 20px;
  font-weight: 400;
`;
const MenuIcon = styled.i`
  position: absolute;
  color: #fff;
  left: ${(props) => (props.active ? "90%" : "50%")};
  top: 6px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
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
  width: 215px;
  list-style: none;
  line-height: 50px;
`;
const NavListLink = styled.a`
  color: #fff;
  display: flex;
  width: ${(props) => (props.active ? "100%" : "50px")};
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
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
`;
const NavListItemName = styled.span`
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => (props.active ? "none" : "auto")};
  transition: all 0.5s ease;
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
const SideNav = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  function handleResize() {
    console.log("Inner", window.innerHeight);
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
            onClick={() => {
              setActive(!active);
              // if (homeExpand) {
              //   setHomeExpand(!homeExpand);
              // }
            }}
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
              <NavListLink onClick={() => navigate("/admin/dashboard/users")}>
                <NavListItemIcon className="bx bx-user"></NavListItemIcon>
                <NavListItemName active={active}>Users</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Users</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink onClick={() => navigate("/admin/dashboard/news")}>
                <NavListItemIcon className="bx bx-mail-send"></NavListItemIcon>
                <NavListItemName active={active}>News</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>News</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-shopping-bag"></NavListItemIcon>
                <NavListItemName active={active}>Jobs</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Jobs</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-building-house"></NavListItemIcon>
                <NavListItemName active={active}>Company</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Company</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink active={active}>
                <NavListItemIcon className="bx bx-cog"></NavListItemIcon>
                <NavListItemName active={active}>Settings</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Settings</NavListItemTooltip>
            </NavListItem>
          </NavBody>
        </SideNavBarContainer>
      </Body>
    </React.Fragment>
  );
};

export default SideNav;
