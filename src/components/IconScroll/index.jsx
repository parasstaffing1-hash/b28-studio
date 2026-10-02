import React from "react";
import { IconScrollContainer, IconScrollContent } from "./IconScroll";

const IconScroll = () => {
  return (
    <IconScrollContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 3.5, type: "spring" },
      }}
      viewport={{ once: true }}
    >
      <IconScrollContent />
    </IconScrollContainer>
  );
};

export default IconScroll;
