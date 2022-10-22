import React from "react";

interface IInputBoxProps {
  onSubmit: Function;
}
function InputBox({ onSubmit }: IInputBoxProps) {
  return (
    <div className="flex border-solid border-1 rounded-lg h-12 items-center">
      <input
        type="text"
        name="title"
        className="flex-1 h-12 pl-4"
        placeholder="Add Todo"
      />
      <div className="w-12 text-white bg-yellow-500 rounded-r-lg px-2 my-auto  h-12 flex items-center">
        <span>Add</span>
      </div>
    </div>
  );
}

export default InputBox;
