import { useState } from "react";
import TaskItem from "./component/NewTask";
function App() {
  const [list, setList] = useState([]);
  const [newTask, setTask] = useState("");
  const deleteTask = (taskId) => {
    setList(list.filter((task) => task.id !== taskId));
  };
  const completTask = (id) => {
    setList(
      list.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else return task;
      })
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="addtask">
        <input
          value={newTask}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const taskobj = {
              id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
              taskName: newTask,
              completed: false,
            };
            setList([...list, taskobj]);
            setTask("");
          }}
        >
          Add Task
        </button>
      </div>
      {list.map((item) => {
        return (
          <TaskItem
            taskName={item.taskName}
            id={item.id}
            completed={item.completed}
            deleteTask={deleteTask}
            completTask={completTask}            

          />
        );
      })}
    </div>
  );
}

export default App;
