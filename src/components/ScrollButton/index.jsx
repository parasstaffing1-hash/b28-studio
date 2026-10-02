import React from "react";
import { Container, Wrap, ArrowWrap, StyledArrowUpwardRoundedIcon } from "./ScrollButton";

const ScrollButton = () => {
  return (
    <Container
      id="scrollButton"
      // whileInView={{
      //   left: "1em",
      //   opacity: 1,
      //   transition: { duration: 1, delay: 3.5, type: "spring" },
      // }}
      // viewport={{ once: true }}
    >
      <Wrap
        to="top"
        className="link hover"
        spy={true}
        offset={0}
        smooth={true}
        duration={1500}
        aria-label="Scroll back to top"
      >
        <ArrowWrap>
        <StyledArrowUpwardRoundedIcon />
        <StyledArrowUpwardRoundedIcon />
        </ArrowWrap>
      </Wrap>
    </Container>
  );
};

export default ScrollButton;
