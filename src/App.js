import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import UpdateTask from "./components/UpdateTask";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

function App() {
  //Tasks
  const [toDo, setToDo] = useState([
    { id: "1", title: "task1", status: false },
  ]);

  //Tepm State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //Mark task an done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  //Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  //Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.statue ? true : false,
    };
    setUpdateData(newEntry);
  };

  //Update task

  const updateTask = () => {
    let filterTask = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterTask, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App</h2>
      <br />
      <br />

      {updateData ? (
        <UpdateTask
          updateData={updateData}
          updateTask={updateTask}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      )}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
