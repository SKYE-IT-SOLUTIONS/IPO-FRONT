import * as React from "react";
import {
  Typography,
  Paper,
  Grid,
  List,
  Avatar,
  ListItemText,
  ListItemAvatar,
  ListItem,
  Button,
  Stack,
} from "@mui/material";
import Students from "../../../assets/students.svg";
import JobIcon from "../../../assets/jobicon.png";
import RequestIcon from "../../../assets/request.png";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const joblist = [
  {
    title: "Browns PLT",
    position: "Assistant Manager",
    salary: "10000",
    deadLine: "2022-05-14",
  },
  {
    title: "Mas Holding",
    position: "Accountant",
    salary: "20000",
    deadLine: "2022-07-14",
  },
];
const updates = [
  {
    title: "New technologies might help keep drought-prone farms green",
    content:
      "After learning how much damage drought can do to crops, two teens designed ways to detect a thirsty plant and make sure it gets enough water.",
  },
  {
    title: "New technologies might help keep drought-prone farms green",
    content:
      "After learning how much damage drought can do to crops, two teens designed ways to detect a thirsty plant and make sure it gets enough water.",
  },
];
const trainingSes = [
  {
    title: "Agricultural diversification",
    about: "Agriculture Diversification refers to either a change ...",
  },
];

const internship = [
  {
    company: "Mas Holding",
    period: "1 year",
    about:
      "40 hours per week of working on permaculture and homesteading projects...",
  },
  {
    company: "Browns PLT",
    period: "6 months",
    about:
      "Expectations for interns include helping with most components of our production...",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "2px solid black",
  minHeight: "200px",
}));
const ApplyImage = styled("div")({
  backgroundImage: `url(${Students})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  margin: "auto",
  padding: "10px",
});

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <ApplyImage>
        <Paper elevation={20}>
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            sx={{ textAlign: "center", color: "black" }}
          >
            Dashboard
          </Typography>
        </Paper>
        <Grid container spacing={2}>
          {/* Latest job Updtes */}

          <Grid item xs={12} md={5}>
            <Item>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ textAlign: "center", color: "black" }}
              >
                Latest Job Updates
              </Typography>
              {joblist.map((jb, i) => {
                return (
                  <List>
                    <Stack>
                      <Paper
                        sx={{
                          backgroundColor: "#dee2e6",
                          marginBottom: "-20px",
                        }}
                      >
                        <ListItem
                          secondaryAction={
                            <Button size="small">View Details</Button>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={JobIcon} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={jb.title}
                            secondary={
                              <>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {jb.position}
                                </Typography>
                                <br />
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  Salary - Rs.{jb.salary}
                                </Typography>
                                <br />
                                <Typography variant="caption" color="red">
                                  {" "}
                                  — Deadline -{jb.deadLine}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                      </Paper>
                    </Stack>
                    ,
                  </List>
                );
              })}
              <Button size="small" onClick={() => navigate("/student/jobs")}>
                See more...
              </Button>
            </Item>
          </Grid>

          {/* Latest Updates */}

          <Grid item xs={12} md={7}>
            <Item>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ textAlign: "center", color: "black" }}
              >
                Latest Updates
              </Typography>
              {updates.map((up, i) => {
                return (
                  <List>
                    <Stack>
                      <Paper
                        sx={{
                          backgroundColor: "#dee2e6",
                          marginBottom: "-20px",
                        }}
                      >
                        <ListItem
                          secondaryAction={
                            <Button size="small">View Details</Button>
                          }
                        >
                          <ListItemText
                            primary={up.title}
                            secondary={
                              <Stack sx={{ width: "80%" }}>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  Content
                                </Typography>
                                {" — "}
                                {up.content}
                              </Stack>
                            }
                          />
                        </ListItem>
                      </Paper>
                    </Stack>
                    ,
                  </List>
                );
              })}
              <Button size="small" onClick={() => navigate("/student/updates")}>
                See more...
              </Button>
            </Item>
          </Grid>

          {/* Requests */}

          <Grid item xs={12} md={8}>
            <Item>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ textAlign: "center", color: "black" }}
              >
                Requests
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{ color: "black" }}
                >
                  Trainning Session Requests
                </Typography>
                <Button onClick={() => navigate("/student/training-session")}>
                  Create Request
                </Button>
              </Stack>

              {trainingSes.map((tr, i) => {
                return (
                  <List>
                    <Stack>
                      <Paper
                        sx={{
                          backgroundColor: "#dee2e6",
                          marginBottom: "-20px",
                        }}
                      >
                        <ListItem
                          secondaryAction={
                            <Stack>
                              <Button size="small" color="success">
                                Pending
                              </Button>
                              <Button size="small" color="error">
                                Ignore
                              </Button>
                            </Stack>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={RequestIcon} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={tr.title}
                            secondary={
                              <Stack sx={{ width: "80%" }}>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  About — {tr.about}
                                </Typography>
                              </Stack>
                            }
                          />
                        </ListItem>
                      </Paper>
                    </Stack>
                    ,
                  </List>
                );
              })}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{ color: "black" }}
                >
                  Internship Requests
                </Typography>
                <Button onClick={() => navigate("/student/internship")}>
                  Create Request
                </Button>
              </Stack>
              {internship.map((inter, i) => {
                return (
                  <List>
                    <Stack>
                      <Paper
                        sx={{
                          backgroundColor: "#dee2e6",
                          marginBottom: "-20px",
                        }}
                      >
                        <ListItem
                          secondaryAction={
                            <Stack>
                              <Button size="small" color="success">
                                Pending
                              </Button>
                              <Button size="small" color="error">
                                Ignore
                              </Button>
                            </Stack>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={RequestIcon} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={inter.company}
                            secondary={
                              <Stack sx={{ width: "80%" }}>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {inter.period}
                                </Typography>
                                <Typography
                                  x={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {" "}
                                  — {inter.about}
                                </Typography>
                              </Stack>
                            }
                          />
                        </ListItem>
                      </Paper>
                    </Stack>
                    ,
                  </List>
                );
              })}
            </Item>
          </Grid>

          {/* Generate CV */}

          <Grid item xs={12} md={4}>
            <Item>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ textAlign: "center", color: "black" }}
              >
                CV Generate
              </Typography>
              <Paper>
                A curriculum vitae, often abbreviated as CV, is a document that
                job applicants use to showcase their academic and professional
                accomplishments. It is used to apply for positions within areas
                where a person's specific knowledge or expertise is required
                <br />
                <Button
                  variant="contained"
                  onClick={() => navigate("/student/cv-generate")}
                >
                  Generate Your CV as a PDF
                </Button>
              </Paper>
            </Item>
          </Grid>
        </Grid>
      </ApplyImage>
    </>
  );
};

export default StudentDashboard;
