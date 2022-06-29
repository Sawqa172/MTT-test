import { createGlobalStyle } from "styled-components/macro";

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    line-height: 1.4;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: ${(p) => p.theme.colors.grey};
  }
  
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .App {
    height: 100%;
  }`;
