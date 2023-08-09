import ProjectItems from "./ProjectItems";
import screenshot from "../../assets/screenshot.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-14">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        veritatis distinctio aut tempora quisquam necessitatibus veniam dolorem
        nulla placeat aspernatur voluptatibus explicabo expedita temporibus
        totam laudantium, doloremque asperiores libero dolorum.
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
