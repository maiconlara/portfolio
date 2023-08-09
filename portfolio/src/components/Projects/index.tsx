import ProjectItems from "./ProjectItems";
import screenshot from "../../assets/screenshot.png";

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
        <ProjectItems img={screenshot} title={"Pokedex App"} tools="React+TS"/>
        <ProjectItems img={screenshot} title={"Store App"}  tools="HTML+CSS+JS"/>
        <ProjectItems img={screenshot} title={"Jokenpo Game"} tools="HTML+CSS+JS"/>
        <ProjectItems img={screenshot} title={"Portfolio App"} tools="React+TS"/>
      </div>
    </div>
  );
};
export default Projects;
