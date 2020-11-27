import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    a {
      position: relative;
      font-size: 20px;
      text-align: center;
      color: #002a5c;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      margin-left: 50px;
      transition: 0.2s ease color;
      :hover {
        color: #7ac142;
      }
    }
  }
`;
