import React, { useState } from "react";
import styled, { keyframes} from "styled-components";

const Body = styled.div`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  position: absolute;
  height: 81vh;
  width: 100%;
  overflow: hidden;
`;
const SideNavBarContainer = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: ${(props) => (props.active ? "240px" : "82px")};
  background-color: #11101d;
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
    color: #11101d;
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
const SubMenu = styled.ul`
  margin-top: 0px;
  font-size: 15px;
  position: relative;
  text-align: center;
  transform: translate(-10%, 5%);
  height: ${(props) => (props.expand ? "208px" : "0px")};
  color: #fff;
  overflow: hidden;
  transition: height 0.5s;
  display: ${(props) => (props.active ? "208px" : "none")};
`;
const SubMenuItem = styled.li`
  position: relative;
  text-align: left;
  text-indent: 15px;
  padding-right: 2px;
  height: 50px;
  width: 100%;
  list-style: none;
  line-height: 50px;
  border-radius: 12px;
  color: #fff;
  background-color: #11101d;
  transition: all 0.7s ease;
  :hover {
    background-color: #fff;
    color: #11101d;
  }
`;
const ArrowDown = keyframes`
  0% {
    transform: translate(505%, 0%) rotate(0deg);
  }
  10% {
    transform: translate(505%, 0%) rotate(10deg);
  }
  20% {
    transform: translate(505%, 0%) rotate(20deg);
  }
  30% {
    transform: translate(505%, 0%) rotate(30deg);
  }
  40% {
    transform: translate(505%, 0%) rotate(40deg);
  }
  50% {
    transform: translate(505%, 0%) rotate(50deg);
  }
  60% {
    transform: translate(505%, 0%) rotate(60deg);
  }
  70% {
    transform: translate(505%, 0%) rotate(70deg);
  }
  80% {
    transform: translate(505%, 0%) rotate(80deg);
  }
  90% {
    transform: translate(505%, 0%) rotate(85deg);
  }
  100% {
    transform: translate(505%, 0%) rotate(90deg);
  }
`;
const ArrowUp = keyframes`
0% {
    transform: translate(505%, 0%) rotate(90deg);
  }
  10% {
    transform: translate(505%, 0%) rotate(80deg);
  }
  20% {
    transform: translate(505%, 0%) rotate(70deg);
  }
  30% {
    transform: translate(505%, 0%) rotate(60deg);
  }
  40% {
    transform: translate(505%, 0%) rotate(50deg);
  }
  50% {
    transform: translate(505%, 0%) rotate(50deg);
  }
  60% {
    transform: translate(505%, 0%) rotate(40deg);
  }
  70% {
    transform: translate(505%, 0%) rotate(30deg);
  }
  80% {
    transform: translate(505%, 0%) rotate(20deg);
  }
  90% {
    transform: translate(505%, 0%) rotate(10deg);
  }
  100% {
    transform: translate(505%, 0%) rotate(0deg);
  }
`;
const SubMenuDropDownArrow = styled.i`
  transform: translate(505%, 0%)
    rotate(${(props) => (props.expand ? "90deg" : "0deg")});
  font-size: 18px;
  display: ${(props) => (props.active ? "inherit" : "none")};
  animation: ${(props) => (props.expand ? ArrowDown : ArrowUp)} 0.3s;
`;

const SideNav = () => {
  const [active, setActive] = useState(true);
  const [homeExpand, setHomeExpand] = useState(false);
  return (
    <React.Fragment>
      <Body>
        <SideNavBarContainer active={active}>
          <NavHeder active={active}>
            <NavHeaderIcon className="bx bxs-dashboard"></NavHeaderIcon>
            <NavHeaderName>Dashboard</NavHeaderName>
          </NavHeder>
          <MenuIcon
            className="bx bx-menu"
            active={active}
            onClick={() => {
              setActive(!active);
              if (homeExpand) {
                setHomeExpand(!homeExpand);
              }
            }}
          ></MenuIcon>

          <NavBody>
            <NavListItem>
              <NavListLink
                active={active}
                onClick={() => (active ? setHomeExpand(!homeExpand) : "")}
              >
                <NavListItemIcon className="bx bx-home"></NavListItemIcon>
                <NavListItemName active={active}>Home</NavListItemName>
                <SubMenuDropDownArrow
                  className="bx bx-right-arrow"
                  active={active}
                  expand={homeExpand}
                ></SubMenuDropDownArrow>
              </NavListLink>
              <NavListItemTooltip active={active}>Home</NavListItemTooltip>
                <SubMenu expand={homeExpand} active={active}>
                  <SubMenuItem>Home</SubMenuItem>
                  <SubMenuItem>Related Links</SubMenuItem>
                  <SubMenuItem>Student Services</SubMenuItem>
                  <SubMenuItem>Industrial Relationship</SubMenuItem>
                </SubMenu>
            </NavListItem>

            <NavListItem>
              <NavListLink active={active}>
                <NavListItemIcon className="bx bx-user"></NavListItemIcon>
                <NavListItemName active={active}>User</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>User</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink active={active}>
                <NavListItemIcon className="bx bx-chat"></NavListItemIcon>
                <NavListItemName active={active}>Messages</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Messages</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink active={active}>
                <NavListItemIcon className="bx bx-pie-chart-alt-2"></NavListItemIcon>
                <NavListItemName active={active}>Analytics</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Analytics</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink active={active}>
                <NavListItemIcon className="bx bx-folder"></NavListItemIcon>
                <NavListItemName active={active}>File Manager</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>
                File Manager
              </NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink active={active}>
                <NavListItemIcon className="bx bx-cart-alt"></NavListItemIcon>
                <NavListItemName active={active}>Order</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Order</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink active={active}>
                <NavListItemIcon className="bx bx-heart"></NavListItemIcon>
                <NavListItemName active={active}>Saved</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Saved</NavListItemTooltip>
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
