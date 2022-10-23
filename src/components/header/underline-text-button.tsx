import React from "react";
import { filterType } from "../../atom/todoState";

interface IUnserlineTextButton {
  active: boolean;
  text: filterType;
  handleChange: (filter: filterType) => void;
}

function UnderlineTextButton({
  active,
  text,
  handleChange,
}: IUnserlineTextButton) {
  return (
    <span
      className={
        "bold text-orange-500 mx-1 underline-offset-4 decoration-black cursor-pointer " +
        (active ? "underline" : "")
      }
      onClick={(e) => handleChange(text)}
    >
      {text}
    </span>
  );
}

export default UnderlineTextButton;
