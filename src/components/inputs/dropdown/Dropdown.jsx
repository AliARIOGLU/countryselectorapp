import React, { useState, useEffect, useRef } from "react";
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

  const refHeader = useRef();
  const refMenu = useRef();

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

    function onClick(e) {
      if (e.target !== refHeader.current && e.target !== refMenu.current) {
        setOpenMenu(false);
      }
    }

    document.body.addEventListener("click", onClick);

    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <S.FilterMenu onClick={handleMenu} ref={refHeader}>
      {filter ? filter : "Filter by Region"}
      <KeyboardArrowDownIcon />
      {openMenu ? (
        <S.DropdownMenu ref={refMenu}>
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
