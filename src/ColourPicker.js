function ColourPicker(props) {
  const colours = props.obj;

  const showColours = () => {
    document.getElementById("colour-row").style["opacity"] = "100";
  };

  const ListColours = () => {
    return colours.map((val, ind) => {
      return (
        <button
          className="colours"
          style={{
            backgroundColor: colours[ind],
            height: "50px",
            width: "50px",
          }}
          onClick={() => changeColour(colours[ind])}
        ></button>
      );
    });
  };

  const changeColour = (colour) => {
    document.getElementById("secondary").style["background-color"] = colour;
    document.getElementById("btn").style["background-color"] = colour;
    document.getElementById("colour-row").style["opacity"] = "0";
  };

  return (
    <div>
      <div id="colour-row">
        <ListColours />
      </div>
      <div id="btn">
        <button style={{ backgroundColor: "#0afcfc" }} onClick={showColours}>
          Pick a Colour
        </button>
      </div>
    </div>
  );
}

export default ColourPicker;
