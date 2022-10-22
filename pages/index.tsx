import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TodoItem from "../src/components/todo-item";
import { Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div className="text-3xl text-stone-200 font-bold underline">
      <Button variant="contained">Contained</Button>
      <TodoItem />
    </div>
  );
};

export default Home;
