import logo from "./logo.svg";
import "./App.css";
import Home from "../src/pages/Home";
import Title from "./pages/Title";

function App() {
  return (
    <div className="App">
      <div className="">
        <Title />

        <Home />
      </div>
    </div>
  );
}

export default App;
