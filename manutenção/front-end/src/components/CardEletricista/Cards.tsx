import styled from "styled-components";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import AvatarCard from '../../assets/lucas.svg'
import ComumEletrico from '../../assets/ComumEletrico.svg'
import IncomunEletrico from '../../assets/IncomunEletrico.svg'
import RaroEletrico from '../../assets/RaroEletrico.svg'
import LendarioEletrico from '../../assets/LendarioEletrico.svg'
import EpicoEletrico from '../../assets/EpicoEletrico.svg'

export const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`;

export const Content = styled(motion.div)`
  width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  cursor: grab;

`;


export const AvatarWrapper = styled.div`
  width:260px;
  height:181px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

export const Avatar = styled(motion.div)`
  width: auto;
  height: 140px;
  z-index: 99;
  user-select: none;
  margin-left: 2.5em;
  -webkit-user-select: none;
  img{
    width: auto;
    height: 100%;
    user-select: none;
    -webkit-user-select: none;
  }

`;

export const Upper = styled(motion.div)`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
 
`;




export function CardComumEletricista(){
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
        <img src={EpicoEletrico} /> 
        <AvatarWrapper>
          <Avatar
            whileTap={{cursor: 'grabbing'}}
          >
            <img src={AvatarCard}/>
            <Upper/>
          </Avatar>
          
        </AvatarWrapper>
        <Upper/>
      </Content>
      
    </CardWrapper>
  )
}