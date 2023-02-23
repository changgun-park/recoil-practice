import { atom, selector } from "recoil";

export interface TodoItemInterface {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<TodoItemInterface[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom<
  "Show All" | "Show Completed" | "Show Uncompleted"
>({
  key: "TodoListFilter",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
