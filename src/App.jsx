// import "./App.css";
import { Experience } from "./Components/Experience";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
