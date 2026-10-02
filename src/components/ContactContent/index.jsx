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
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <StyledFacebookOutlined />
              <Text>Facebook</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              className="hover"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <StyledInstagramIcon />
              <Text>Studio Instagram</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              className="hover"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit artist Instagram"
            >
              <StyledInstagramIcon />
              <Text>Artist One</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              className="hover"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit artist Instagram"
            >
              <StyledInstagramIcon />
              <Text>Artist Two</Text>
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
