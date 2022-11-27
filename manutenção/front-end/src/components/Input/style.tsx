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
  padding: 10px;
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


  input{
    flex: 1;
    background: transparent;
    border: 0;
    color: ${v.text};
    text-transform: uppercase;
    margin-right: 5px;
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


