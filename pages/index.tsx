import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TodoItemView from "../src/components/todo_list/todo-item-view";
import { Button } from "@mui/material";
import Header from "src/components/header/header";
import TodoList from "../src/components/todo_list/todo-list";
import InputBox from "../src/components/input_box/input-box";
import { useState } from "react";
import { todoModel } from "../src/model/todo";
import uuid from "react-uuid";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Header active={"All"} />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
