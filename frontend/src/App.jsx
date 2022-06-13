import { React, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import NumberPresenter from "./components/NumberPresenter";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h4>Counter</h4>
      <p>Value: {value}</p>
      <Button onClick={() => setValue(value - 1)} variant="contained" size="small">
        -
      </Button>
      <Button onClick={() => setValue(value + 1)} variant="contained" size="small">
        +
      </Button>
      <NumberPresenter value={value} />
    </div>
  );
}

export default App;
