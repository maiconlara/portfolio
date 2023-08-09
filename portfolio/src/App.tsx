import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import History from "./components/History";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  return (
    <>
      <div>
        <Sidenav />
        <Main/>
        <History/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
