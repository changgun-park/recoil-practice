import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { exchangeState } from "../recoil/exchange";

export default function Dollar() {
  const [dollar, setDollar] = useRecoilState(exchangeState("dollar"));
  const [text, setText] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setText(dollar?.toString() ?? "");
  }, [dollar]);

  return (
    <div>
      <span>달러를 입력해주세요.</span>
      <input value={text} onChange={onChange} />
      <button
        onClick={() => {
          setDollar(Number(text));
        }}
      >
        환전하기
      </button>
    </div>
  );
}
