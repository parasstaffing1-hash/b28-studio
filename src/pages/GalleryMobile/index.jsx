import React, { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { galleryData } from "../../assets/data/galleryData";

import {
  GalleryContainer,
  SlidesContainer,
  SlidesWrap,
  Slide,
  Title,
  Image,
} from "./GalleryMobile";
import { siteContent } from "../../content/siteContent";
const GalleryMobile = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const slideDelay = 1.5;
    const slides = document.querySelectorAll(".slide");
    const numSlides = slides.length;
    if (numSlides === 0) return;

    gsap.set(slides, { xPercent: (i) => i * 100 });

    const wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
    const wrapProgress = gsap.utils.wrap(0, 1);
    const timer = gsap.delayedCall(slideDelay, autoPlay).pause();
    const proxy = document.createElement("div");
    let slideWidth = 0;
    let wrapWidth = 0;
    const animation = gsap.timeline({ repeat: -1 });
    resize();

    const draggable = new Draggable(proxy, {
      trigger: ".slides-container",
      type: "x",
      inertia: true,
      onPressInit: function () {
        animation.pause();
        timer.pause();
        updateProgress();
      },
      snap: {
        x: (value) => gsap.utils.snap(slideWidth, value),
      },
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      onThrowComplete: function () {
        timer.restart(true);
      },
    });

    window.addEventListener("resize", resize);

    function autoPlay() {
      animation.play();
      gsap.fromTo(
        animation,
        { timeScale: 0 },
        { timeScale: 1, duration: 1, overwrite: true, ease: "power1.in" }
      );
    }

    function updateProgress() {
      animation.progress(
        wrapProgress(gsap.getProperty(proxy, "x") / wrapWidth)
      );
    }

    function resize() {
      const progress = animation.progress();
      slideWidth = slides[0].offsetWidth;
      wrapWidth = slideWidth * numSlides;

      animation
        .progress(0)
        .clear()
        .to(slides, {
          duration: 100,
          xPercent: "+=" + numSlides * 100,
          ease: "none",
          modifiers: {
            xPercent: wrap,
          },
        })
        .to(proxy, { x: wrapWidth, duration: 100, ease: "none" }, 0)
        .progress(progress);
    }

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const galleryMobileData = galleryData.slice(0, 7);

  return (
    
      <GalleryContainer name="galleryMobile">
        <SlidesContainer className="slides-container">
          <Title>{siteContent.gallery.mobileTitle}</Title>
          <SlidesWrap>
            {galleryMobileData.map((item) => (
              <Slide className="slide" key={item.id}>
                <Image
                  src={item.img}
                  alt={`Tattoo artwork ${item.id}`}
                  style={{ scale: 0.8 }}
                  whileInView={{
                    scale: 1,
                  }}
                />
              </Slide>
            ))}
          </SlidesWrap>
        </SlidesContainer>
      </GalleryContainer>
    
  );
};

export default GalleryMobile;
