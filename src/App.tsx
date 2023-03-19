import "./app.css";
import AboutData from "./components/AboutData";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Panel from "./components/Panel";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Panel />
      <AboutData />
    </div>
  );
}

export default App;
