import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { Checkbox } from "@mui/material";

export default function TodoItem() {
  return (
    <div className="flex items-center">
      <Checkbox defaultChecked color="success" />

      <span className="flex-1 px-2">할 일</span>
      <div className="px-2 cursor-pointer">
        <BsTrashFill />
      </div>
    </div>
  );
}
