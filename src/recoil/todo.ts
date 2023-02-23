import { atom } from "recoil";

export interface TodoItemInterface {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<TodoItemInterface[]>({
  key: "TodoList",
  default: [],
});
