import { useReducer, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TodoReducer } from "./components/TodoReducer";

function App() {
  const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [state, dispatch] = useReducer(TodoReducer, []);

  function addTodo(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    if (todo) {
      dispatch({ type: "add", input: todo });
      setTodo("");
    }
  }

  return (
    <div className="App">
      <div className="heading">Taskfy</div>
      <InputField todo={todo} setTodo={setTodo} addItem={addTodo} />
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
