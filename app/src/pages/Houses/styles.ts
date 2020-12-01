import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Error = styled.div`
  color: #cc0000;
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
`;

export const FormStyles = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  background: #7ac142;
  padding: 10px;

  h1 {
    color: #2d5980;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: #e7e9ea;
    border: 2px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    width: 500px;
    padding: 30px 50px;
  }

  input {
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    caret-color: #7ac142;
  }

  label {
    color: #002a5c;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  button {
    background-color: #2d5980;
    padding: 10px;
    border: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    margin: 20px 0px;
  }
`;
