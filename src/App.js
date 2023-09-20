import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [predictedAge, setPredictedAge] = useState(0);
  const[name,setName]=useState("");
  const fetchAge=()=>{
     axios.get(`https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent`).then((res)=>{
      console.log(res.data);
     })
  }
 

  return (
    <div>
       <input placeholder="Shubham.." onChange={(e)=>{
        setName(e.target.value);
       }}></input>
      <button onClick={fetchAge}> Predict Age</button>
      <p>`predicted{predictedAge}</p>
    </div>
  );
};

export default App;
