import ProjectItems from "./ProjectItems";
import pokedex from "../../assets/pokedex.png";
import feedget from "../../assets/feedget.png";
import yugioh from "../../assets/yugioh.png";
import spacetime from "../../assets/spacetime.png";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-14">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projetos
      </h1>
      <p className="text-center py-8">
        Projetos realizados no decorrer da minha formação como desenvolvedor
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems
          link="http://yugioh-password.vercel.app/"
          img={yugioh}
          title={"Yu-Gi-Oh! Password"}
          tools="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg"
          tools3="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nextjs/nextjs-line.svg"
          tools2="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg"
          tools4="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg"
        />
        <ProjectItems
          link="https://spacetime-maiconlara.vercel.app/"
          img={spacetime}
          title={"Spacetime"}
          tools="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg"
          tools3="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nextjs/nextjs-line.svg"
          tools2="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg"
          tools4="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg"
        />
        <ProjectItems
          link="https://pokemondex-maiconlara.vercel.app/"
          img={pokedex}
          title={"Pokedex"}
          tools="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg"
          tools2="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg"
        />
        <ProjectItems
          link="https://feedget-maiconlara.vercel.app/"
          img={feedget}
          title={"Feedget App"}
          tools="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg"
          tools2="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg"
          tools3="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg"
        />
      </div>
    </div>
  );
};
export default Projects;
