import React from "react";
import LogoB28 from "../../assets/images/logo.svg";

import {
  ContactWrap,
  ContactCone,
  ImageContainer,
  InfoContainer,
  InfoWrap,
  StyledLink,
  Text,
  Logo,
  StyledFacebookOutlined,
  StyledInstagramIcon,
} from "./ContactContent";
import { siteContent } from "../../content/siteContent";

const ContactContent = () => {
  return (
    <>
      <ContactWrap>
        <InfoContainer
          left="true"
          className="contactInfo"
        >
          <InfoWrap left="true">
            <Text>{siteContent.contact.addressLabel}</Text>
            <Text info>{siteContent.contact.addressValue}</Text>
          </InfoWrap>
          <InfoWrap left="true">
            <Text>{siteContent.contact.hoursLabel}</Text>
            <Text info>{siteContent.contact.hoursValue}</Text>
          </InfoWrap>
          <InfoWrap left="true">
            <Text>{siteContent.contact.phoneLabel}</Text>
            <Text info>{siteContent.contact.phoneValue}</Text>
          </InfoWrap>
        </InfoContainer>
        <ImageContainer
          id="contactImage"
          role="img"
          aria-label="B28 Tattoo Studio Atelier Interior"
        />
        <InfoContainer
          className="contactInfo"
        >
          <InfoWrap>
            <StyledLink
              className="hover"
              href="https://www.facebook.com/B28Tattoo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit B28 Tattoo Facebook page"
            >
              <StyledFacebookOutlined />
              <Text>Facebook</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              className="hover"
              href="https://www.instagram.com/b28tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit B28 Tattoo Instagram"
            >
              <StyledInstagramIcon />
              <Text>B28 studio</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              className="hover"
              href="https://www.instagram.com/b28_damian/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit artist Damian's Instagram"
            >
              <StyledInstagramIcon />
              <Text>B28 Damian</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              className="hover"
              href="https://www.instagram.com/demonology_ink/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit demonology_ink Instagram"
            >
              <StyledInstagramIcon />
              <Text>demonology_ink</Text>
            </StyledLink>
          </InfoWrap>
        </InfoContainer>
        <ContactCone
          id="contactCone"
        />
      </ContactWrap>
      <Logo src={LogoB28} id="contactLogo" alt="B28 Tattoo Studio Logo" />
    </>
  );
};

export default ContactContent;
