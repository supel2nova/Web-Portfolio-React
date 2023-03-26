import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
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
`;

const Text = styled(motion.span)`
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  margin-top:1rem;
  margin-left:3rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2, // 2
      delay: 5,
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
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="20px"
          viewBox="24 40 24 24"
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
          YEW
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
