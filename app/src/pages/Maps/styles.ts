import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  .map {
    height: 650px;
    align-items: center;
    width: 1200px;
    margin-top: 15px;
  }
`;

export const EmptySearch = styled.div`
  h1 {
    color: #ff1919;
  }
  margin-top: 20px;
  margin-bottom: 20px;
`;
