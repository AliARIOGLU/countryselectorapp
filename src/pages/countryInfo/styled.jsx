import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100vh;
  padding: 50px 64px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px; ;
`;
export const Header = styled.div``;

export const BackButton = styled.button`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  padding: 4px 8px;
  width: 100px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: inherit;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

export const Main = styled.div`
  display: flex;
  gap: 100px;
`;

export const Image = styled.img`
  height: 300px;
  width: 450px;
`;

export const CountryInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;

export const CountryName = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

export const CountryTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TextArea = styled.div`
  display: flex;
  gap: 160px;
`;

export const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CountryAttribute = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export const CountryValue = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
`;
export const TextRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BorderCountry = styled(Link)`
  border: 1px solid #ccc;
  font-size: 12px;
  color: hsl(0, 0%, 52%);
  padding: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 4px;
  text-decoration: none;
`;

export const CurrencyText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

export const Message = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
