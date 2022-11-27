import styled from "styled-components";

export const Content= styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
z-index: 10;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

export const BodyModal = styled.div`
cursor: auto;
 
  background-color: #fff;
  color: #000;
  width: 60%;
  height: 60%;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #707070;
  
  
  .btn-close{
    display: flex;
    justify-content: end;
    cursor: pointer;
    font-size: 25px;
    transform: scaleY(-1);
    color: #707070;
    :hover{
      color: #ff9000;
    }
  }

  .texto{
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    h1{
      font-size: 1.9rem;
      width: 50%;
      color: #5a5a5a;
    }
  }

  .botoes{
    display: flex;
    height: 50%;
    justify-content: space-between;
    align-items: center;
    .sim{

      width: 60%;
      margin: 2rem;
    }
    .nao{
      width: 60%;
      margin: 2rem;
    }

  }

`;