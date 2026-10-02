import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import DoorImage from "../../assets/images/contact.png";
import { FacebookOutlined } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
export const ContactWrap = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 20em;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;
export const ContactCone = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    left: -10%;
    width: 100%;
    height: 80%;
    background-color: ${theme.colors.menuSecond};
    z-index: 0;
    clip-path: polygon(0 40%, 5% 50%, 5% 50%, 0 60%);
    transition: all 0.5s ease;
  }
`;
export const ImageContainer = styled(motion.div)`
  width: 15em;
  height: 21em;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  background-image: url(${DoorImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
  position: absolute;
  margin-top: -2.5em;
  transform: translateY(50px);
  opacity: 0;
  /* transition: all 0.5s ease 0.5s; */
  @media screen and (min-width: 768px) {
    position: static;
    max-width: 260px;
    max-height: 360px;
    clip-path: none;
    z-index: 2;
    margin-top: 0;
  }
  @media screen and (min-width: 1600px) {
    max-width: 420px;
    max-height: 540px;
    clip-path: none;
    z-index: 2;
    margin-top: 0;
  }
`;
export const InfoContainer = styled(motion.div)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => (props.left ? "21em" : "0")};
  margin-bottom: 2em;
  opacity: 0;
  transform: translateY(-50px);
  /* transition: all 0.5s ease 0.7s; */
  @media screen and (min-width: 768px) {
    width: 25%;
    height: 60%;
    align-items: ${(props) => (props.left ? "center" : "flex-start")};
    margin-bottom: 0;
    padding-top: 0;
  }
`;
export const InfoWrap = styled.div`
  width: 10em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8em;
  font-size: 0.9em;
  /* transition: all 1s linear; */
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.left ? "60%" : "fit-content")};
    font-size: 0.6em;
    margin-bottom: 0.3em;
  }
  @media screen and (min-width: 960px) {
    margin-left: ${(props) => (props.left ? "0" : "22%")};
  }
  @media screen and (min-width: 1280px) {
    font-size: 0.7em;
    margin-bottom: 0.5em;
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
  font-family: "Playfair Display";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding: 0.2em 0.6em;
  border-radius: 1em;
  transition: all 0.2s ease;
  cursor: none;
  &:hover {
    background-color: ${theme.colors.menuFifth};
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Text = styled.p`
  color: ${theme.colors.fontWhite};
  font-weight: ${(props) => (props.info ? "700" : "400")};

  @media screen and (min-width: 768px) {
    color: ${theme.colors.fontDark};
  }
`;
export const Logo = styled.div`
  position: absolute;
  bottom: 0;
  width: 90%;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 40%;
    position: relative;
    margin-top: 2em;
  }
  @media screen and (min-width: 960px) {
    width: 30%;
    /* margin-top: 5em; */
  }
  @media screen and (min-width: 1600px) {
    width: 20%;
    /* margin-top: 5em; */
  }
`;

const Instagram = InstagramIcon?.default || InstagramIcon;
const Facebook = FacebookOutlined?.default || FacebookOutlined;

export const StyledInstagramIcon = styled(Instagram)`
  font-size: ${theme.fontSizes.normal} !important;
  text-decoration: none;
  color: ${theme.colors.fontWhite};

  @media screen and (min-width: 768px) {
    color: ${theme.colors.fontDark};
  }
`;
export const StyledFacebookOutlined = styled(Facebook)`
  font-size: ${theme.fontSizes.normal} !important;
  text-decoration: none;
  color: ${theme.colors.fontWhite};

  @media screen and (min-width: 768px) {
    color: ${theme.colors.fontDark};
  }
`;

