import styled, { createGlobalStyle } from "styled-components";
import logoSVG from "~/assets/logo.svg";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: #f5f5f5;
  }

  body,
  input,
  button {
    font-family: Arial, Helvetica, sans-serif;
  }

`;

export const Logo = styled.img.attrs({
  src: logoSVG
})``;