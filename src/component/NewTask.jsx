const TaskItem=(props)=>{
    return ( <>
      <div style={{ margin: "10px", backgroundColor: props.completed?"green":"white" }} >  
        {props.taskName}
        <button style={{ backgroundColor: props.completed?"green":"white" }} onClick={()=> props.completTask(props.id) }>complete</button>
      </div>
      
      <button onClick={ ()=> props.deleteTask(props.id)}>X</button>
      </>);
}
export  default TaskItem;