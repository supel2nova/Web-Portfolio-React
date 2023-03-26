import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: 2rem;
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="20px"
        viewBox="40 60 24 24"
        width="48px"
        fill="none"
      >
        <g></g>
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M89.3,49c-5.7-3.5-10.8-8.1-15.3-13.1c-3.6-4.1-9.9,2.1-6,6c2.2,2.2,4.6,4,7.1,5.7c-5.5,0.4-11.3,0.8-16.3-0.1   c-3.2-11.1-3.7-22.9-4.3-34.3C54.2,8.3,47.2,7,45.8,12c-4,13.9-6.3,28.1-9.3,42.2c-1.4-7.5-2.7-15-3.3-22.7   c-0.3-3.3-4.8-5.1-6.7-1.8c-1.9,3.5-3.7,7-5.5,10.5c-1.1,2.3-3.5,9.6-5.8,10.7c-3.4,1.6-9.6,0.6-13.6,1.1c-2,0.3-1.7,3.3,0,3.8   c4.4,1.2,12.9,2.9,17,0.8c2.7-1.3,4.3-5.4,5.6-7.8c1-1.7,1.9-3.5,2.8-5.2c1.1,10.9,2.8,21.8,4.7,32.5c0.8,4.6,7.6,4,8.8,0   C43.8,64.7,46,53,48.2,41.3c0.4,4.3,1,8.9,2.8,11.7c2.2,3.4,5.8,3.4,9.7,3.7c4,0.3,8,0.4,12.1,0.4c-2.3,1.8-4.3,3.8-5.8,6.3   c-1.9,3.1,2.2,5.6,4.7,3.6c5.7-4.4,11.7-8.2,17.6-12.3C91.3,53.3,91.6,50.4,89.3,49z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        Loading......
      </Text>
    </Container>
  );
};

export default Loader;
