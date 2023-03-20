import React from 'react'
import styled from 'styled-components';
import images from "../Assets/lefthero.png"
import images2 from "../Assets/right.png"


const Hero = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Text>It’s possible with teamwork</Text>
          </Left>
          <Right>
            <Images src={images2}/>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Hero
const Text = styled.h2`
  color: #253858;
  font-size: 55px;
  margin-left: 40px;
  font-weight: 500;
  width: 500px;
  /* background-color: red; */
  span{
    margin-left: 65px;
    color: #253858;
  }
  @media screen and (max-width: 425px) {
    font-size: 40px;
    margin-left: 0px;
  }
   @media screen and (max-width: 375px) {
    font-size: 25px;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
  }
`

const Images = styled.img`
  height: 460px;
  @media screen and (max-width: 425px) {
    height: 300px;
  }
  @media screen and (max-width: 375px) {
    height: 270px;
  }
`
const Right = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 100%;
  }
  @media screen and (max-width: 425px){
    width: 100%;
    display: flex;
    height: 70%;

    overflow: hidden;
    /* background-color: red; */
     @media screen and (max-width: 375px) {
    height: 40%;
  }
  }
`

const Left = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  font-weight: 800;
  /* background-image: url(${images}); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
     @media (max-width: 800px) {
    text-align: center;
     }
     @media (max-width: 425px) {
    text-align: center;
    display: flex;
    justify-content: center;
    /* background-color: red;s */
     }
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }
`


const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 425px) {
      margin-top: 40px;
    }
`