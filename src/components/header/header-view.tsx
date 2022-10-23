import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import UnderlineTextButton from "./underline-text-button";
import { filterType } from "src/atom/todoState";

interface IHeaderView {
  filter: filterType;
  handleChange: (filter: filterType) => void;
}

function HeaderView({ filter, handleChange }: IHeaderView) {
  return (
    <div className="flex justify-between ">
      <WbSunnyIcon />
      <div>
        <UnderlineTextButton
          handleChange={handleChange}
          active={filter === "All"}
          text="All"
        />
        <UnderlineTextButton
          handleChange={handleChange}
          active={filter === "Active"}
          text="Active"
        />
        <UnderlineTextButton
          handleChange={handleChange}
          active={filter === "Completed"}
          text="Completed"
        />
      </div>
    </div>
  );
}

export default HeaderView;
