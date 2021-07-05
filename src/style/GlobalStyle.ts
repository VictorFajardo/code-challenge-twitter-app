import { createGlobalStyle } from 'styled-components'
import desktop from '../desktop.png'
import mobile from '../mobile.png'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Lato', sans-serif;
    letter-spacing: -0.3px;
    background-color: #f8f9f9;
    color: rgb(83, 100, 113);
    line-height: 20px;
    /* background-image: url(${mobile}); */
    background-position: 50% 0%;
    background-repeat: no-repeat;
    @media all and (min-width: 860px) {
      /* background-image: url(${desktop}); */
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    color: #377ab5;
  }
  
  #root {
    /* width: 100vw; */
    margin: 0 auto;
    box-sizing: border-box;
    @media all and (min-width: 860px) {
      padding: 10px;
      width: 860px;
    }
  }
  
  main {
    @media all and (min-width: 860px) {
      display: flex;
      flex-flow: column wrap;
      align-content: space-between;
    }
    > * {
      margin: 10px 0; 
      height: auto !important;
      @media all and (min-width: 860px) {
        margin: 10px; 
        &:nth-child(2n+1) { order: 1; width: 550px; }
        &:nth-child(2n+2) { order: 2; width: 250px; }
      }
    }
  }
`
export default GlobalStyle