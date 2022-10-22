import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TodoItem from "../src/components/todo-item";
import { Button } from "@mui/material";
import Header from "src/components/header";
import TodoList from "../src/components/todo-list";
import InputBox from "../src/components/input-box";
import { useState } from "react";
import { todoModel } from "../src/model/todo";
import uuid from "react-uuid";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<todoModel[]>([]);

  const addTodo = (title: string) => {
    setTodos(
      todos.concat([
        {
          id: uuid(),
          title: title,
          isDone: false,
        },
      ])
    );
  };

  return (
    <div>
      <div>
        <Header active={1} />
        <TodoList todos={todos} />
        <InputBox
          onSubmit={(title: string) => {
            addTodo(title);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
