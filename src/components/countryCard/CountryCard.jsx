import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  searchByRegion,
  showAllCountries,
} from "../../features/countries/countriesAction";

const CountryCard = () => {
  const { countriesData, loading, success, error, region, searchTerm } =
    useSelector((state) => state.country);
  const dispatch = useDispatch();

  const numberFormatter = Intl.NumberFormat("en-US");

  useEffect(() => {
    if (!region) {
      dispatch(showAllCountries());
    }

    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

  const data = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      {loading ? (
        <S.Loading>{"Loading..."}</S.Loading>
      ) : (
        data.length > 0 &&
        data.map((country, idx) => (
          <Link
            to={`/country/${country.cca3}`}
            style={{ textDecoration: "none" }}
            key={idx}
          >
            <S.Container>
              <S.CardHeader src={country.flags.png}></S.CardHeader>
              <S.CardInfo>
                <S.CountryName>{country?.name?.common}</S.CountryName>
                <S.CountryInfo>
                  Population:
                  <S.CountryInfoText>
                    {numberFormatter.format(country?.population)}
                  </S.CountryInfoText>
                </S.CountryInfo>
                <S.CountryInfo>
                  Region:
                  <S.CountryInfoText>{country?.region}</S.CountryInfoText>
                </S.CountryInfo>
                <S.CountryInfo>
                  Capital:
                  <S.CountryInfoText>
                    {country?.capital ? country.capital : "There is none"}
                  </S.CountryInfoText>
                </S.CountryInfo>
              </S.CardInfo>
            </S.Container>
          </Link>
        ))
      )}
    </>
  );
};

export default CountryCard;
