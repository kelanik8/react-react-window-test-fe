import { atom } from "recoil";
import { ITextBlock } from "../data/document";

export const blocksListsAtom = atom<ITextBlock[]>({
  key: "blocksListState",
  default: [],
});
