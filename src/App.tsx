import { motion } from "framer-motion";
import "./app.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Intro />
    </div>
  );
}

export default App;
