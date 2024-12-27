export default function TodoList() {
  let [todos, setTodos] = useState(["sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    console.log("we have to add new task in todo");
  };

  return (
    <div>
      <input type="text" placeholder="add a Task" />
      <button>Add</button>
      <h4>Todo List</h4>
    </div>
  );
}
