import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/todo";
import TodoItem from "./TodoItem";
import TodoItemCreater from "./TodoItemCreator";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreater />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
