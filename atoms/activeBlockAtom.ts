import { atom } from "recoil";

export const activeBlockAtom = atom<string>({
  key: "activeBlockState",
  default: "",
});
