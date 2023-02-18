import styled from "styled-components";

export const FilterMenu = styled.div`
  width: 15%;
  border: none;
  outline: 0;
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  left: 0;
  bottom: -140px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};
  padding: 4px 0px;
`;

export const Button = styled.button`
  font-size: 14px;
  border: 0;
  outline: 0;
  background-color: inherit;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
