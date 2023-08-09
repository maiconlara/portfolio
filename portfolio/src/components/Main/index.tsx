import TextAnimation from "./TypeAnimation";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://i.ibb.co/HhPtpfx/cropped-5120-2880-1065885.jpg"
        alt="Maicon Draw"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div>
          <h1>Zelda Fan</h1>
          <h2>
            Im sure OOT is awesome!
            <TextAnimation
              context={"We love"}
              keyWord={"Link"}
              keyWord2={"Zelda"}
              keyWord3={"Gannon"}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Main;
