import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { Container, Row, Col } from "../components/CommonComponents";
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';

const MainCol=styled(Col)`
  justify-content: center;
`;
export default function MediaCard({img,value,title}) {
  return (
    <Container>
        <Paper>
            <Row style={{padding:"10px"}}>
            
                <Col md={8} sm={6} xs={8}>
                {value}&nbsp;&nbsp;
                {title}
                </Col>
                <Col md={4} sm={5} xs={8}>
                    <CircularProgress variant="determinate" value={100} size={68}/>
                </Col>
            </Row>
        </Paper>
    </Container>
  );
}