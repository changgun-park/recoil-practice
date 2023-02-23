import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { wonState } from "../recoil/exchange";

export default function Won() {
  const [won, setWon] = useRecoilState(wonState);
  const [text, setText] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    setText(won.toString());
  }, [won]);

  return (
    <div>
      <span>원화를 입력하세요</span>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={() => setWon(Number(text))}>환전하기</button>
    </div>
  );
}
