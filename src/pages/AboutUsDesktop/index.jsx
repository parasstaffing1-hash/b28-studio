import React from "react";
import { Container } from "../../components/Container";
import ImageOne from "../../assets/images/imgAbout1.png";
import ImageTwo from "../../assets/images/imgAbout2.png";
import LogoPic from "../../assets/images/logoDark.svg";

import {
  AboutUsContainer,
  AboutUsWrap,
  Image,
  TextContainer,
  Text,
  Logo,
  Arrow,
} from "./AboutUsDesktop";
import { siteContent } from "../../content/siteContent";
const AboutUsDesktop = () => {
  return (
    <Container vh="fit-content">
      <AboutUsContainer name="aboutUs">
        <AboutUsWrap top>
          <TextContainer
          id="aboutText"
          // style={{ opacity: 0, y: "4em" }}
          // whileInView={{
          //   opacity: 1,
          //   y: "3em",
          // }}
          // viewport={{ once: true }}
          >
            <Text big>{siteContent.about.title}</Text>
            <Text>
              {siteContent.about.description}
            </Text>
          </TextContainer>
        </AboutUsWrap>
        <AboutUsWrap bgc>
          <Image
          left="true"
            className="aboutImg"
            img={ImageTwo}
            // style={{ clipPath: "inset(0px 0px 100% 0px)" }}
            // whileInView={{
            //   clipPath: "inset(0px 0px 0px 0px)",
            // }}
            // viewport={{ once: true }}
          />
          <Logo
            id="aboutLogo"
            img={LogoPic}
            // style={{ opacity: 0, y: "0em" }}
            // whileInView={{
            //   opacity: 1,
            //   y: "2em",
            // }}
            // viewport={{ once: true }}
          />
          <Image
            className="aboutImg"
            img={ImageOne}
            // style={{ clipPath: "inset(0px 0px 100% 0px)" }}
            // whileInView={{
            //   clipPath: "inset(0px 0px 0px 0px)",
            // }}
            // viewport={{ once: true }}
          />
        </AboutUsWrap>
        <Arrow
          id="arrowleft"
          left="true"
          l="-70vw"
          // style={{ top: "4em", left: "-61vw" }}
          // whileInView={{
          //   top: "12em",
          //   left: "-6.6vw",
          // }}
          // viewport={{ once: true }}
        />
        <Arrow
          id="arrowright"
          r="-70vw"
          // style={{ top: "4em", right: "-61vw" }}
          // whileInView={{
          //   top: "12em",
          //   right: "-6.6vw",
          // }}
          // viewport={{ once: true }}
        />
      </AboutUsContainer>
    </Container>
  );
};

export default AboutUsDesktop;
