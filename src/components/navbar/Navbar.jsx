import React from "react";
import { Link } from "react-router-dom";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";
import * as S from "./styled";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
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
