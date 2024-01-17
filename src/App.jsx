import React, { useState } from "react";
import "./App.css";
import UseState from "./components/UseState";
import UseContext from "./components/UseContext";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <div>
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext />
        <UseState />
      </ToggleTheme.Provider>
    </div>
  );
}

export default App;
