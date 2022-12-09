import styled from "styled-components";
import { v } from "../../../style/variaveis";

interface props{
  visible: boolean;
}

interface propsList{
  isOpen?: boolean;
  isActive?: boolean;
}

export const Content= styled.div`
  height: 65px;
  width: 100%;
  background: ${v.bgD};
  .buger{
    display: none;
  }

  @media  screen and (max-width: 525px){
    width: 100vw;
    .buger{
      display: block;
      position: absolute;
      top: 20px;
      left: 20px;
      cursor: pointer;
      
    }
  }

`;


export const MobileMenu = styled.div<props>`

    /* width: 100vw; */
    width:${props => props.visible ? '100vw' : 'none'};
    min-height:${props => props.visible ? '100vh' : 'none'};
    /* height:100vh; */
    z-index: 1;
    position: absolute;
    margin-top: 13px;
    margin-left: -20px;
    background: ${v.bgD};
    
`;




export const Burger = styled.div<props>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  
  div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => props.visible ? '#CCC' : '#696969'};
    border-radius: 10px;
    transition: all 0.3s linear;

    &:nth-child(1){
      //transform: ${props => props.visible ? 'translateY(265%) rotate(45deg)' : 'translate(0) rotate(0)'};
      transform: ${props => props.visible ? 'translateY(265%) rotate(44deg)' : 'translateY(0) rotate(0)'};
    }

    &:nth-child(2){
      transform: ${props => props.visible ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${props => props.visible ? 0 : 1};
    }

    &:nth-child(3){
      //transform: ${props => props.visible ? 'translateY(-270%) rotate(-45deg)' : 'translate(0) rotate(0)'};
      transform: ${props => props.visible ? 'translateY(-270%) rotate(-45deg)' : 'translateY(0) rotate(0)'};
      
    }
  }
`;