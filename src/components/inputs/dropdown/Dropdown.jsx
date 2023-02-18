import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as S from "./styled";

//redux
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../../../features/countries/countriesSlice";

const Dropdown = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const dispatch = useDispatch();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleRegion = (region) => {
    setFilter(region);
  };

  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLowerCase()));
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <S.FilterMenu onClick={handleMenu}>
      {filter ? filter : "Filter by Region"}
      <KeyboardArrowDownIcon />
      {openMenu ? (
        <S.DropdownMenu>
          {regions.map((region, idx) => (
            <S.Button onClick={() => handleRegion(region)} key={idx}>
              {region}
            </S.Button>
          ))}
        </S.DropdownMenu>
      ) : null}
    </S.FilterMenu>
  );
};

export default Dropdown;
