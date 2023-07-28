import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoCard({ todo, todos, setTodos }: Props) {
  const [editable, setEditable] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    console.log("running");
  }, [editable]);

  function completeTodo(id: number) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t))
    );
  }
  function deleteTodo(id: number) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function editTodo(e: React.FormEvent, id: number) {
    e.preventDefault();
    setTodos(todos.map((t) => (t.id === id ? { ...t, todo: editText } : t)));
    setEditable(false);
  }

  return (
    <form className="todos__single" onSubmit={(e) => editTodo(e, todo.id)}>
      {editable ? (
        <input
          value={editText}
          ref={inputRef}
          onChange={(e) => setEditText(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isComplete ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!editable && !todo.isComplete) {
              setEditable(!editable);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => deleteTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => completeTodo(todo.id)}>
           <MdDone />
        </span>
      </div>
    </form>
  );
}
