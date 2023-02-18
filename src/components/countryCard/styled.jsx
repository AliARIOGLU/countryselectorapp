import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 250px;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CardHeader = styled.img`
  height: 120px;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CountryName = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 14px;
  font-weight: bold;
`;

export const CountryInfo = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  font-weight: 800;
`;

export const CountryInfoText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const Loading = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
