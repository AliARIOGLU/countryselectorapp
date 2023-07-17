import React from "react";
import { Link } from "react-router-dom";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";
import * as S from "./styled";
import { useDispatch } from "react-redux";
import {
  reset,
  setRegion,
  setSearchTerm,
} from "../../features/countries/countriesSlice";

const Navbar = ({ darkMode, setDarkMode }) => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Wrapper>
        <Link
          onClick={() => {
            dispatch(reset());
            dispatch(setRegion(""));
            dispatch(setSearchTerm(""));
          }}
          to="/"
          style={{ textDecoration: "none" }}
        >
          <S.Logo>Where in the world?</S.Logo>
        </Link>
        <S.ThemeButton onClick={() => setDarkMode(!darkMode)}>
          <Brightness6OutlinedIcon />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </S.ThemeButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
