import { createGlobalStyle } from 'styled-components';
import { v } from './variaveis';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }

 

  html{
    min-height: 100%;
  }
  
  *, button, input, select, option{
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
  
  ul{
    list-style: none;
    padding-left: 0;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

`