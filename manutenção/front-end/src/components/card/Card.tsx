import styled from "styled-components";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Crast from '../../assets/CrestHorder.png'
import { CardDetails } from './CardDetails'

import Lucas from '../../assets/lucas.svg'

export const Content = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 10px 10px 5px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
`;

export const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid green;
  
`;

export const CirculoWrraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
  
`;

export const Circulo = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #fb0101;
  border-radius: 50%;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding:1em 15px;
 
`;

export const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
 
`;

export const NikeText = styled.div`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 55px;
  font-weight: 700;
`;

export const ShoesCorte = styled.div`
  width:100%;
  height:100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
`;

export const Shoes = styled(motion.div)`
  width: auto;
  height: 200px;
  z-index: 99;
  user-select: none;
 
  margin-right: 1em;
  margin-top: 6em;
  -webkit-user-select: none;

  border: 2px solid purple;
  img{
    width: auto;
    height: 100%;
    user-select: none;
    -webkit-user-select: none;
  }

`;

export const BuyButton = styled(motion.button)`
  margin-top: 140px;
  height: 50px;
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

export const Protecao = styled(motion.div)`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

function Card(){
const x = useMotionValue(0);
const y = useMotionValue(0);
const rotateX = useTransform(y, [-100, 100], [30, -30]);
const rotateY = useTransform(x, [-100, 100], [-30, 30]);


  return(
    <CardWrapper>
      <Content 
        style={{x, y, rotateX, rotateY, z:100}}
        drag
        dragElastic={0.16} 
        dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
        whileTap={{cursor: 'grabbing'}}
       >
        <TopContainer>
          <CirculoWrraper>
            <Circulo/>
          </CirculoWrraper>
          <ShoesCorte>
              <Shoes 
              style={{x, y, rotateX, rotateY, z:10000}}
              drag
              dragElastic={0.12}
              dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
              whileTap={{cursor: 'grabbing'}}
              >
                <img src={Lucas}/>
                <Protecao 
                  style={{x, y, rotateX, rotateY, z:10000}}
                  drag
                  dragElastic={0.12}
                  dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                  whileTap={{cursor: 'grabbing'}}
                />
              </Shoes>
          </ShoesCorte>
          <NikeText>HORDA</NikeText>
      </TopContainer>
      <BottomContainer>
        <CardDetails />
      </BottomContainer>
      </Content>
    </CardWrapper>
  )

}

export default Card;