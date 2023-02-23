import { useRecoilState } from "recoil";
import { todoListFilterState, TodoListFilterType } from "../recoil/todo";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setFilter(value as TodoListFilterType);
  };

  return (
    <select onChange={updateFilter} value={filter}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show UnCompleted">Uncomplted</option>
    </select>
  );
}
