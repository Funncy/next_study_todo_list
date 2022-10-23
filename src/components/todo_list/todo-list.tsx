import React from "react";
import TodoItemView from "./todo-item-view";
import { todoModel } from "../../model/todo";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { todoListState } from "../../atom/todoState";
import { RecoilState, useRecoilState } from "recoil";
import uuid from "react-uuid";
import TodoListView from "./todo-list-view";
import useTodoList from "./use-todo-list";
import InputBox from "../input_box/input-box";

interface Action {
  type: string;
  payload: todoModel[];
}

function TodoList() {
  const { todoList, addTodo, toggleTodo, deleteTodo } = useTodoList();

  return (
    <>
      <TodoListView
        todoList={todoList}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <InputBox
        onSubmit={(title: string) => {
          addTodo(title);
        }}
      />
    </>
  );
}

export default TodoList;
