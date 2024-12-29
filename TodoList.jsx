import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    console.log("we have to add new task in todo");
  };

  let updateTodoValue = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add</button>
      <h4>Todo List</h4>
    </div>
  );
}
