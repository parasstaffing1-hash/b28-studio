import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-scroll";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
export const Container = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    left: -1em;
    bottom: 1em;
    width: 3em;
    height: 3em;
    border: 3px solid ${theme.colors.fontWhite};
    border-radius: 50%;
    background: transparent;
    z-index: 999;
    mix-blend-mode: difference;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const Wrap = styled(Link)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
export const ArrowWrap = styled.div`
  position: absolute;
  top: calc(50% - 1em);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  transition: all 0.5s ease;

  ${Wrap}:hover & {
    transform: translate(-50%, -60%);
  }
`;

const ArrowUp = ArrowUpwardRoundedIcon?.default || ArrowUpwardRoundedIcon;

export const StyledArrowUpwardRoundedIcon = styled(ArrowUp)`
  font-size: 2em !important;
  color: ${theme.colors.fontWhite};
  /* background-color: cadetblue; */
`;
