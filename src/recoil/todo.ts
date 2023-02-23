import { atom, selector } from "recoil";

export interface TodoItemInterface {
  id: number;
  text: string;
  isComplete: boolean;
}

export type TodoListFilterType =
  | "Show All"
  | "Show Completed"
  | "Show Uncompleted";

export const todoListState = atom<TodoItemInterface[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom<TodoListFilterType>({
  key: "TodoListFilter",
  default: "Show All",
});

// getter만 정의 했기 때문에 setState를 사용할 수 없다.
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

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = todoList.filter(
      (item) => !item.isComplete
    ).length;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
