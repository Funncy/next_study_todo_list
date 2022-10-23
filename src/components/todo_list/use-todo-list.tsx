import React from "react";
import { useRecoilState } from "recoil";
import { todoModel } from "../../model/todo";
import { todoListState } from "../../atom/todoState";
import uuid from "react-uuid";

function useTodoList() {
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

    const copied = todoList.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          isDone: !e.isDone,
        };
      }
      return e;
    });
    setTodoList(copied);
  };

  const deleteTodo = (id: string) => {
    const index = todoList.findIndex((e) => e.id === id);
    if (index === -1) return; //다이얼로그 추가 필요

    setTodoList(todoList.filter((e) => e.id !== id));
  };

  return { todoList, addTodo, toggleTodo, deleteTodo };
}

export default useTodoList;
