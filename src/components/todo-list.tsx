import React from "react";
import TodoItem from "./todo-item";
import { todoModel } from "../model/todo";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

interface ITodoListProps {
  todos: todoModel[];
}

function TodoList({ todos }: ITodoListProps) {
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
          title={title}
          isDone={isDone}
          handleToggle={() => {}}
          handleDelete={() => {}}
        />
      ))}
    </>
  );
}

export default TodoList;
