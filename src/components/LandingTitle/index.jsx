import { useRef } from "react";

import {
  StyledLandingTitle,
  TitleWrap,
  LandingTitleWrap,
} from "./LandingTitle";
import { keyframes } from "styled-components";
const LandingTitle = () => {
  const ref = useRef();
  const b28Gradient = keyframes`
    0% {
      background-position: 100% 0%;
    }
      50% {
          background-position: 0% 0%;
      }
      100% {
          background-position: 0% 0%;
      }
  `;
  const studioGradient = keyframes`
      0% {
          background-position: 100% 0%;
      }
      25% {
          background-position: 100% 0%;
      }
    100% {
          background-position: 0% 0%;
      }
    `;

  return (
    <LandingTitleWrap ref={ref}>
      <TitleWrap
        id="landing"
        initial={{ y: "100%", skew: "5deg, 5deg" }}
        animate={{
          skew: "0deg, 0deg",
          y: 0,
          transition: { duration: 2, delay: 4, type: "spring" },
        }}
        viewport={{ once: true }}
      >
        <StyledLandingTitle anim={b28Gradient}>B28</StyledLandingTitle>
        <StyledLandingTitle secondary anim={studioGradient}>
          studio
        </StyledLandingTitle>
      </TitleWrap>
    </LandingTitleWrap>
  );
};

export default LandingTitle;
