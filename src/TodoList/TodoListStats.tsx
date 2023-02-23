import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todo";

export default function TodoListStats() {
  const { percentCompleted, totalCompletedNum, totalNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items uncompleted: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}
