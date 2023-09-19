import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [task,setTask]=useState("");
  return (
    <div style={{textAlign:"center"}} >
       <div className="addtask">
         <input value={task} onChange={(e)=>{
            setTask(e.target.value);
         }}></input>
         <button onClick={()=>{
            setList([...list,task]);
            setTask("");
         }}>Add Task</button>
       </div>
       {
        list.map((item,key)=>{
            return <div style={{margin: "10px" }} key={key}> {item}</div>
        })
       }
    </div>
  );
}

export default App;
