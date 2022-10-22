import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { Checkbox } from "@mui/material";

interface ITodoItemProps {
  title: string;
  isDone: boolean;
  handleToggle: Function;
  handleDelete: Function;
}

export default function TodoItem({
  title,
  isDone,
  handleToggle,
  handleDelete,
}: ITodoItemProps) {
  return (
    <div className="flex items-center">
      <Checkbox
        checked={isDone}
        onClick={(e) => handleToggle(e)}
        color="success"
      />
      <span className="flex-1 px-2 ">{title}</span>
      <div onClick={(e) => handleDelete(e)} className="px-2 cursor-pointer">
        <BsTrashFill />
      </div>
    </div>
  );
}
