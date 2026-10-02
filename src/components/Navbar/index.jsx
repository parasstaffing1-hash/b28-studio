import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import BurgerIcon from "../BurgerIcon";
import MobileMenu from "../MobileMenu";
import { siteContent } from "../../content/siteContent";
import {
  NavbarContainer,
  LogoHeader,
  NavWrap,
  MenuLink,
  NavSocials,
  NavSocial,
  StyledLink,
  Image,
} from "./Navbar";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    // console.log(`${isOpen}`);
    setisOpen(!isOpen);

    isOpen
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };

  return (
    <NavbarContainer
      name="top"
      style={{ opacity: 0, y: -20 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 3.5, type: "spring" },
      }}
      viewport={{ once: true }}
    >
      <LogoHeader>B28</LogoHeader>
      <NavWrap>
        <MenuLink
          className="link hover"
          spy={true}
          offset={100}
          smooth={true}
          duration={500}
          activeClass="active"
          to="aboutUs"
        >
          {siteContent.navigation.about}
        </MenuLink>
        <MenuLink
          className="link hover"
          spy={true}
          smooth={true}
          duration={1000}
          activeClass="active"
          to="gallery"
        >
          {siteContent.navigation.gallery}
        </MenuLink>
        <MenuLink
          className="link hover"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1500}
          activeClass="active"
          to="contact"
        >
          {siteContent.navigation.contact}
        </MenuLink>
      </NavWrap>
      <NavSocials>
        <NavSocial>
          <StyledLink
            className="hover"
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Facebook"
          >
            <Image src={Facebook} alt="Facebook" />
          </StyledLink>
        </NavSocial>
        <NavSocial>
          <StyledLink
            className="hover"
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Instagram"
          >
            <Image src={Instagram} alt="Instagram" />
          </StyledLink>
        </NavSocial>
      </NavSocials>
      <BurgerIcon setIsOpenHandler={setIsOpenHandler} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
