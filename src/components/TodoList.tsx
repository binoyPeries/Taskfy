import "./styles.css";
import { Todo } from "../model";
import TodoCard from "./TodoCard";
import { Action } from "./TodoReducer";
interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
}

export default function TodoList({ todos, dispatch }: Props) {
  return (
    <div>
      {todos.map((t) => (
        <TodoCard todo={t} todos={todos} dispatch={dispatch} />
      ))}
    </div>
  );
}
