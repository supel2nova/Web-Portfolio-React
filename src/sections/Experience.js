import React from "react";
import styled from "styled-components";
import { useRef } from "react";

const Section = styled.section`
  min-height: 100vh;
  max-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  margin-top:10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 7rem;
  font-family: "Kaushan Script";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
  margin-top:-1rem;
  

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 8vw)`};
    top: 0;
    left: 0;
    margin-top: 5rem;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 15vw)`};
  }
`;

const BannerComponent = styled.h1`
  font-size: 2.5rem;
  margin:0px;
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  @media (max-width: 70em) {
    font-size: 1.8rem;
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: 0.8rem;
  }

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Experience = () => {
  const ref = useRef(null);
  return (
    <Section ref={ref} id="experience">
      <Title
        data-scroll
        data-scroll-speed="-8"
        data-scroll-direction="horizontal"
      >
        Experience
      </Title>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Junior Software Developer - Generation Thailand 2022
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            Quality Control Engineer - S.Y. Karnchang Part.,Ltd. 2016 - 2018
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            Quality Control Engineer - Thai-Yazaki Electric Wire co.,ltd - 2015
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            Industrial Engineering - RMUTK 2011 - 2016
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Experience;
