import styled from "styled-components";
import { v } from '../style/variaveis';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 70%;
  justify-content: center;
  .formulario{
    border-radius: 10px;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.25);
    margin-top: 100px;
    background: ${v.bg};
    width: 55%;
    padding: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .senha{
    label{
      margin-bottom: 5px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .registro{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    label{
      margin-bottom: 5px;
    }
  }

  .botao{
    width: 55%;
  }
 
`;