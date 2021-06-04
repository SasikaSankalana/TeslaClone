import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Burger from'./Burger';
import { MenuToggle } from "./MenuToggle";
import { motion, useCycle } from "framer-motion";

function Header() {
    // const [isOpen, toggleOpen] = useCycle(false, true);
    const [burgerState, setburgerState] = useState(false);
    // const containerRef = useRef(null);
    return (
        <Container>
            <a href = "#">
                <TeslaLogo src="./images/logo.svg" alt="logo"/>
            </a>

            <MenuGroup>
                <div>Model S</div>
                <div>Model 3</div>
                <div>Model X</div>
                <div>Model Y</div>
                <div>Solar Roof</div>
                <div>Solar Panels</div>
            </MenuGroup>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <Burger />
                {/* <MenuIconContainer onClick = {() => setburgerState(true)}> */}
                    {/* <MenuIcon /> */}
                

                {/* <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    ref={containerRef}>
                    <MenuToggle toggle={() => toggleOpen()} /> */}

                {/* </motion.nav> */}
                {/* </MenuIconContainer> */}
            </RightMenu>

            <BurgerNav status = {burgerState}>
                <CloseContainer onClick = {() => setburgerState(false)}>
                    <Close/>
                </CloseContainer>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>
            </BurgerNav>



        </Container>

    )
}

export default Header

const Container = styled.div`

    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

`
const TeslaLogo = styled.img`
    margin-top: 10px;
    height: 14px;
    width: 100px;
`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div {
        font-weight: 400;
        padding: 0 10px;
        cursor: pointer;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    padding-top: 0px;
    a{
        font-weight: 400;
        text-transform: uppercase;
        padding-right: 10px;
        padding-left: 10px;

    }
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform: ${props => props.status ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, 0.2) ;
        a{
            font-weight: 600;
        }
    }
`

const Close = styled(CloseIcon)`
`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`