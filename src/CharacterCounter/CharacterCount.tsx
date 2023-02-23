import { useRecoilValue } from "recoil";
import { charCountState } from "../recoil/inputText";

export default function CharactorCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
