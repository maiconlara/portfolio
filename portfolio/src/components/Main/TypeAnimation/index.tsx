import { TypeAnimation } from "react-type-animation";

interface AnimationProps {
  context?: string;
  keyWord?: string;
  keyWord2?: string;
  keyWord3?: string;
}

const TextAnimation = ({
  context,
  keyWord,
  keyWord2,
  keyWord3,
}: AnimationProps) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `${context} ${keyWord}`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `${context} ${keyWord2}`,
        1000,
        `${context} ${keyWord3}`,
        1000,
      ]}
      wrapper="span"
      speed={32}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
