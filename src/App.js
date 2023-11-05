import "./App.css";
import ColourPicker from "./ColourPicker";

function App() {
  const colours = ["#f268ef", "#af68f2", "#86f268", "#f2d468", "#68cbf2", "#fcc30a", "#fc4a0a", "#fc0a0a", "#fc0a83"];

  return (
    <div id="main">
      <h1>Colour Picker</h1>
      <div id="secondary">
        <ColourPicker obj={colours} />
      </div>
    </div>
  );
}

export default App;
