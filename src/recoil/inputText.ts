import { atom, selector } from "recoil";

export const textState = atom<string>({
  key: "textState",
  default: "",
});

// 파생된 상태(derived state)를 selector를 통해서 나타낼 수 있다.
export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
