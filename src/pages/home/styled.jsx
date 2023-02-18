import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 30px 64px;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
`;
