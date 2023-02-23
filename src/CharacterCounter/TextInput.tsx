import { useRecoilState } from "recoil";
import textState from "../recoil/textState";

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);
}
