import { Container } from "../../components/Container";
import Opinion from "../../components/Opinion";
import { Title } from "../../components/Title";
import { TitleWrap, Wrap } from "./Opinions";
import { siteContent } from "../../content/siteContent";

const Opinions = () => {
  return (
    <Container vh="fit-content" opinions>
      <TitleWrap id="opinionsTitle">
        <Title opinions>{siteContent.opinions.title}</Title>
      </TitleWrap>
      <Wrap>
        <Opinion
          first="true"
          t={"-.2em"}
          l={"-.4em"}
          text={siteContent.opinions.reviews[0].text}
        />
        <Opinion
          t={"99%"}
          l={"99%"}
          text={siteContent.opinions.reviews[1].text}
        />
      </Wrap>
    </Container>
  );
};

export default Opinions;
