import { useRecoilState } from "recoil";
import { textState } from "../recoil/inputText";

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      ECHO: {text}
    </div>
  );
}
