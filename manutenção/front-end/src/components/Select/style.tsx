import styled, { css } from "styled-components";
import { v } from "../../style/variaveis";
import BoxTip from "../Tips/Tips";

interface states{
  isFocused?: boolean,
  isError?: boolean,
  isFill?: boolean,
  Height?: any
  Width?: any
  Main?:boolean
}

export const Content = styled.div<states>`
  text-transform: uppercase;
  background: transparent;
  border: 2px solid #666360;
  padding: 4px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  border-radius: 10px;

  ${prop => prop.Height && css`
      height: ${prop.Height};
  `}

  ${prop => prop.Width && css`
      width: ${prop.Width};
  `}


  .input-main{
    display:none;
  }
  .input-label{
    cursor: pointer;
    flex: 1;
    background: transparent;
    border: 0;
    color: ${v.text};
    text-transform: uppercase;
    margin-right: 5px;
    width: 100%;
    height: 30px;
  }
  
  
  svg{
    margin-right: 5px;
    ${prop => prop.isFocused && css`
      color: #ff9000;
    `}

    ${ prop => prop.isFill && !prop.isError && css`
      color: #ff9000;
    `}    
  }

  ${ prop => prop.isFocused && !prop.isError && css`
    border-color: #ff9000;
  `}

  ${ prop => prop.isError && !prop.isFill && css`
    border-color: red;
    svg{
      color: red;
    }
  `}

  .drop{
    position: absolute;
    transform: translateY(95px);
    width: 30%;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: auto;
    max-height: 140px;
    background-color: #fff;
    z-index: 99;   
    
    .drop-iten{
      padding: 5px;
      cursor: pointer;
      display: flex;
      
      :hover{
        background-color: #9fc3f870;
      }
    }

    .search{
      padding: 5px;
      background-color: #eee;
      input{
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-transform: uppercase;
      }
    }

    .container{
      display: flex;
      flex-direction: column;
      height: 150px;
      background: transparent;
      width: 100%;
      
    }
   
  }

  @media screen and (max-width: 850px) {
    .drop{
     
      width: 50%;
    }
  }

  @media screen and (max-width: 340px) {
    .drop{
     
      width: 60%;
    }
  }


`;

export const Error = styled(BoxTip)`
    height: 17px;
    margin-left: 16px;
    svg{
        margin: 0;
    }

    span {
        background: #C53030;
        color: #FFF;

        &::before {
            border-color: #C53030 transparent;
        }
    }

`;


