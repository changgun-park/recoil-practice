import { atomFamily } from "recoil";
import { useRecoilState } from "recoil";

export const sampleState = atomFamily({
  key: "sampleState",
  default: "sample",
});

export const AComponent = () => {
  const [sample, setSample] = useRecoilState(sampleState("A"));

  return (
    <div>
      {sample}
      <button onClick={() => setSample(Math.random().toString())}>
        A에서 바꾸기
      </button>
    </div>
  );
};

export const BComponent = () => {
  const [sample, setSample] = useRecoilState(sampleState("B"));
  return (
    <div>
      {sample}
      <button onClick={() => setSample(Math.random().toString())}>
        B에서 바꾸기
      </button>
    </div>
  );
};
