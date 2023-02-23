import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { exchangeState } from "../recoil/exchange";

export default function Yen() {
  const [yen, setYen] = useRecoilState(exchangeState("yen"));
  const [text, setText] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setText(yen?.toString() ?? "");
  }, [yen]);

  return (
    <div>
      <span>엔화를 입력해주세요.</span>
      <input value={text} onChange={onChange} />
      <button
        onClick={() => {
          setYen(Number(text));
        }}
      >
        환전하기
      </button>
    </div>
  );
}
