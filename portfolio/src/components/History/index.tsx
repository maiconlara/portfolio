import HistoryFields from "./HistoryFields";

const data = [
  {
    year: 2017,
    title: "Auxiliar Administrativo",
    duration: "2 Anos",
    description:
      "Organização de material administrativo, elaboração de dcumentos de cirulação, digitação e cadastro de amostras.",
  },
  {
    year: 2021,
    title: "Téc. Segurança do Trabalho",
    duration: "6 Meses",
    description:
      "Estruturação de documentos de segurança do trabalho, elaboração de slides para treinamento, verificação de fichas de segurança de produtos químicos.",
  },
  {
    year: 2023,
    title: "Desenvolvedor Front-end Junior",
    duration: "Atual",
    description: "Desenvolvimento de sites utilizando React e TypeScript.",
  },
];
const History = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-14">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-14">Experiências</h1>
      {data.map((item, id) => (
        <HistoryFields
          key={id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default History;
