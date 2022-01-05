// third party imports
import React, { useState, useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
//in app imports-presentational
import { Container } from "./CommonComponents";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { setUserLoggedIn, setUserRole, setUserId } from "../store/userSlice";
// import Cookies from 'js-cookie'
import { Icon } from "@iconify/react";
import AuthServices from "../services/AuthServices";
import CustomSnackBar from "./CustomSnackBar";

const CustomNavBar = styled(Navbar)`
  background: ${({ navcolor }) => navcolor};
  font-family: ${({ navfont }) => navfont};
`;

const NavTitle = styled.span`
  color: white;
  font-weight: 500;
  padding-left: 5px;
  font-size: 16px;

  @media (min-width: 768px) and (max-width: 977px) {
    font-size: 13px;
  }
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
const RegisterTag = styled.span`
  color: white;
  font-weight: 1000;
  font-size: 16px;
  padding-right: 15px;

  @media (min-width: 768px) and (max-width: 977px) {
    font-size: 13px;
  }
`;

const LoginTag = styled.span`
  color: white;
  font-weight: 500;
  font-size: 16px;

  @media (min-width: 768px) and (max-width: 977px) {
    font-size: 13px;
  }
`;

const Nav1 = styled(Nav)`
  margin-top: -20px;
  /* margin-Right:100px; */
`;
function NavBar(props) {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const [isLogged, setisLogged] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const authService = new AuthServices();

  const current_theme = theme ? light : dark;

  const [showH, setShowH] = useState(false);
  const [showSS, setShowSS] = useState(false);
  const [showRL, setShowRL] = useState(false);
  const [showIR, setShowIR] = useState(false);
  const [showOS, setShowOS] = useState(false);
  const [showOSW, setShowOSW] = useState(false);
  const [showIRR, setShowIRR] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsErrorMsgOpen(false);
  };

  const userLogged = useSelector((state) => state.user.iuli);
  const userRole = useSelector((state) => state.user.userRole);

  useEffect(() => {
    setisLogged(userLogged === "NBSS");
  }, [userLogged]);

  // const userLogged=false;
  const icon = <Icon icon="carbon:user-avatar-filled-alt" width="30" />;
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
              <DropItems href="" id="bg-custom-3">
                Vision and Mission
              </DropItems>
              <DropItems href="" id="bg-custom-3">
                Our Proud Partners
              </DropItems>
              <DropItems
                id="bg-custom-3"
                onClick={() => {
                  console.log("Clicked News");
                  navigate("allNews");
                }}
              >
                News
              </DropItems>
              <DropItems href="/#contact" id="bg-custom-3">
                Contact Us
              </DropItems>
            </NavDropdown>

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
              {/* <NavDropdown
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
              </NavDropdown> */}
              <DropItems
                id="bg-custom-3"
                onClick={() => {
                  navigate("/requestPerson");
                }}
              >
                Request a Graduate/s or
                <br /> Undergraduate/s
              </DropItems>
              <DropItems href="/requestWorkshop" id="bg-custom-3">
                Organize a Workshop/
                <br />
                Training
              </DropItems>
              <DropItems href="/add" id="bg-custom-3">
                Submit an Advertisement
              </DropItems>
            </NavDropdown>

            <NavDropdown
              title={<NavTitle>Student Services</NavTitle>}
              id="collasible-nav-dropdown"
              show={showSS}
              onMouseEnter={() => showDropdown("Student Services")}
              onMouseLeave={() => hideDropdown("Student Services")}
              onClick={() => {
                console.log("show");
              }}
            >
              <DropItems
                id="bg-custom-3"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Send a CV
              </DropItems>

              <NavDropdown
                title={
                  <NavSubTitle
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Request a training
                    <br />
                    &nbsp;&nbsp;session
                  </NavSubTitle>
                }
                id="collasible-nav-dropdown"
                drop="end"
                show={showIRR}
                onMouseEnter={() => showDropdown("Request a Graduates/s for")}
                onMouseLeave={() => hideDropdown("Request a Graduates/s for")}
                onClick={() => {
                  console.log("show");
                }}
                style={{ fontSize: "10px", paddingLeft: "2px" }}
              >
                <NavDropdown.Item
                  id="bg-custom-3"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <NavSubTitle>How to prepare a CV</NavSubTitle>
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="bg-custom-3"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <NavSubTitle>Facing an interview</NavSubTitle>
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="bg-custom-3"
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  <NavSubTitle>Findinng a job</NavSubTitle>
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="bg-custom-3"
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  <NavSubTitle>Personal development</NavSubTitle>
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="bg-custom-3"
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  <NavSubTitle> Finding scholarships</NavSubTitle>
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="bg-custom-3"
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  <NavSubTitle> Foreign Employment</NavSubTitle>
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="bg-custom-3"
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  <NavSubTitle> Plot the career path</NavSubTitle>
                </NavDropdown.Item>
              </NavDropdown>

              <DropItems
                href="/product"
                id="bg-custom-3"
                onClick={() => {
                  navigate("login");
                }}
              >
                Register to Internship
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
              <DropItems href="/requesthall" id="bg-custom-3">
                Reserve a Conference Hall
              </DropItems>
              <DropItems href="/requestground" id="bg-custom-3">
                Reserve a Playground
              </DropItems>
              <DropItems href="/feedback" id="bg-custom-3">
                General Feedback
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
          </Nav>
          <Nav>
            <Nav.Link>
              {isLogged ? (
                <Nav1>
                  <NavDropdown
                    align={{ lg: "start" }}
                    drop="start"
                    title={icon}
                    show={showIcon}
                    onMouseEnter={() => showDropdown("Icon")}
                    onMouseLeave={() => hideDropdown("Icon")}
                    onClick={() => {
                      console.log("show");
                    }}
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        console.log("userRole", userRole);
                        switch (userRole) {
                          case "ROLE_ADMIN":
                            navigate("/admin/dashboard");
                            break;
                          case "ROLE_STUDENT":
                            navigate("/student/dashboard");
                            break;
                          case "ROLE_COMPANY":
                            navigate("/company/dashboard");
                            break;
                          default:
                            navigate("/");
                            break;
                        }
                      }}
                    >
                      Dashboard
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href="/"
                      onClick={async () => {
                        dispatch(setUserLoggedIn("SSNB"));
                        dispatch(setUserRole(""));
                        dispatch(setUserId(""));
                        navigate("/");
                      }}
                    >
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav1>
              ) : (
                <span>
                  <RegisterTag
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </RegisterTag>
                  <LoginTag onClick={() => navigate("/login")}>Log In</LoginTag>
                </span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavBar>
  );
}

export default NavBar;
