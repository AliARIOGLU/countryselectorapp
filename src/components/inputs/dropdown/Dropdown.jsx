import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as S from "./styled";

//redux
import { useDispatch, useSelector } from "react-redux";
import { reset, setRegion } from "../../../features/countries/countriesSlice";

const Dropdown = () => {
  const { region } = useSelector((state) => state.country);

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

    function onEscape(e) {
      if (e.key === "Escape") {
        setOpenMenu(false);
      }
    }

    document.body.addEventListener("click", onClick);

    document.body.addEventListener("keydown", onEscape);

    return () => {
      dispatch(reset());
      document.body.removeEventListener("click", onClick);
      document.body.removeEventListener("keydown", onEscape);
    };
  }, [dispatch, filter]);

  return (
    <S.FilterMenu onClick={handleMenu} ref={refHeader}>
      {region
        ? region.charAt(0).toUpperCase() + region.slice(1)
        : "Filter by Region"}
      {openMenu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
