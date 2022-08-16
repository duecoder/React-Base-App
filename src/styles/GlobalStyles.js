import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import * as colors from '../config/colors';

export default createGlobalStyle`
  body {
    background-color: ${colors.primaryDarkColor};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.iconColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: #fff;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
    color: #fff;
  }
`;

export const Container = styled.section`
  max-width: 50%;
  background-color: ${colors.lighterColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(226, 220, 200, 0.1);
`;
