import React, { useEffect, useRef } from "react";
import useScrollPosition from "../useScrollPosition";
import {
  TitleContainerWrap,
  TitleContainer,
  TitleWrap,
  Title,
} from "./AboutUsTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { siteContent } from "../../content/siteContent";

const ST = ScrollTrigger?.ScrollTrigger || ScrollTrigger;

const AboutUsTitle = () => {
 
  useEffect(() => {
    if (ST) {
      gsap.registerPlugin(ST);
    }
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewX", "deg"),
      clamp = gsap.utils.clamp(-20, 20);
      
    if (ST && typeof ST.create === "function") {
      ST.create({
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -150);

          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });
    }

    gsap.to(".skewElem", {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  }, []);

  return (
    <TitleContainerWrap >
      <TitleContainer className="skewElem">
        <TitleWrap mobile>
          <Title mobile>{siteContent.about.marquee}</Title>
        </TitleWrap>
        <Title>
          {`${siteContent.about.marquee} ${siteContent.about.marquee} ${siteContent.about.marquee} ${siteContent.about.marquee}`}
        </Title>
      </TitleContainer>
    </TitleContainerWrap>
  );
};

export default AboutUsTitle;
