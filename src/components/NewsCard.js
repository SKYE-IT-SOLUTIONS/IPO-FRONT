import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { CustomBttn } from "./CommonComponents";
import styled, { css } from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import  {Col} from './CommonComponents'

const NewsDiv = styled(Col)`
  &: hover {
    transform: scale(1.05);
    transition-delay : 100ms;
  } ;
  display : flex;
  flex-direction : row;
  justify-content : center;

`;

const NewsCardView = styled(Card)`
  width: 18rem;
  font-family: ${({ font }) => font.general};
  border-radius : 15px;
  background: linear-gradient(to right, #ece9e6, #ffffff);
`;

const NewsImg = styled.div`
  height: 150px;
  background-image: url(${({image}) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius : 15px 15px 0px  0px;
`;

const NewsTitle = styled(Card.Title)`
  text-align: justify;
  font-family: ${({ font }) => font};
  font-size: 16px;
`;

const NewsContent = styled(Card.Text)`
  text-align: justify;
  font-size: 12px;
  margin-bottom: 8px;
  min-height : 90px;
`;

const NewsButton = styled(CustomBttn)`
  margin: 0px 0px 10px 0px;
  font-size: 12px;
`;

const NewsFooter = styled.span`
  font-size: 12px;
  position : absolute ;
  bottom : 10px;
`;

function NewsCard({news}) {
  const { fonts } = useContext(ThemeContext)
  const characters = 150

  const sliceParagraph = (para) => {
    let new_para = para.substr(0,characters)
    return new_para.concat("...")
  }

  return (
    <NewsDiv md={2}>
      <NewsCardView font={fonts}>
        <NewsImg image={news.url}/>
        <Card.Body>
          <NewsTitle font={fonts.title}>
           {news.title}
          </NewsTitle>
          <NewsContent>
            {news.content.length > characters
            ? sliceParagraph(news.content)
            : news.content
            }
          </NewsContent>
          <NewsButton apply> Read </NewsButton>
          <Card.Footer>
            <NewsFooter> Last updated {news.time} ago </NewsFooter>
          </Card.Footer>
        </Card.Body>
      </NewsCardView>
    </NewsDiv>
  );
}

export default NewsCard;
