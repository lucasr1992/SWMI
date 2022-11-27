import styled, { css } from "styled-components";

interface propStyle{
  heigthFrom?:any, 
  widthFrom?: any, 
  backColor?:any, 
  textColor?:any,
  hoverColor?: any,
  hoverColorText?: any,
}


export const Content = styled.div<propStyle>`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background: #707070;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 4px ;
  color: #ffffff;
  font-weight: 500;
  transition: background-color 0.2s;
  ${propStyle => propStyle.backColor && css`
      background: ${propStyle.backColor};
  `}

  ${propStyle => propStyle.textColor && css`
      color: ${propStyle.textColor};
  `}

  ${propStyle => propStyle.heigthFrom && css`
      height: ${propStyle.heigthFrom};
  `}

  ${propStyle => propStyle.widthFrom && css`
      width: ${propStyle.widthFrom};
  `}

 

  &:hover{
      background: #7c7c7c;
      border: 2px solid #ff9000;
      
      ${propStyle => propStyle.hoverColorText && css`
        color: ${propStyle.hoverColorText};
      `}

      ${propStyle => propStyle.hoverColor && css`
        background: ${propStyle.hoverColor};
      `}
  }  
  
  
  
`;