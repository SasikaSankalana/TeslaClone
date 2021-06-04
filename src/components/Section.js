import React from 'react';
import styled from 'styled-components';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
AOS.init({
    once: false, 
    mirror: true, 
});


function Section(props) {


    return (
        
        <Container bgImage={props.backgroundImg} >
            
            <Cover 
                className="aos-item" 
                data-aos="fade" 
                data-aos-anchor-placement="center-center" 
                data-aos-easing="ease-in-out" 
            >

                <ItemText>   

                    <Title className="animate__animated animate__fadeInUp animate__delay-1s ">{props.title}</Title>
                    <Text className="animate__animated animate__fadeIn animate__delay-2s">{props.description}</Text>

                </ItemText>
                <ButtonGroup >

                    <LeftButton className="animate__animated animate__fadeInLeft animate__delay-2s">{props.leftBtnText}</LeftButton>
                    <RightButton className="animate__animated animate__fadeInRight animate__delay-2s">{props.rightBtnText}</RightButton>

                </ButtonGroup>

            </Cover>
            <div className="animate__animated animate__fadeInDown animate__delay-2s">
            {props.isFirst? <DownArrow src = "/images/down-arrow.svg" /> : <DownArrow className="animate__animated animate__fadeInDown animate__delay-2s" src="" />}
            </div>
        </Container>
        
    )
}

export default Section



const Container = styled.div`
    background-color: white;
    width: 100%;
    height:100vh;
    background-image: ${props => `url(/images/${props.bgImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: center ;
    

`
const ItemText = styled.div`
    padding-top: 16vh;
    text-align: center;
    flex-grow: 1;
`
const Cover = styled.div`
    height:90vh;
    display:flex;
    flex-direction: column;
    flex-grow: 1;
`

const Title = styled.h1`
    font-size:40px;
    font-weight: 500;
    padding: 4px;
`
const Text = styled.p`
    font-family: 'Gotham-book';
    font-size: 14px;
    color: #5C5E62;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:12px;
    opacity: 0.85;
    margin: 8px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 5px 40px;
` 

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 30px;
`
