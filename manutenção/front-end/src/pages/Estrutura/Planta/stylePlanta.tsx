import styled from "styled-components";
import { v } from "../../../style/variaveis";


export const Content = styled.div`
  margin-left: 15px ;
  width: calc(100vw - 15%) ; 
  padding: 30px 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow: grey 0px 0px 4px 4px;
  padding: 30px 40px;
  
  
  .titulo{
    display: flex;
    align-items: center;
    justify-content: space-between; 
    .btn-lista{
      width: 45%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .botao{
        
        width: 25%;
      }
    }  
    svg{
      cursor: pointer;
      font-size: 38px;
      color: #707070;
      margin-right: 5px;
      :hover{
        color: ${v.laranja}
      }
    }
  }

  table{
    width:100%;
    border-collapse: collapse;
    padding: 8px;
  }
  

  .title-list{
    cursor: auto;
    padding: 12px 10px;
    text-align: left;
    background-color: #dddada;
    color: #707070;
    box-shadow: #e0dcdc 2px 2px 10px 1px;
  }

  .item-list{
    cursor: pointer;
    padding: 5px 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .cmd{
    cursor: pointer;
    padding: 5px 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    
    svg{
      color: #686868;
      font-size: 2rem;
      margin-left: 20px ;
      cursor: pointer;
      
      :hover{
        color: ${v.laranja}
      }
    }
  }
  
  .title{
    margin-bottom: 15px;
    color: #707070;
  }

  tr:nth-child(even){background-color: #f2f2f2;}
  tr:hover {background-color:  #eff2fc;}

  @media  screen and (max-width: 1790px){
    width: 95%;
  }
  

  @media  screen and (max-width: 1120px){
    .titulo{
      .btn-lista{
        .botao{
          font-size: 0.7rem;
        }
      } 
    }
  }

  @media  screen and (max-width: 1030px){
    .titulo{
      flex-direction: column;
      .btn-lista{
        width: 100%;
        .botao{
          width: 25%;
        }
      } 
    }
  }

  @media  screen and (max-width: 750px){
    width: 90%;
    .titulo{
      flex-direction: column;
      .btn-lista{
        width: 100%;
        .botao{
          width: 25%;
        }
      } 
    }

    .item-list{     
      font-size: 0.8rem;
    }

    .item-list{
      font-size: 0.8rem;
    }

    .item-list{
      font-size: 0.8rem;
    }
  }



  @media  screen and (max-width: 525px){
    width: 90%;
    margin-left: 20px;
    h1{
      font-size: 1.5rem;
    }
    .titulo{
      flex-direction: column;
      .btn-lista{
        width: 100%;
        flex-direction: column;
        

        .botao{
          margin-top: 3px;
          margin-bottom: 10px;
          width: 100%;
          
        }
      } 
    }
    tr{
      display: flex;
      flex-direction: column;
      width: 50%;
      
      
    }

    .title-list{
      cursor: auto;
      padding: 12px 10px;
      width: 10rem;
      text-align: left;
      background-color: #dddada;
      color: #707070;
      box-shadow: #e0dcdc 2px 2px 10px 1px;  
    }

    .title-list{
      display: none;
    }

    .item-list{
      border: none;
      text-align: center;
      width: 200%;
    }

    .cmd{
      border: none;
      padding: 0px 82%;
      width: 200%;
      border-bottom: 1px solid #707070;
     
    }

    tr:nth-child(even){
      background-color:#fff;
    }

    tr:hover {
      background-color:  #fff;
    }
  }

  @media  screen and (max-width: 430px){
    h1{
      font-size: 1.2rem;
    }
    .cmd{
      padding: 0px 77%;
    }
  }
  @media  screen and (max-width: 375px){
    h1{
      font-size: 0.8rem;
    }
    .cmd{
      padding: 0px 72%;
    }
  }
  @media  screen and (max-width: 320px){
    padding: 6px;

    h1{
      font-size: 0.6rem;
    }

    .cmd{
      
      padding: 0px 75%;
    }
    
  }
`;



