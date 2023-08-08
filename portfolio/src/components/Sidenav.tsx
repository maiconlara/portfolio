import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNavState = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNavState}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-sceen bg-white/90">
          <a href="#main">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Sidenav;
