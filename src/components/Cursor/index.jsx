import React, { useRef, useEffect } from "react";
import { CustomCursor, Wrap } from "./Cursor";

const Cursor = () => {
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${
          clientX - mainCursor.current.clientWidth / 2
        }px, ${clientY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const cursorWrap = document.getElementById("cursorWrap");
    const cursor = document.getElementById("cursor");
    const hover = document.querySelectorAll(".hover");

    const onEnter = () => {
      if (cursor) cursor.style.transform = "rotate(180deg) scale(2)";
      if (cursorWrap) cursorWrap.style.backgroundColor = "white";
    };
    const onLeave = () => {
      if (cursor) cursor.style.transform = "rotate(0deg) scale(1)";
      if (cursorWrap) cursorWrap.style.backgroundColor = "transparent";
    };

    hover.forEach((item) => {
      item.addEventListener("mouseover", onEnter);
      item.addEventListener("mouseleave", onLeave);
    });

    return () => {
      hover.forEach((item) => {
        item.removeEventListener("mouseover", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
  return (
    <CustomCursor ref={mainCursor} id="cursorWrap">
      <Wrap id="cursor"></Wrap>
    </CustomCursor>
  );
};

export default Cursor;
