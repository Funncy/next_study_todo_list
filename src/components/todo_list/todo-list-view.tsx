import React from "react";
import { todoModel } from "src/model/todo";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import TodoItemView from "./todo-item-view";

interface ITodoListViewProps {
  todoList: todoModel[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
function TodoListView({ todoList, onToggle, onDelete }: ITodoListViewProps) {
  if (todoList.length < 1) {
    return (
      <div className="flex flex-col justify-center items-center py-10">
        <LibraryAddIcon />
        <span className="py-2">할 일을 추가헤주세요.</span>
      </div>
    );
  }

  return (
    <>
      {todoList.map(({ id, title, isDone }) => (
        <TodoItemView
          key={id}
          id={id}
          title={title}
          isDone={isDone}
          onToggle={(e: React.MouseEvent<HTMLButtonElement>) => {
            onToggle(id);
          }}
          onDelete={(e: React.MouseEvent<HTMLDivElement>) => {
            onDelete(id);
          }}
        />
      ))}
    </>
  );
}

export default TodoListView;
