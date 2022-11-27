import { Link } from "react-router-dom";
import styled from "styled-components"
import { v } from "../../../style/variaveis";

interface props{
  isOpen?: boolean;
  isActive?: boolean;
}

export const Content = styled.div<props>`
  background:  ${props => props.isActive ?  v.bg3 : 'transparent'};
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  display: ${props => props.isOpen ?  'flex' : {}};
  justify-content: center;
  
  :hover{
    box-shadow: inset 0 0 0 1px ${v.bg3};
    
  }

  .dropdown{
    width:100%;
    /* position: relative; */
    
    list-style: none;
    text-align: start;
    background: inset 0 0 0 1px ${v.bg3};
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-direction: column; 
       
    
  }
`;


export const ContentSub = styled.div`
  .links{
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;    
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 16px 50px;
    color: #727272;
    font-weight: 650;
    background: #bdbcbc;
    border: 2px solid transparent;
    :hover{
      background: ${v.laranja};
      border-radius: 5px;
    }
    
  }

  .links-drop{
    display: flex;
    justify-content: start;
    align-items: center;

    background: #b8b8b8;
    cursor: pointer;    
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 16px 50px;
    color: #727272;
    font-weight: 650;
   
  }
  
  .links-drop:hover{
    background: ${v.laranja};
    border-radius: 0px 0px 4px 4px;
  }
`;


export const SLink = styled(Link)<props>`
  display: flex;
  align-items: center;
  text-decoration: none;

  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
  width: ${props => props.isOpen ? 'fit-content' : {}};
  margin-bottom: 15px;  

`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing};
  display: flex;
  color: grey;
  
  svg{
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 10px;
    font-size: 30px;
  }

`;


export const SLinkLabel = styled.span<props>`
  display: block;
  width: 70%;
  margin-left: ${v.smSpacing};
  text-decoration: none;
  color: grey;
  display: ${props => props.isOpen ? 'none' : {}};
  font-size: 1.5rem;
  margin-top: 10px;

 
`;

export const SLinkNotification = styled.div<props>`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: yellow;
  color: black;
  font-weight: 900;
  margin-right: ${v.mdSpacing};
  border: 1px double grey;
  display: ${props => props.isOpen ? 'none' : {}};
 
  margin-left: -10px;
`;

export const SLinkIconNav = styled.div`
  padding: ${v.smSpacing};
  display: flex;
  color: grey;
  align-items: center;
 

`;

export const SLinkIconSubNav = styled.div`
  padding: ${v.smSpacing};
  display: flex;
  align-items: center;
  margin-left: 32px;

  svg{
    color: #727272 ;
    transform: scaleX(-1);
  }
`;