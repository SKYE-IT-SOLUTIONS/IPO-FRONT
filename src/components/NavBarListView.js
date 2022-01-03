import React from 'react'
import { Container, Row, Col } from "./CommonComponents";
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const NavList =  styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    min-height: 76vh;
`

const CustomUl = styled.ul`
    list-style-type: none;
`

const CustomLi = styled.li`
    margin: 15px 0;
`

function NavBarListView() {
    return (
        <NavList>
            <div  style={{margin:"auto"}}>
            <CustomUl>
                <CustomLi><Icon icon="bi:arrow-right-circle-fill" height="20" /> How to prepare a CV</CustomLi>
                <CustomLi><Icon icon="bi:arrow-right-circle-fill" height="20" /> Facing an interview</CustomLi>
                <CustomLi><Icon icon="bi:arrow-right-circle-fill" height="20" /> Findinng a job</CustomLi>
                <CustomLi><Icon icon="bi:arrow-right-circle-fill" height="20" /> Personal development</CustomLi>
                <CustomLi><Icon icon="bi:arrow-right-circle-fill" height="20" /> Finding scholarships</CustomLi>
                <CustomLi><Icon icon="bi:arrow-right-circle-fill" height="20" /> Foreign Employment</CustomLi>
                <CustomLi><Icon icon="bi:arrow-right-circle-fill" height="20" /> Plot the career path</CustomLi>

            </CustomUl>
            </div>
            
        </NavList>
    )
}

export default NavBarListView
