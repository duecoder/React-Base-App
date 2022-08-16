import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  lighterColor,
  iconColor,
} from '../config/colors';

export default createGlobalStyle`
  body {
    background-color: ${primaryDarkColor};
    /* color: ${primaryDarkColor}; */
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
    background: ${iconColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 50%;
  background-color: ${lighterColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
