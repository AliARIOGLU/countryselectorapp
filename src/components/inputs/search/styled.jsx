import styled from "styled-components";

export const SearchArea = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 8px;
  gap: 20px;
  background-color: ${({ theme }) => theme.elements};
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.text};

  ::placeholder {
    color: ${({ theme }) => theme.text};
    font-size: 12px;
  }
`;
