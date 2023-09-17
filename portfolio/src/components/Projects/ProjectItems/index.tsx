interface ProjectItemsProps {
  img: string;
  title: string;
  tools?: string;
  tools2?: string;
  tools3?: string;
  tools4?: string;
  link: string;
}

const ProjectItems = ({
  img,
  title,
  tools,
  tools2,
  tools3,
  tools4,
  link,
}: ProjectItemsProps) => {
  return (
    <div className="relative flex items-centem justify-center h-autow-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 " />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <span className="flex justify-center ">
          <img alt="" src={tools} className="pb-4 pt-2 h-12 w-12"></img>
          {tools2 && <img src={tools2} className="pb-4 pt-2  h-12 w-12 "></img>}
          {tools3 && <img src={tools3} className="pb-4 pt-2  h-12 w-12 "></img>}
          {tools4 && <img src={tools4} className="pb-4 pt-2  h-12 w-12 "></img>}
        </span>
        <div className="items-center justify-center flex">
          <a href={link} target="_blank" rel="noreferrer">
            <p className="text-center p-3 rounded-lg max-w-[160px] w-full bg-white  text-gray-700 font-bold cursor-pointer text-base ">
              Ver Mais
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
