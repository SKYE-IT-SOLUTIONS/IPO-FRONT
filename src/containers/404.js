import styled from "styled-components";
import NoFound from '../assets/404-Illustration.png' 

const FluidContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 1em;
`;

const Title = styled.h1`
    font-size: 4.5em;
    margin-bottom: 0;
`;

const Subtitle = styled.div`
    font-size: 1.8em;
    margin-top: 0;
`;

const NotFound = () => {
    return ( 
        <FluidContainer>
            <img alt="" className="mt-4" style={{padding:"auto",height:"300px"}} src={NoFound}/>
            <Title>
                404!
            </Title>
            <Subtitle>
                The page you are look in for doesn't exist.
            </Subtitle>
        </FluidContainer>
        );
}
 
export default NotFound;