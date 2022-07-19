/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{ useContext, useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,
    CategoryScale,
    LinearScale,
    Title,
    } from 'chart.js';

import { Pie} from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import { Container, Row, Col } from "../components/CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import Card from './Statcard';
import Users from '../assets/user.svg';
import News from '../assets/News-rafiki.svg';
import { Icon } from '@iconify/react';
import DataService from "../services/DataService";
import Spinner from '../components/Spinner';

const Contactcontainer=styled(Container)`
    font-family: ${({ font }) => font.general};
    padding: 0px 10px;
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

const Statdiv=styled('div')`
   border: 4px solid;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  text-align: left;
  background-color: #eef2f3;
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
    



const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dataService = new DataService();

  const [statData, setStatData] = useState({});
  // const [newsLoaded, setNewsLoaded] = useState(false)
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchStatData = async () => {
      const { status, data, error } = await dataService.handleStatData();
      if (status) {
        setStatData(data);
      } else {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchStatData();
    
  }, []);

  const data = {
  labels: ['News', 'Jobs'],
  datasets: [
    {
      label: '# of Votes',
      data: [parseInt(statData?.newsCount), parseInt(statData?.jobCount)],
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
const data1 = {
    labels: ['Workshops', 'Sessions','Other'],
    datasets: [
      {
        label: '# of Votes',
        data: [parseInt(statData?.workshopCount), parseInt(statData?.sessionCount),parseInt(statData?.otherCount)],
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
const data2 = {
    labels: ['Companies', 'Students'],
    datasets: [
      {
        label: '# of Votes',
        data: [parseInt(statData?.companyCount), parseInt(statData?.studentCount)],
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


  const { fonts } = useContext(ThemeContext);
  return (
    isLoading ? <Spinner/> :<div>
    <Contactcontainer font={fonts}>
        <Title1>View Details</Title1>
        <MainRow style={{ paddingTop: "15px" }}>
            <MainCol md={4} sm={6} xs={8}>
            <Statdiv elevation={5} ><p style={{textAlign:"center"}}>Users</p><Pie data={data2} /></Statdiv>
            </MainCol>
            <MainCol md={4} sm={6} xs={8}>    
            <Statdiv elevation={5} ><p style={{textAlign:"center"}}>Events</p><Pie data={data1} /></Statdiv>         
            </MainCol>
            <MainCol md={4} sm={6} xs={8}>    
                    <Statdiv elevation={5} ><p style={{textAlign:"center"}}>News & Post</p><Pie data={data} /></Statdiv>         
            </MainCol>
        </MainRow>
        <MainRow style={{ paddingTop: "15px" }}>
            <MainCol md={4} sm={6} xs={8}>
              <Card img={Users} value={<Icon icon="bx:bxs-user" width="50" height="50" />} title="Users" count={parseInt(statData?.studentCount)+parseInt(statData?.companyCount)}/>
            </MainCol>
            <MainCol md={4} sm={6} xs={8}>    
            <Card img={News}  value={<Icon icon="bi:calendar-event" width="50" height="50" />} title="Events" count={parseInt(statData?.sessionCount)+parseInt(statData?.otherCount)+parseInt(statData?.workshopCount)}/> 
            </MainCol>
            <MainCol md={4} sm={6} xs={8}>    
            <Card img={News}  value={<Icon icon="bx:bx-news" width="50" height="50" />} title="News/Jobs" count={parseInt(statData?.newsCount)+parseInt(statData?.jobCount)}/>    
            </MainCol>
        </MainRow>
       
    </Contactcontainer>
</div>
  )
}

export default AdminDashboard