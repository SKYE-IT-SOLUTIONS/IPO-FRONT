// third party imports
import React, { useState, useContext,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
//in app imports-presentational
import { Container } from "./CommonComponents";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector,useDispatch } from "react-redux"
import {setUserLoggedIn } from "../store/userSlice"
import Cookies from 'js-cookie'


const CustomNavBar = styled(Navbar)`
  background: ${({ navcolor }) => navcolor};
  font-family: ${({ navfont }) => navfont};
`;

const NavTitle = styled.span`
  color: white;
  font-weight: 500;
  padding-left: 5px;
  font-size: 16px;
`;

const NavSubTitle = styled.span`
  color: black;
  font-size: 14px;
  padding-left: 8px;
`;

const DropItems = styled(NavDropdown.Item)`
  font-size: 14px;
  padding-top: 7px;
  padding-bottom: 7px;
`;

const LoginTag = styled.span`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

const Nav1=styled(Nav)`
  margin-Top:-20px;
  margin-Right:100px;
`;
function NavBar(props) {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [isLogged, setisLogged] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const current_theme = theme ? light : dark;

  const [showH, setShowH] = useState(false);
  const [showSS, setShowSS] = useState(false);
  const [showRL, setShowRL] = useState(false);
  const [showIR, setShowIR] = useState(false);
  const [showOS, setShowOS] = useState(false);
  const [showOSW, setShowOSW] = useState(false);
  const [showIRR, setShowIRR] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const userLogged = useSelector(state => state.user.iuli);


  useEffect(() => {
    setisLogged(userLogged === "NBSS")
  }, [userLogged])
  
  // const userLogged=false;
  const icon = <AccountCircleIcon fontSize="inherit" style={{color:"white"}}/>;
  const showDropdown = (title) => {
    switch (title) {
      case "Home":
        setShowH(!showH);
        break;
      case "Student Services":
        setShowSS(!showSS);
        break;
      case "Related Links":
        setShowRL(!showRL);
        break;
      case "Industrial Relationships":
        setShowIR(!showIR);
        break;
      case "Other Services":
        setShowOS(!showOS);
        break;
      case "Organize a":
        setShowOSW(!showOSW);
        break;
      case "Request a Graduates/s for":
        setShowIRR(!showIRR);
        break;
      case "Icon":
        setShowIcon(!showIcon);
        break;
      default:
        break;
    }
  };
  const hideDropdown = (title) => {
    switch (title) {
      case "Home":
        setShowH(false);
        break;
      case "Student Services":
        setShowSS(false);
        break;
      case "Related Links":
        setShowRL(false);
        break;
      case "Industrial Relationships":
        setShowIR(false);
        break;
      case "Other Services":
        setShowOS(false);
        break;
      case "Organize a":
        setShowOSW(!showOSW);
        break;
      case "Request a Graduates/s for":
        setShowIRR(false);
        break;
      case "Icon":
        setShowIcon(false);
        break;
      default:
        break;
    }
  };

  return (
    <CustomNavBar
      id="bg-custom-2"
      variant="dark"
      expand="md"
      navcolor={current_theme.ui}
      navfont={fonts.general}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={<NavTitle>Home</NavTitle>}
              id="collasible-nav-dropdown"
              show={showH}
              onMouseEnter={() => showDropdown("Home")}
              onMouseLeave={() => hideDropdown("Home")}
              onClick={() => {
                console.log("This is Home");
                navigate("/home");
              }}
            >
              <DropItems href="/#VandM" id="bg-custom-3">
                Vision and Mission
              </DropItems>
              <DropItems href="/#contact" id="bg-custom-3">
               Our Proud Partners
              </DropItems>
              <DropItems href="/#news" id="bg-custom-3">
                News
              </DropItems>
              <DropItems href="/#news" id="bg-custom-3">
                Contact Us
              </DropItems>
            </NavDropdown>

            <NavDropdown
              title={<NavTitle>Related Links</NavTitle>}
              id="collasible-nav-dropdown"
              show={showRL}
              onMouseEnter={() => showDropdown("Related Links")}
              onMouseLeave={() => hideDropdown("Related Links")}
              onClick={() => {
                console.log("show");
              }}
            >
              <DropItems
                href="https://www.agri.ruh.ac.lk/alumni/index.html"
                target="_blank"
                id="bg-custom-3"
              >
                Alumini Association
              </DropItems>
              <DropItems
                href="https://www.agri.ruh.ac.lk/"
                target="_blank"
                id="bg-custom-3"
              >
                Faculty of Agriculture
              </DropItems>
              <DropItems
                href="https://www.ruh.ac.lk/"
                target="_blank"
                id="bg-custom-3"
              >
                University of Ruhuna
              </DropItems>
              <DropItems
                href="http://documents.gov.lk/en/gazette.php"
                target="_blank"
                id="bg-custom-3"
              >
               Government Gazzet
              </DropItems>
            </NavDropdown>

            {/* <NavDropdown
              title={<NavTitle>Student Services</NavTitle>}
              id="collasible-nav-dropdown"
              show={showSS}
              onMouseEnter={() => showDropdown("Student Services")}
              onMouseLeave={() => hideDropdown("Student Services")}
              onClick={() => {
                console.log("show");
              }}
            >
              <DropItems href="/jobs" id="bg-custom-3">
                Job Opertunities
              </DropItems>
              <DropItems href="/jobs" id="bg-custom-3">
                Training Programs
              </DropItems>
              <DropItems href="/jobs" id="bg-custom-3">
                Other Events
              </DropItems>
            </NavDropdown> */}

            <NavDropdown
              title={<NavTitle>Industrial Relationships</NavTitle>}
              id="collasible-nav-dropdown"
              show={showIR}
              onMouseEnter={() => showDropdown("Industrial Relationships")}
              onMouseLeave={() => hideDropdown("Industrial Relationships")}
              onClick={() => {
                console.log("show");
              }}
            >
              <NavDropdown
                title={<NavSubTitle>Request a Graduates/s</NavSubTitle>}
                drop="end"
                show={showIRR}
                onMouseEnter={() => showDropdown("Request a Graduates/s for")}
                onMouseLeave={() => hideDropdown("Request a Graduates/s for")}
                onClick={() => {
                  console.log("show");
                }}
              >
                <DropItems href="/vacancy" id="bg-custom-3">
                  A Vacancy
                </DropItems>
                <DropItems href="/survey" id="bg-custom-3">
                  A Survey
                </DropItems>
              </NavDropdown>
              <DropItems href="/add" id="bg-custom-3">
                Submit an Advertisement
              </DropItems>
              <DropItems href="/book" id="bg-custom-3">
                Reserve Conferance Hall
              </DropItems>
            </NavDropdown>

            <NavDropdown
              title={<NavTitle>Other Services</NavTitle>}
              id="collasible-nav-dropdown"
               show={showOS}
               onMouseEnter={() => showDropdown("Other Services")}
               onMouseLeave={() => hideDropdown("Other Services")}
              onClick={() => {
                console.log("show");
              }}
            >
              <DropItems href="/product" id="bg-custom-3">
                Organize a Workshop/Training
              </DropItems>
              <DropItems href="/product" id="bg-custom-3">
                General Feedback
              </DropItems>
              <DropItems href="/product" id="bg-custom-3">
                Contact Us
              </DropItems>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              {isLogged ? (
                  <Nav1>
                        <NavDropdown
                          align={{ lg: 'start' }}
                          drop="start"

                          title={icon}
                          show={showIcon}
                          onMouseEnter={() => showDropdown("Icon")}
                          onMouseLeave={() => hideDropdown("Icon")}
                          onClick={() => {
                            console.log("show");
                          }}
                          
                        >
                          <NavDropdown.Item href="/dashboard">
                              Dashboard
                          </NavDropdown.Item>

                          <NavDropdown.Item
                            href="/" 
                            onClick={() => {
                              dispatch(setUserLoggedIn("SSNB"))
                              navigate("/")
                            }}
                          >Log Out
                          </NavDropdown.Item>
                        </NavDropdown>
                    </Nav1>):(
               <LoginTag onClick={() => setModalShow(true)}>Log In</LoginTag>
              )
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Login
        history={props.history}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </CustomNavBar>
  );
}

export default NavBar;
