import React from 'react'
// import MovingText from 'react-moving-text'
import styled from 'styled-components';
// import img from '../../src/assets/logo.png'

import { Container, Navbar } from "./CommonComponents";

const CustomDiv = styled.div`
@media only screen and (min-width: 1160px) {
    background:red;
}

@media (min-width: 1024px) and (max-width: 1160px) {
    background:blue;
}

@media (min-width: 700px) and (max-width: 1024px) {
    background:pink;
}
@media (min-width: 500px) and (max-width: 700px) {
    background:purple;
}
@media(min-width: 350px) and (max-width: 500px) {
    background:gray;
}
@media(max-width: 350px) {
    background:black;
}
`

export default function TopLogoBar() {
    return (
        <CustomDiv>
          <Navbar sticky="top" id="bg-custom-2" variant="dark" expand="md" className="navstyle">
            <Container fluid >
                <div>
                    <table>
                    <thead>       
                        <tr>
                        {/* <th><img alt="" src={img} className="image"/></th> */}
                        <th><h1 className="text">Industrial Placement Office (IPO)</h1></th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>     
                        </tr> 
                      </thead>
                    </table>
                </div>
                <div>
                {/* <MovingText
                type="popIn"
                duration="4000ms"
                delay="0s"
                direction="left to right"
                timing="ease"
                iteration="infinite"
                fillMode="none"
              >
                <p className="text1">Faculty Of Agriculture</p>
                <p className="text2">University Of Ruhuna</p>
                </MovingText> */}
                </div>
            </Container>
          </Navbar>
        </CustomDiv>
      );
}

