import styled from "styled-components"

import Logo from '../../assets/nike.svg'

export const ContentDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;


export const MediumText = styled.span`
  font-size: 15px;
  color: #fff;
  font-weight:800;
  text-transform: uppercase;
`;

export const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight:700;
  text-transform: uppercase;
`;

export const SpaceHorizontal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;


export const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #fb0101;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  :hover{
    background-color: transparent;
    color: #fff;
    border: 3px solid #fb0101;
  }
`;

export const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  img{
    width: auto;
    height: 28px;
  }
`;

export function CardDetails(){
  return(
    <ContentDetails>
      <SmallText>WORLD OF WARCRAFT</SmallText>
      <SpaceHorizontal>
        <MediumText>FOR HORDA</MediumText>
        
      </SpaceHorizontal>
      <SpaceHorizontal>
       
        <BuyButton>DATAILS</BuyButton> 
      </SpaceHorizontal>
     
    </ContentDetails>
  )
}