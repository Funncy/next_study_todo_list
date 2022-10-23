import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import UnderlineTextButton from "./underline-text-button";

interface IHeaderProps {
  active: "All" | "Active" | "Completed";
  //enum으로?
}

function Header({ active }: IHeaderProps) {
  return (
    <div className="flex justify-between ">
      <WbSunnyIcon />
      <div>
        <UnderlineTextButton active={active === "All"} text={active} />
        <UnderlineTextButton active={active === "Active"} text={active} />
        <UnderlineTextButton active={active === "Completed"} text={active} />
      </div>
    </div>
  );
}

export default Header;
