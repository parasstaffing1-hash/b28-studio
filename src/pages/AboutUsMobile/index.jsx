import { Container } from "../../components/Container";
import ImgOne from "../../assets/images/imgAbout1.png";
import ImgTwo from "../../assets/images/imgAbout2.png";
import AboutUsTitle from "../../components/AboutUsTitle";
import {
  AboutUsWrap,
  TextContainer,
  TextWrap,
  Text,
  Image,
} from "./AboutUsMobile";
import { siteContent } from "../../content/siteContent";

const AboutUsMobile = () => {
  return (
    <Container vh={"fit-content"}>
      <AboutUsTitle />
      <AboutUsWrap name="about">
        <Image img={ImgOne} topPos={"0em"} />
        <TextContainer>
          <TextWrap>
            <Text lettering>{siteContent.about.title}</Text>
            <Text>
              {siteContent.about.description}
            </Text>
          </TextWrap>
        </TextContainer>
        <Image img={ImgTwo} topPos={"-8em"} />
      </AboutUsWrap>
    </Container>
  );
};

export default AboutUsMobile;
