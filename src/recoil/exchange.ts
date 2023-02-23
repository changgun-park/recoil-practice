import { atom, selector, selectorFamily } from "recoil";

export const wonState = atom({
  key: "wonState",
  default: 0,
});

export const dollarState = selector({
  key: "dollarState",
  get: ({ get }) => get(wonState) / 1400,
  // @ts-ignore: Unreachable code error
  set: ({ set }, dollar) => set(wonState, dollar * 1400),
});

// 달러뿐만 아니라, 다른 화폐의 환율도 추가하고 싶다면?
// 새로운 atom을 여러개 생성하지 않고, selectorFamily를 이용하면 된다.
export const exchangeState = selectorFamily({
  key: "exchangeState",
  get:
    (currency: string) =>
    ({ get }) => {
      const won = get(wonState);
      switch (currency) {
        case "dollar":
          return won / 1400;
        case "yen":
          return won / 10;
      }
    },
  set:
    (currency) =>
    ({ set }, newValue) => {
      switch (currency) {
        case "dollar": {
          // @ts-ignore: Unreachable code error
          set(wonState, newValue * 1400);
          break;
        }
        case "yen": {
          // @ts-ignore: Unreachable code error
          set(wonState, newValue * 10);
        }
      }
    },
});
