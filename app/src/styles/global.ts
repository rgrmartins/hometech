import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #b2b7bb;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1 {
    color: #002a5c;
  }
  h3 {
    color: #2d5980;
  }
  a{
    text-decoration: none;
  }
  
  .mapid {
    height: 180px;
  }
`;
