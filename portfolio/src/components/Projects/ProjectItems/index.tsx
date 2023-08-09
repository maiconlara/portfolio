
interface ProjectItemsProps {
  img: string;
  title: string;
  tools?: JSX.Element;
  tools2?: JSX.Element;
}

const ProjectItems = ({
  img,
  title,
  tools,
  tools2,
}: ProjectItemsProps) => {
  return (
    <div className="relative flex items-centem justify-center h-autow-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 " />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <span className="flex flex-wrap justify-center gap-4">
          <span className="pb-4 pt-2 text-white text-center intens">{tools}</span>
          <span className="pb-4 pt-2 text-white text-center intens">{tools2}</span>
        </span>
        <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-base ">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
