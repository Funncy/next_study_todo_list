import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import UnderlineTextButton from "./underline-text-button";

interface IHeaderProps {
  active: number;
  //enum으로?
}

function Header({ active }: IHeaderProps) {
  return (
    <div className="flex justify-between ">
      <WbSunnyIcon />
      <div>
        <UnderlineTextButton active={active !== 2 && active !== 3} text="All" />
        <UnderlineTextButton active={active === 2} text="Active" />
        <UnderlineTextButton active={active === 3} text="Completed" />
      </div>
    </div>
  );
}

export default Header;
