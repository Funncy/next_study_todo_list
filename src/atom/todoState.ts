import { atom } from "recoil";
import { todoModel } from "src/model/todo";

export const todoListState = atom<todoModel[]>({
  key: "todoListState",
  default: <todoModel[]>[],
});

export type filterType = "All" | "Active" | "Completed";

export const todoFilterState = atom<filterType>({
  key: "todoFilterState",
  default: "All",
});
