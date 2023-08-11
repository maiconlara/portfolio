const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-14">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contato
      </h1>
      <form
        action="https://getform.io/f/39fc8d0b-5770-47e1-a863-1ab7962dc8c2"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Nome</label>
            <input
              className="border-2 rounded-lg p-1 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Telefone</label>
            <input
              className="border-2 rounded-lg p-1 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-1 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Titulo</label>
          <input
            className="border-2 rounded-lg p-1 flex border-gray-300"
            type="text"
            name="titulo"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Mensagem</label>
          <textarea
            className="border-2 rounded-lg p-1 flex border-gray-300"
            rows={10}
            name="mensagem"
          >
          </textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 max-w-[10vw] w-full p-2 rounded-lg hover:bg-[#143485]">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Contact;
