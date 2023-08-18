import ProjectItems from "./ProjectItems";
import screenshot from "../../assets/screenshot.png";
import pokedex from "../../assets/pokedex.png";
import feedget from "../../assets/feedget.png";
import portfolio from "../../assets/portfolio.png";
import { FaHtml5, FaCss3, FaReact, FaPhp } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-14">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projetos
      </h1>
      <p className="text-center py-8">
        Projetos feitos no decorrer da minha formação na UFPR
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems
          img={pokedex}
          title={"Pokedex App"}
          tools={<FaReact color="#5ED3F3" size={20} />}
        />
        <ProjectItems
          img={feedget}
          title={"Feedget App"}
          tools={<FaReact color="#5ED3F3" size={20} />}
        />
        <ProjectItems
          img={screenshot}
          title={"Store App"}
          tools={<FaHtml5 color="#E96228" size={20} />}
          tools2={<FaCss3 color="#02A9BD" size={20} />}
          tools3={<FaPhp color="#02A9BD" size={20} />}
        />
        <ProjectItems
          img={portfolio}
          title={"Portfolio App"}
          tools={<FaReact color="#5ED3F3" size={20} />}
        />
      </div>
    </div>
  );
};
export default Projects;
