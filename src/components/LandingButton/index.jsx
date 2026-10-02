import Messenger from "../../assets/images/messenger.svg";
import { ButtonContainer, Image } from "./LandingButton";
import { siteContent } from "../../content/siteContent";

const LandingButton = () => {
  return (
    <ButtonContainer aria-label={siteContent.hero.cta}>
      <Image src={Messenger} width={30} height={30} alt="Messenger" />
      {siteContent.hero.cta}
    </ButtonContainer>
  );
};

export default LandingButton;
