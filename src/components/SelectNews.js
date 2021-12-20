import React , {useContext} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import addnews from '../assets/addnews.svg'
import newsList from '../assets/newsList.svg'
import { ThemeContext } from "../contexts/ThemeContext";
import {Container} from "./CommonComponents";
import { useNavigate } from 'react-router-dom';

  const  OuterDiv = styled(Container)`
    font-family: ${({ font }) => font.general};
    text-align: center;
  `

const images = [
  {
    url: newsList,
    title: 'View News List',
    width: '50%',
    nav:"list"
  },
  {
    url: addnews,
    title: 'Add News',
    width: '50%',
    nav:"addNews"
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid white',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
const AnimatedText = styled('h1')`
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;

`;
export default function ButtonBases() {
    const { fonts } = useContext(ThemeContext);
    const navigate = useNavigate();

  return (
      <OuterDiv font={fonts}>
          <AnimatedText>Choose You Choice</AnimatedText>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={()=>{navigate(image.nav)}}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})`}} />
          <ImageBackdrop className="MuiImageBackdrop-root"/>
          <Image>
            <Typography
              component="span"
              variant="h5"
              style={{color:"white",fontWeight:"bolder"}}
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
      </OuterDiv>
  );
}
