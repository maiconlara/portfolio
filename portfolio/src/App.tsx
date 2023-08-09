import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import History from "./components/History";
import Projects from "./components/Projects";



function App() {
  return (
    <>
      <div>
        <Sidenav />
        <Main/>
        <History/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
