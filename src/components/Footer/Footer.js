import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-scroll";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { motion } from "framer-motion";
export const FooterWrap = styled(motion.div)`
  position: relative;
  top: -2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2em;
  gap: 2em;
  margin: 4em auto 0 auto;
  opacity: 0;
  transform: translateY(50px);
  /* transition: all 0.5s ease; */
  @media screen and (min-width: 550px) {
    width: 26em;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0em;
  }
`;
export const Button = styled(Link)`
  width: 5em;
  height: 5em;
  position: relative;
  border: 3px solid ${theme.colors.fontWhite};
  border-radius: 50%;
  background: transparent;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.1);
  }
  @media screen and (min-width: 768px) {
    width: 4em;
    height: 4em;
    border: 5px solid ${theme.colors.fontWhite};
  }
`;
export const Wrap = styled.div`
  position: absolute;
  top: calc(50% - 1em);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  transition: all 0.5s ease;
  ${Button}:hover & {
    transform: translate(-50%, -60%);
  }
`;

const ArrowUp = ArrowUpwardRoundedIcon?.default || ArrowUpwardRoundedIcon;

export const StyledArrowUpwardRoundedIcon = styled(ArrowUp)`
  position: relative;
  font-size: 2em !important;
  color: ${theme.colors.fontWhite};
`;
