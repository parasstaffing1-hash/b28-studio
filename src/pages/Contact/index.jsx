import React from "react";
import ContactContent from "../../components/ContactContent";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { TitleWrap } from "./Contact";
import { siteContent } from "../../content/siteContent";

const Contact = () => {
  return (
    <Container vh="fit-content" contact>
      <TitleWrap
        name="contact"
        id="contactTitle"
      >
        <Title>{siteContent.contact.titlePart1}</Title>
        <Title>{siteContent.contact.titlePart2}</Title>
      </TitleWrap>
      <ContactContent />
    </Container>
  );
};

export default Contact;
