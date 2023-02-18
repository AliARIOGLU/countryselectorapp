import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import * as S from "./styled";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../features/countries/countriesSlice";

const Search = () => {
  const { searchTerm } = useSelector((state) => state.country);

  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <S.SearchArea>
      <SearchOutlinedIcon style={{ color: "gray" }} />
      <S.Input
        type="text"
        value={searchTerm}
        placeholder="Search for a country..."
        onChange={handleInputValueChange}
      ></S.Input>
    </S.SearchArea>
  );
};

export default Search;
