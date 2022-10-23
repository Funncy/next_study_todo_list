import React from "react";
import TodoItemView from "./todo-item-view";
import { todoModel } from "../../model/todo";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { todoListState } from "../../atom/todoState";
import { RecoilState, useRecoilState } from "recoil";
import uuid from "react-uuid";
import TodoListView from "./todo-list-view";

interface ITodoListProps {
  onToggle: Function;
  onDelete: Function;
}

function TodoList({ onToggle, onDelete }: ITodoListProps) {
  const [todoList, setTodoList] = useRecoilState<todoModel[]>(todoListState);

  const addTodo = (title: string) => {
    setTodoList(
      todoList.concat([
        {
          id: uuid(),
          title: title,
          isDone: false,
        },
      ])
    );
  };

  const toggleTodo = (id: string) => {
    const index = todoList.findIndex((e) => e.id === id);
    if (index === -1) return; //다이얼로그 추가 필요

    const copied = todoList.concat([]);
    copied[index].isDone = !copied[index].isDone;
    setTodoList(copied);
  };

  const deleteTodo = (id: string) => {
    const index = todoList.findIndex((e) => e.id === id);
    if (index === -1) return; //다이얼로그 추가 필요

    setTodoList(todoList.filter((e) => e.id !== id));
  };

  return (
    <TodoListView
      todoList={todoList}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
    />
  );
}

export default TodoList;
