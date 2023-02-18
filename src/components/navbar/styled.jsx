import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  background-color: ${({ theme }) => theme.elements};
  padding: 0 64px;
  border-bottom: ${({ theme }) => theme.elements};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const ThemeButton = styled.button`
  font-size: 14px;
  background-color: inherit;
  color: ${({ theme }) => theme.text};
  border: 0;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
