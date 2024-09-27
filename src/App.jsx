import TaskInputs from "./components/TaskInputs";
import React, { useState } from "react";
import TaskItems from "./components/TaskItems";
import Stats from "./components/Stats";

function App(){
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList,newTask]);
  };

  function deletTask(deleTaskName){
    setToDoList (toDoList.filter (task=> 
    task.taskName !== deleTaskName))
  };

  function toggleCheck(taskName){
    setToDoList((prevToDoList) => prevToDoList.map
    (task => task.taskName === taskName ? {...task,
      checked: !task.checked}:task,),);
  }

  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>To Do List</h1>

        <TaskInputs addTask={addTask}/>
        <div className="toDoList">
          <span>To Do </span>
          <ul className="list-items">
            {toDoList.map((task,key) => (
              <TaskItems task={task} key={key}
              deleTask={deletTask} 
              toggleCheck={toggleCheck}/>
            ))}
          </ul>
          {toDoList.length ===0?
            (<p className="notify">You Are Done!</p>
            ) :null}
          

        </div>
      </div>
      <Stats toDoList={toDoList}  />
    </>
  );
}
export default App;
