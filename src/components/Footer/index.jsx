import React from "react";
import { Title } from "../Title";
import {
  FooterWrap,
  Button,
  Wrap,
  StyledArrowUpwardRoundedIcon,
} from "./Footer";
import { siteContent } from "../../content/siteContent";

const Footer = () => {
  return (
    <FooterWrap id="footer">
      <Title>{siteContent.footer.title}</Title>
      <Button
        to="top"
        className="link hover"
        spy={true}
        offset={0}
        smooth={true}
        duration={1500}
        aria-label="Scroll back to top"
      >
        <Wrap>
          <StyledArrowUpwardRoundedIcon />
          <StyledArrowUpwardRoundedIcon />
        </Wrap>
      </Button>
    </FooterWrap>
  );
};

export default Footer;
