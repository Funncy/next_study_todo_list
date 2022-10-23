import { atom } from "recoil";
import { todoModel } from "src/model/todo";

export const todoListState = atom<todoModel[]>({
  key: "todoListState",
  default: <todoModel[]>[],
});
