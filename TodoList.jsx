import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState([task: "sample Task", id: uuidv4()]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
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
