import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import { link } from "fs";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isComplete: false }]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <div className="heading">Taskfy</div>
      <InputField todo={todo} setTodo={setTodo} addItem={addTodo} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
} 

export default App;
