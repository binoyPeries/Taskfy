import { Todo } from "../model";

export type Action =
  | { type: "add"; input: string }
  | { type: "delete"; input: number }
  | { type: "complete"; input: number };

export const TodoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.input, isComplete: false },
      ];
    case "delete":
      return state.filter((t) => t.id !== action.input);
    case "complete":
      return state.map((t) =>
        t.id === action.input ? { ...t, isComplete: !t.isComplete } : t
      );
    default:
      return state;
  }
};
