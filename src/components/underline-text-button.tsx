import React from "react";

interface IUnserlineTextButton {
  active: boolean;
  text: string;
}

function UnderlineTextButton({ active, text }: IUnserlineTextButton) {
  return (
    <span
      className={
        "bold text-orange-500 mx-1 underline-offset-4 decoration-black " +
        (active ? "underline" : "")
      }
    >
      {text}
    </span>
  );
}

export default UnderlineTextButton;
