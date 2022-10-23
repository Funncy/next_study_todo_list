import { atom, selector } from "recoil";
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

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const todoList = get(todoListState);

    switch (filter) {
      case "All":
        return todoList;
      case "Completed":
        return todoList.filter((e) => e.isDone);
      case "Active":
        return todoList.filter((e) => !e.isDone);
    }
  },
});
