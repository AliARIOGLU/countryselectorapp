import React from "react";
import * as S from "./styled";

//Components
import CountryCard from "../../components/countryCard/CountryCard";
import Dropdown from "../../components/inputs/dropdown/Dropdown";
import Search from "../../components/inputs/search/Search";

const Home = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentHeader>
          <Search />
          <Dropdown />
        </S.ContentHeader>
        <S.ContentBody>
          <CountryCard />
        </S.ContentBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
