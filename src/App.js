import { useState } from "react";

function App() {

  const [textColor, setTextColor] = useState("red");
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "red" ? "black" : "red");
        }}
      >
        Click me to change color
      </button>
      {<h1 style={{ color: textColor }}>hi My name is Shubham</h1>}
      <input onChange={(e)=>{
          setUser(e.target.value);
      }}></input>
      <h1>{user}</h1>
    </div>
  );
}

export default App;
