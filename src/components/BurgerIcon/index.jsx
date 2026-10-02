import React from "react";
import {
  BurgerWrap,
  BurgerContainer,
  BurgerLineTop,
  BurgerLineCenter,
  BurgerLineBottom,
} from "./BurgerIcon";

const BurgerIcon = ({ setIsOpenHandler, isOpen }) => {
  return (
    <BurgerWrap className="link">
      <BurgerContainer
        onClick={setIsOpenHandler}
        role="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <BurgerLineTop isOpen={isOpen} />
        <BurgerLineCenter isOpen={isOpen} />
        <BurgerLineBottom isOpen={isOpen} />
      </BurgerContainer>
    </BurgerWrap>
  );
};

export default BurgerIcon;
