import React,{ useContext, useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    } from 'chart.js';

import faker from 'faker';
import { Pie} from 'react-chartjs-2';
import { Bar} from 'react-chartjs-2';
import { Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Container, Row, Col } from "../components/CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import editContact from '../assets/edit-contact.svg';
import { Image } from 'react-bootstrap';
import Card from './Statcard';
import Users from '../assets/user.svg';
import News from '../assets/News-rafiki.svg';
import { Icon } from '@iconify/react';

const Contactcontainer=styled(Container)`
    font-family: ${({ font }) => font.general};
    padding: 0px 10px;
`;
const StyledImg =styled('img')`
  padding: auto;
  height: 100%;
  width: 100%;
`;
const Title1 =styled('h1')`
    text-align: center;
`;

const MainRow=styled(Row)`
  justify-content: center;
  padding: 10px;
  
`;
const MainCol=styled(Col)`
  justify-content: center;
  padding: 10px;
`;
const MainPaper=styled(Paper)`
   justify-content: center;
   
`;


ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,
    LinearScale,
    
    Title,
    );
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]
      }
    

export const data = {
  labels: ['News', 'Posts'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const data1 = {
    labels: ['Event1', 'Event2','Event3','Event4','Event5'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 25,20,15,58],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
export const data2 = {
    labels: ['CompanyUsers', 'StudentUsers'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const AdminDashboard = () => {
  const { fonts } = useContext(ThemeContext);
  return (
    <div>
        <Contactcontainer font={fonts}>
            <Title1>View Details</Title1>
            <MainRow style={{ paddingTop: "15px" }}>
                <MainCol md={4} sm={6} xs={8}>
                <MainPaper elevation={5} ><p style={{textAlign:"center"}}>Users</p><Pie data={data2} /></MainPaper>
                </MainCol>
                <MainCol md={4} sm={6} xs={8}>    
                <MainPaper elevation={5} ><p style={{textAlign:"center"}}>Events</p><Pie data={data1} /></MainPaper>         
                </MainCol>
                <MainCol md={4} sm={6} xs={8}>    
                        <MainPaper elevation={5} ><p style={{textAlign:"center"}}>News & Post</p><Pie data={data} /></MainPaper>         
                </MainCol>
            </MainRow>
            <MainRow style={{ paddingTop: "15px" }}>
                <MainCol md={4} sm={6} xs={8}>
                  <Card img={Users} value={<Icon icon="bx:bxs-user" width="50" height="50" />} title="Users"/>
                </MainCol>
                <MainCol md={4} sm={6} xs={8}>    
                <Card img={News}  value={<Icon icon="bi:calendar-event" width="50" height="50" />} title="Events"/> 
                </MainCol>
                <MainCol md={4} sm={6} xs={8}>    
                <Card img={News}  value={<Icon icon="bx:bx-news" width="50" height="50" />} title="News/Post" />    
                </MainCol>
            </MainRow>
           
        </Contactcontainer>
    </div>
  )
}

export default AdminDashboard