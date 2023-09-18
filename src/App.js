

function App() {
  // const b=<h1>Shubham</h1>;
  const users=[{name:"Shubham",age:21},{name:"Ayush",age:21},{name:"Ramkaran",age:24}];
  return (
    <div className="App">
      {
        users.map((user,key)=>{
           return <User name={user.name} age={user.age} />;
        })
      };
     </div>
  );
};
const User=(props)=>{
  return (
    <div>
       {props.name} {props.age}
    </div>
  );
};

export default App;
