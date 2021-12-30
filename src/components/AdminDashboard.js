import React from 'react'
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

const MainRow=styled(Row)`
  justify-content: center;
  
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
  return (
    <div>
              <MainRow>
                <MainCol md={4} sm={12} xs={8}>
                  <MainPaper elevation={5} ><p style={{textAlign:"center"}}>News & Post</p><Pie data={data} /></MainPaper>
                </MainCol>
                <MainCol md={4} sm={12} xs={8}>
                  <MainPaper elevation={5} ><p style={{textAlign:"center"}}>Events</p><Pie data={data1} /></MainPaper>
                </MainCol>
                <MainCol md={4} sm={12} xs={8}>
                <MainPaper elevation={5} ><p style={{textAlign:"center"}}>Users</p><Pie data={data2} /></MainPaper>
                </MainCol>
              </MainRow>
        
    </div>
  )
}

export default AdminDashboard