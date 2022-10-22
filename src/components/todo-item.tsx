import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { Checkbox } from "@mui/material";

interface ITodoItemProps {
  id: string;
  title: string;
  isDone: boolean;
  onToggle: Function;
  onDelete: Function;
}

export default function TodoItem({
  id,
  title,
  isDone,
  onToggle,
  onDelete,
}: ITodoItemProps) {
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onToggle(id);
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <div className="flex items-center">
      <Checkbox checked={isDone} onClick={handleToggle} color="success" />
      <span className="flex-1 px-2 ">{title}</span>
      <div onClick={handleDelete} className="px-2 cursor-pointer">
        <BsTrashFill />
      </div>
    </div>
  );
}
