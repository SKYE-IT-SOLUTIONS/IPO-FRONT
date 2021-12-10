import React, { useState } from "react";
import styled, { /*createGlobalStyle*/ } from "styled-components";

/*const Root = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
`;*/

const Body = styled.div`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  position: relative;
  height: 81vh;
  width: 100%;
  overflow: hidden;
`;
const SideNavBarContainer = styled.div`
  position:relative;
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
  margin-left:${(props) => (props.active ? "15px" : "0px")};
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
`;/*
const Search = styled.i`
  position: absolute;
  z-index: 99;
  color: #fff;
  font-size: 22px;
  bottom: 0;
  transition: all 0.5s ease;
  :hover {
    background-color: #fff;
    color: #1d1b31;
  }
`;
const Input = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #1d1b31;
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
`;*/
const SideNav = () => {
  const [active, setActive] = useState(true);
  return (
    <React.Fragment>
      {/*<Root />*/}
      <Body>
        <SideNavBarContainer active={active}>
          <NavHeder active={active}>
            <NavHeaderIcon className="bx bxl-c-plus-plus"></NavHeaderIcon>
            <NavHeaderName>CodingLab</NavHeaderName>
          </NavHeder>
          <MenuIcon
            className="bx bx-menu"
            active={active}
            onClick={() => setActive(!active)}
          ></MenuIcon>

          <NavBody>
            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-grid-alt"></NavListItemIcon>
                <NavListItemName active={active}>Dashboard</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Dashboard</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-user"></NavListItemIcon>
                <NavListItemName active={active}>User</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>User</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-chat"></NavListItemIcon>
                <NavListItemName active={active}>Messages</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Messages</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-pie-chart-alt-2"></NavListItemIcon>
                <NavListItemName active={active}>Analytics</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Analytics</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-folder"></NavListItemIcon>
                <NavListItemName active={active}>File Manager</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>
                File Manager
              </NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-cart-alt"></NavListItemIcon>
                <NavListItemName active={active}>Order</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Order</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
                <NavListItemIcon className="bx bx-heart"></NavListItemIcon>
                <NavListItemName active={active}>Saved</NavListItemName>
              </NavListLink>
              <NavListItemTooltip active={active}>Saved</NavListItemTooltip>
            </NavListItem>

            <NavListItem>
              <NavListLink>
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
