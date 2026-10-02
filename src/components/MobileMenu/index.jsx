import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { theme } from "../../assets/styles/theme";
import {
  MobileMenuContainer,
  MobilePhoneContainer,
  MobileMenuLogo,
  MobileMenuPhone,
  MobileItemContainer,
  ItemLink,
} from "./MobileMenu";
import { siteContent } from "../../content/siteContent";
const MobileMenu = ({setIsOpenHandler}) => {
  const menu = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const main = {
    hidden: {
      opacity: 1,
      y: "-40vh",
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 1,
      x: "-130vw",
      y: 50,
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
  };
  const itemOdd = {
    hidden: {
      opacity: 1,
      x: "130vw",
      y: -50,
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
  };
  return (
    <MobileMenuContainer
      variants={menu}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <MobilePhoneContainer
        style={{ skewY: -7, translateY: "-15%" }}
        variants={main}
        bgc={theme.colors.menuFirst}
      >
        <MobileMenuLogo>B28</MobileMenuLogo>
        <MobileMenuPhone>+48 797 098 991</MobileMenuPhone>
      </MobilePhoneContainer>
      <MobileItemContainer
        whileTap={{ scale: 1.1 }}
        zi={4}
        style={{ skewY: -7, translateY: "-15%" }}
        variants={item}
        bgc={theme.colors.menuSecond}
      >
        <ItemLink
          to="top"
          offset={-500}
          smooth={true}
          onClick={setIsOpenHandler}
        >
          {siteContent.navigation.home}
        </ItemLink>
      </MobileItemContainer>
      <MobileItemContainer
        whileTap={{ scale: 1.1 }}
        zi={3}
        style={{ skewY: -7, translateY: "-15%" }}
        variants={itemOdd}
        bgc={theme.colors.menuThird}
      >
        <ItemLink
          to="about"
          offset={-150}
          smooth={true}
          onClick={setIsOpenHandler}
        >
          {siteContent.navigation.about}
        </ItemLink>
      </MobileItemContainer>
      <MobileItemContainer
        whileTap={{ scale: 1.1 }}
        zi={2}
        style={{ skewY: -7, translateY: "-15%" }}
        variants={item}
        bgc={theme.colors.menuFourth}
      >
        <ItemLink
          to="galleryMobile"
          offset={-50}
          smooth={true}
          onClick={setIsOpenHandler}
        >
          {siteContent.navigation.gallery}
        </ItemLink>
      </MobileItemContainer>
      <MobileItemContainer
        whileTap={{ scale: 1.1 }}
        zi={1}
        style={{ skewY: -7, translateY: "-15%" }}
        variants={itemOdd}
        bgc={theme.colors.menuFifth}
      >
        <ItemLink
          to="contact"
          offset={-75}
          smooth={true}
          onClick={setIsOpenHandler}
        >
          {siteContent.navigation.contact}
        </ItemLink>
      </MobileItemContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
