import TextAnimation from "./TypeAnimation";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://i.ibb.co/HhPtpfx/cropped-5120-2880-1065885.jpg"
        alt="bg zelda and link night"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="max-w-[70vw] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-950 ">
            Oi! aqui é o Maicon Lara
          </h1>
          <h2 className="flex text-lg text-gray-950">
            <TextAnimation
              context={"Sou"}
              keyWord={"desenvolvedor"}
              keyWord2={"estudante"}
              keyWord3={"fã de jogos"}
            />
          </h2>
          <div className="flex gap-4 ">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
