import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
} from "react";

interface IInputboxViewProps {
  title: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: any) => void;
}

function InputBoxView({
  title,
  handleChange,
  handleSubmit,
}: IInputboxViewProps) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex border-solid border-1 rounded-lg h-12 items-center">
        <input
          type="text"
          name="title"
          className="flex-1 h-12 pl-4"
          placeholder="Add Todo"
          value={title}
          onChange={handleChange}
        />
        <div
          onClick={handleSubmit}
          className="w-12 text-white bg-yellow-500 rounded-r-lg px-2 my-auto  h-12 flex items-center"
        >
          <span>Add</span>
        </div>
      </div>
    </form>
  );
}

export default InputBoxView;
