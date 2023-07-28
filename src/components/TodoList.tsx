import React from "react";
import "./styles.css";
import { Todo } from "../model";
import TodoCard from "./TodoCard";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="container">
      <div className="todos">
        <span>Active Task</span>
        {todos.map((t) => (
          <TodoCard todo={t} todos={todos} setTodos={setTodos} />
        ))}
      </div>

      <div className="todos remove">
        <span>Completed Task</span>
        {todos.map((t) => (
          <TodoCard todo={t} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
