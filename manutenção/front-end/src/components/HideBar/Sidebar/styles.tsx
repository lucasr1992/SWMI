import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../../style/variaveis";


interface props{
  isOpen?: boolean;
  isActive?: boolean;
}




export const GroupBar = styled.div`
  display: flex;
  flex-direction: column;
  @media  screen and (max-width: 525px){
    display: none;
  }
  
`;


export const SSidebar = styled.div<props>`
  width: ${props => props.isOpen ? 'auto' : v.sidebarWidth};
  min-height: 100vh;
  background: ${v.bgD};
  padding: ${v.lgSpacing};
  position: relative;
`;




export const SSidebarButton = styled.button<props>`
  ${btnReset}
  box-shadow: 0 0 4px ${v.bg3D}, 0 0 7px ${v.bgD};
  position: absolute;
  top: ${v.xxlSpacing};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #DDD;
  right: ${props => props.isOpen ? '-15px' : '-15px'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'initial'};
  
  .openButton{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
    
 
`;

export const SLogo = styled.div<props>`
  width: 100%;

  .imgLogo{
    display: flex;
    //max-width: 100%;
    font-size:4rem;
    //height: auto;
    //border: 2px solid black;
    color: #DDDD;
    align-items: center;
    //border: 2px solid red;
    .titulo-logo{
      font-size: 2rem;
      margin-left: 8px;
      display: ${props => props.isOpen ? 'none' : {}};
    }
  }
  
  cursor: pointer;
  margin-bottom: ${v.lgSpacing};
  
`;





export const SSearch = styled.div<props>`
  background: ${v.bgAlphaD};
  border: 1px solid ${v.bg3D};
  border-radius: ${v.borderRadius};
  width: ${props => props.isOpen ? 'fit-content' : ''};
  
  input{
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: ${props => props.isOpen ? '0' : '100%'};
    padding: ${props => props.isOpen ? '0' : {}};
    
    outline: none;
    border: none;
    color: indianred;
    background: transparent;
  }
  display: flex;
  
`;

export const SSearchIcon = styled.button`
  ${btnReset}
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;
  svg{
    font-size: 20px;
  }
  color: white;
  
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${v.bg3D};
  margin: ${v.lgSpacing} 0;
  
`;

export const SLista = styled.ul<props>`
  background:  ${props => props.isActive ?  v.bg3 : 'transparent'};
  border-radius: ${v.borderRadius};
 
`;


