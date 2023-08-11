import TextAnimation from "./TypeAnimation";
import background from "../../assets/background.webp";
import { FaTwitch, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src={background}
        alt="bg zelda and link night"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="max-w-[70vw] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-950 ">
            Olá, eu sou Maicon Lara
          </h1>
          <h2 className="flex text-lg text-gray-950">
            <TextAnimation
              keyWord={"desenvolvedor"}
              keyWord2={"Estudante"}
              keyWord3={"fã de jogos"}
            />
          </h2>
          <div className="flex gap-4 ">
            <a href="https://br.linkedin.com/in/maiconlara" target="_blank">
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com//maiconlara1" target="_blank">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/maiconlara" target="_blank">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a href="https://twitch.tv/darkyylol" target="_blank">
              <FaTwitch className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
