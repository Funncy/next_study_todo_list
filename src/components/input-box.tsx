import React, { MouseEventHandler, useState } from "react";

interface IInputBoxProps {
  onSubmit: Function;
}
function InputBox({ onSubmit }: IInputBoxProps) {
  const [title, setTitle] = useState("");

  const handleOnSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <div className="flex border-solid border-1 rounded-lg h-12 items-center">
      <input
        type="text"
        name="title"
        className="flex-1 h-12 pl-4"
        placeholder="Add Todo"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <div
        onClick={handleOnSubmit}
        className="w-12 text-white bg-yellow-500 rounded-r-lg px-2 my-auto  h-12 flex items-center"
      >
        <span>Add</span>
      </div>
    </div>
  );
}

export default InputBox;
