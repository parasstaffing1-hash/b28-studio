import { LogoContainer, Image } from "./Logo";
import LogoB28 from "../../assets/images/logo.svg";
const Logo = () => {
  return (
    <LogoContainer
      id="logobg"
      style={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: .5, delay: 3 },
      }}
      viewport={{ once: true }}
    >
      <Image src={LogoB28} alt="B28 Tattoo Studio Logo" />
    </LogoContainer>
  );
};

export default Logo;
