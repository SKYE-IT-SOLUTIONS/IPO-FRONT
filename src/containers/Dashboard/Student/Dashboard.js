import * as React from 'react';
import {Typography,Paper,Grid,List,Avatar,ListItemText,ListItemAvatar,ListItem,Button} from '@mui/material';
import Students from "../../../assets/students.svg"
import JobIcon from '../../../assets/jobicon.png'
import { styled } from '@mui/system';
import { Stack } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const joblist=[
  {
    title : "Browns PLT",
    position:"Assistant Manager",
    salary: "10000",
    deadLine:"2022-05-14"
  },
  {
    title : "Mas Holding",
    position:"Accountant",
    salary: "20000",
    deadLine:"2022-07-14"
  },
]

const trainingSes=[
  {
    title : "Agricultural diversification",
    about : "Agriculture Diversification refers to either a change ...",
    url : "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title : "Food security",
    about : "Food security, as defined by the United Nations ...",
    url : "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title : "farming productivity management",
    about : "Future agricultural progress depends on decreasingenvironmental ...",
    url : "https://images.unsplash.com/photo-1559884743-74a57598c6c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
  },
]

const internship=[
  {
    company : "Mas Holding",
    period : "1 year",
    about : "40 hours per week of working on permaculture and homesteading projects...",
    url : "https://images.unsplash.com/photo-1618411062366-81b4c31657cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80"
  },
  {
    company : "Browns PLT",
    period : "6 months",
    about : "Expectations for interns include helping with most components of our production...",
    url : "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '2px solid black',
  minHeight: '200px'
}));
const ApplyImage = styled('div')({
  backgroundImage : `url(${Students})`,
  backgroundPosition :'center',
  backgroundRepeat : 'no-repeat',
  backgroundSize:'cover',
  margin: 'auto',
  padding:'10px',
});
const StudentDashboard = () => {
  const navigate = useNavigate();
  return <>
    
    <ApplyImage>
      <Paper elevation={20}>
        <Typography variant="h2" gutterBottom component="div" sx={{textAlign:"center",color:"black"}}>
          Dashboard
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <Typography variant="h5" gutterBottom component="div" sx={{textAlign:"center",color:"black"}}>
              Latest Job Updates
            </Typography>
          {joblist.map((jb,i)=>{
            return(
              <List>
                <Stack>
                  <Paper sx={{backgroundColor:"#dee2e6",marginBottom:"-20px"}}>
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
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">{jb.position}</Typography><br/>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">Salary - Rs.{jb.salary}</Typography><br/>
                        <Typography variant="caption" color="red"> — Deadline -{jb.deadLine}</Typography>
                      </>
                      }
                    />
                  </ListItem></Paper></Stack>,
              </List>
          
            )
          })}
              <Button size="small" onClick={() => navigate("/student/jobs")}>See more...</Button>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <Typography variant="h5" gutterBottom component="div" sx={{textAlign:"center",color:"black"}}>
              Trainning Session Requests
            </Typography>
            {trainingSes.map((tr,i)=>{
            return(
            <List>
                <Stack>
                  <Paper sx={{backgroundColor:"#dee2e6",marginBottom:"-20px"}}>
                  <ListItem
                    secondaryAction={<>
                    <Button size="small" color="success">Pending</Button>
                     <Button size="small" color="error">Ignore</Button>
                    </> 
                    }
                  >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={tr.url}/>
                    </ListItemAvatar>
                    <ListItemText
                      primary={tr.title}
                      secondary={ 
                      <>
                         <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          About — 
                        </Typography>
                        {tr.about}
                      </>
                      }
                    />
                  </ListItem></Paper></Stack>,
              </List>
               
            )
          })}
          <Button size="small" onClick={() => navigate("/student/training-session")}>Create Request</Button>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Typography variant="h5" gutterBottom component="div" sx={{textAlign:"center",color:"black"}}>
              Internships Requests
            </Typography>
            {internship.map((inter,i)=>{
            return(
              <List>
                <Stack>
                  <Paper sx={{backgroundColor:"#dee2e6",marginBottom:"-20px"}}>
                  <ListItem
                    secondaryAction={
                    <>
                      <Button size="small" color="success">Pending</Button>
                      <Button size="small" color="error">Ignore</Button>
                    </>
                    }
                  >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={inter.url} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={inter.company}
                      secondary={ 
                      <>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">{inter.period}</Typography><br/>
                        <Typography x={{ display: 'inline' }} component="span" variant="body2" color="text.primary"> — {inter.about}</Typography>
                      </>
                      }
                    />
                  </ListItem></Paper></Stack>,
              </List>
          
            )
          })}
          <Button size="small" onClick={() => navigate("/student/internship")}>Create Request</Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="h5" gutterBottom component="div" sx={{textAlign:"center",color:"black"}}>
              CV Generate
            </Typography>
            <Paper>
            A curriculum vitae, often abbreviated as CV, is a document that job applicants use to showcase their academic and professional accomplishments. It is used to apply for positions within areas where a person's specific knowledge or expertise is required<br/>
            <Button variant="contained" onClick={() => navigate("/student/cv-generate")}>Generate Your CV as a PDF</Button>
            </Paper>
          </Item>
        </Grid>
      </Grid>
    </ApplyImage>
    
  </>;
};

export default StudentDashboard;
