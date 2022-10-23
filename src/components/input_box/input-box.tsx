import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import InputBoxView from "./input-box-view";

interface IInputBoxProps {
  onSubmit: Function;
}
function InputBox({ onSubmit }: IInputBoxProps) {
  const [title, setTitle] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  const props = {
    title,
    handleChange,
    handleSubmit,
  };

  return <InputBoxView {...props} />;
}

export default InputBox;
