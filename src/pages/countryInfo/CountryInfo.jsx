import React, { useEffect } from "react";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./styled";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { searchByCode } from "../../features/countries/countriesAction";
import { reset } from "../../features/countries/countriesSlice";

const CountryInfo = () => {
  const { loading, error, searchedCountry } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { code } = useParams();
  const country = searchedCountry[0];

  const numberFormatter = Intl.NumberFormat("en-US");

  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }

    if (error) {
      console.log(error);
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, code, error]);

  return (
    <>
      {loading ? (
        <S.Loading>Loading...</S.Loading>
      ) : (
        <S.Container>
          <S.Wrapper>
            <S.Header>
              <S.BackButton onClick={() => navigate("/")}>
                <KeyboardBackspaceOutlinedIcon />
                Back
              </S.BackButton>
            </S.Header>
            <S.Main>
              {searchedCountry.length > 0 ? (
                <>
                  <S.Image
                    src={country?.flags?.png}
                    alt={country?.flags?.alt}
                  />
                  <S.CountryInfoArea>
                    <S.CountryName>{country?.name?.common}</S.CountryName>
                    <S.CountryTexts>
                      <S.TextArea>
                        <S.TextLeft>
                          <S.CountryAttribute>
                            Native Name:
                            <S.CountryValue>
                              {`${(country?.name?.official).substring(
                                0,
                                20
                              )}...`}
                            </S.CountryValue>
                          </S.CountryAttribute>
                          <S.CountryAttribute>
                            Population:
                            <S.CountryValue>
                              {numberFormatter.format(country?.population)}
                            </S.CountryValue>
                          </S.CountryAttribute>
                          <S.CountryAttribute>
                            Region:
                            <S.CountryValue>{country?.region}</S.CountryValue>
                          </S.CountryAttribute>
                          <S.CountryAttribute>
                            Sub Region:
                            <S.CountryValue>
                              {country?.subregion}
                            </S.CountryValue>
                          </S.CountryAttribute>
                          <S.CountryAttribute>
                            Capital:
                            <S.CountryValue>
                              {country?.capital
                                ? country.capital
                                : "There is none"}
                            </S.CountryValue>
                          </S.CountryAttribute>
                        </S.TextLeft>
                        <S.TextRight>
                          <S.CountryAttribute>
                            Top Level Domain:
                            <S.CountryValue>{country?.tld[0]}</S.CountryValue>
                          </S.CountryAttribute>
                          <S.CountryAttribute>
                            Currencies:
                            <S.CountryValue>
                              <S.CurrencyText>
                                {Object.values(country.currencies)
                                  .map((currency) => {
                                    return currency.name;
                                  })
                                  .join(",")}
                              </S.CurrencyText>
                            </S.CountryValue>
                          </S.CountryAttribute>
                          <S.CountryAttribute>
                            Languages:
                            <S.CountryValue>
                              {[...Object.values(country.languages)].join(",")}
                            </S.CountryValue>
                          </S.CountryAttribute>
                        </S.TextRight>
                      </S.TextArea>
                      <S.CountryAttribute>
                        Border Countries:
                        {country.borders
                          ? country?.borders?.map((ct, idx) => (
                              <S.BorderCountry key={idx} to={`/country/${ct}`}>
                                {ct}
                              </S.BorderCountry>
                            ))
                          : " No borders"}
                      </S.CountryAttribute>
                    </S.CountryTexts>
                  </S.CountryInfoArea>
                </>
              ) : (
                <S.Message>No details found for this country!</S.Message>
              )}
            </S.Main>
          </S.Wrapper>
        </S.Container>
      )}
    </>
  );
};

export default CountryInfo;
