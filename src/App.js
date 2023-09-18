

function App() {
  // const b=<h1>Shubham</h1>;
  return (
    <div className="App">
     <Display salary={3000} position="sde" company="amazon"  />
     </div>
  );
};
const Display=(props)=>{
  const age=18;
  const isGreen=true;
  return (<div>
      
    {age>18? <h1>eligible</h1>: <h1>not eligible</h1> }
    { <div style={{color:isGreen?"green":"red"}}> this is button</div> }
    {isGreen&& <button>this is button</button> }

  </div>);
}; 

export default App;
