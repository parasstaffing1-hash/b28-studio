import React, { useEffect } from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { PagesContainer } from "./components/PagesContainer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Logo from "./components/Logo";
import AboutUsMobile from "./pages/AboutUsMobile";
import AboutUsDesktop from "./pages/AboutUsDesktop";
import Opinions from "./pages/Opinions";
import GalleryDesktop from "./pages/GalleryDesktop";
import GalleryMobile from "./pages/GalleryMobile";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import gsap from "gsap";
import { ScrollSmoother } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/all";
import Cursor from "./components/Cursor";

function App() {
  console.log("[APP] App component function executing");
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    let smoother;
    try {
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
      }
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        effects: true,
        smooth: 0.6,
        smoothTouch: 0.1,
      });
      smoother?.effects("#logobg", {
        speed: 0.5,
      });
    } catch (e) {
      console.warn("ScrollSmoother creation warning:", e);
    }
    gsap.to("#arrowleft", {
      scrollTrigger: {
        trigger: "#arrowleft",
      },
      left: "-6.2vw",
      top: "12em",
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#arrowright", {
      scrollTrigger: {
        trigger: "#arrowright",
      },
      right: "-6.2vw",
      top: "12em",
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#aboutLogo", {
      scrollTrigger: {
        trigger: "#aboutLogo",
      },
      opacity: 1,
      y: "2em",
      duration: 0.3,
      delay: 0.7,
    });
    gsap.to(".aboutImg", {
      scrollTrigger: {
        trigger: "#aboutLogo",
      },
      clipPath: "inset(0px 0px 0px 0px)",
    });
    gsap.to("#aboutText", {
      scrollTrigger: {
        trigger: "#aboutText",
      },
      opacity: 1,
      y: "3em",
      duration: 0.6,
      delay: 0.3,
    });
    gsap.to("#opinionsTitle", {
      scrollTrigger: {
        trigger: "#opinionsTitle",
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.3,
    });
    gsap.to(".opinion", {
      scrollTrigger: {
        trigger: ".opinion",
      },
      opacity: 1,
      duration: 0.8,
      delay: 0.3,
    });
    gsap.to("#contactTitle", {
      scrollTrigger: {
        trigger: "#contactTitle",
      },
      y: 0,
      opacity: 1,
      duration: 0.7,
      delay: 0.2,
    });
    gsap.to(".contactInfo", {
      scrollTrigger: {
        trigger: ".contactInfo",
      },
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.9,
    });
    gsap.to("#contactImage", {
      scrollTrigger: {
        trigger: "#contactImage",
      },
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.7,
    });
    gsap.to("#contactCone", {
      scrollTrigger: {
        trigger: "#contactCone",
      },
      clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0% 100%)",
      left: 0,
    });
    gsap.to("#footer", {
      scrollTrigger: {
        trigger: "#footer",
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.5,
    });

    gsap.to("#scrollButton", {
      scrollTrigger: {
        trigger: "#aboutText",
        start: "bottom bottom",
        endTrigger: "#footer",
        end: "top bottom",
        toggleActions: "play reverse restart reverse",
      },
      left: "1em",
      opacity: 1,
      duration: 0.2,
    });
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Cursor />
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <PagesContainer>
              <Landing />
              <Logo />
              <AboutUsMobile />
              <AboutUsDesktop />
              <Opinions />
              <GalleryMobile />
              <GalleryDesktop />
              <Contact />
              <Footer />
            </PagesContainer>
          </div>
        </div>
        <ScrollButton />
      </ThemeProvider>
    </>
  );
}

export default App;
