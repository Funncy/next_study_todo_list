import React from "react";
import TodoItem from "./todo-item";
import { todoModel } from "../model/todo";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

interface ITodoListProps {
  todos: todoModel[];
  onToggle: Function;
  onDelete: Function;
}

function TodoList({ todos, onToggle, onDelete }: ITodoListProps) {
  if (todos.length < 1) {
    return (
      <div className="flex flex-col justify-center items-center py-10">
        <LibraryAddIcon />
        <span className="py-2">할 일을 추가헤주세요.</span>
      </div>
    );
  }
  return (
    <>
      {todos.map(({ id, title, isDone }) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          isDone={isDone}
          onToggle={(id: string) => {
            onToggle(id);
          }}
          onDelete={(id: string) => {
            onDelete(id);
          }}
        />
      ))}
    </>
  );
}

export default TodoList;
