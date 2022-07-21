import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

const Typography1 = styled(Typography)`
    text-transform: uppercase;

`;
export default function Statcard2({title,count}) {
  return (
    <div>
      
      
        <Typography1 gutterBottom variant="h4" component="div">
          {title}
        </Typography1>
        <Typography variant="body2" color="text.secondary" >
          {count}
        </Typography>
        <Button size="small">Learn More</Button>
      
    </div>
  );
}
