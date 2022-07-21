/* eslint-disable no-unused-vars */
import React,{useState,useContext} from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import styled from "styled-components";
import Feedback from "../assets/Feedback.svg";
import { Paper, Box,TextField } from "@mui/material";
import { Container, Row, Col, CustomButton } from "./CommonComponents";
import { Simple_Validator } from "../utils/validation";
import { ThemeContext } from "../contexts/ThemeContext";

const StyledImg = styled.img`
  padding: auto;
  size:100%;
  
`;
// const Paper1=styled(Paper)`
//     justify-content: center;
//     padding: 32px;
// `;
const Paper2=styled(Paper)`
    justify-content: center;
    padding: 32px;
    
`;
// const LoginCol = styled(Col)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
const SubBttn = styled(CustomButton)`
  width: 150px;
  margin: 15px 0px;
  background: ${({ bgColor }) => bgColor};
`;
const Error = styled.p`
  color: #dc281e;
  font-size: 13px;
  margin: 0px;
  text-align: left;
  padding: 5px 0 5px 2px;
`;
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const handleSubmit = async () => {
  
}
export default function HoverRating() {
  const { theme, light, dark,fonts } = useContext(ThemeContext);
  const them = theme ? light.button : dark.button;
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentInfo, setCommentInfo] = useState({ error: null, status: false });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Row style={{paddingTop:"20px"}}>
            <Col md={5} sm={12}>
            <Paper2 elevation={6}>
                <StyledImg alt="" src={Feedback} />

              </Paper2>
        </Col>
        
    <Col md={7} sm={12} >
          <Paper2 elevation={6}>
          <h4>Rating</h4>
                    <Box
                    sx={{
                        
                        display: 'flex',
                        alignItems: 'center',
                        
                    }}
                    >
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                    </Box>
                  <>Your name</>
                  <br/><br/>
                  <TextField id="outlined-basic" label="name" variant="outlined"  value={name}
                    type="text"
                    onChange={(e) => {
                    let val = e.target.value
                    setName(val)
                  }}/><br/><br/>
                  <h4>Comment</h4>
                  <TextField fullWidth label="comment" id="fullWidth" value={comment}
                    type="text"
                    onChange={(e) => {
                    let com = e.target.value
                    setComment(com)
                    setCommentInfo(Simple_Validator(com,"Comment"))
                  }}/>
                  {commentInfo.error && <Error>{commentInfo.error}</Error>}
                  <SubBttn disabled={!commentInfo.status || isLoading} 
                  bgColor={!isLoading ? them.login : them.disable}
                  onClick={()=>{
                    if(commentInfo.status){
                      handleSubmit({
                        "name" : name,
                        "comment" : comment,
                    });
                    }
                  }}>Submit</SubBttn>
            </Paper2>
    </Col>
    </Row>
  </Container>
  );
}