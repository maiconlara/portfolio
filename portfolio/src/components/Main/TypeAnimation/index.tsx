import { TypeAnimation } from "react-type-animation";

interface AnimationProps {
  keyWord?: string;
  keyWord2?: string;
  keyWord3?: string;
}

const TextAnimation = ({
  keyWord,
  keyWord2,
  keyWord3,
}: AnimationProps) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `Sou ${keyWord}`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `${keyWord2}`,
        1000,
        ` E um ${keyWord3}...`,
        3000,
      ]}
      wrapper="span"
      speed={32}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
