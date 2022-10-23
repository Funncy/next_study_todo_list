import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import UnderlineTextButton from "./underline-text-button";
import { filterType, todoFilterState } from "../../atom/todoState";
import { useRecoilState } from "recoil";
import HeaderView from "./header-view";

interface IHeaderProps {
  active: filterType;
}

function Header({ active }: IHeaderProps) {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  const handleChange = (filter: filterType) => {
    setFilter(filter);
  };

  return <HeaderView filter={filter} handleChange={handleChange} />;
}

export default Header;
