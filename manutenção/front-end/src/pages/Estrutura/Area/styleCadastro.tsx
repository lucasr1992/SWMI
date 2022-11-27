import styled from "styled-components";

export const Content = styled.div`
  

  display: flex;
  flex-direction: column;
  margin-left: 15px ;
  width: calc(100vw - 15%) ; 
  padding: 30px 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow: grey 0px 0px 4px 4px;
  color: #707070;
  padding: 20px 40px;
  height: 100vh;
.titulo{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
 
}

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    
   
  }

  .but-salvar{
        width: 50%;
        .btn-salvar{
          margin-top: 20px;
          width: 100%;
        }
      }
  

  .area{
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    width: 50%;
    margin-bottom: 30px;
    label{
      margin-bottom: 5px;
    }
  }

  .cc{
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    width: 50%;
    margin-bottom: 30px;
    label{
      margin-bottom: 5px;
    }
  }

  
    .uo{
      display: flex;
      flex-direction: column;
      justify-content: start;
      text-align: center;
      width: 50%;
      
      label{
        margin-bottom: 5px;
      }
    }
   

   


      
  
  
  

  @media screen and (max-width: 1000px) {
    h1{
      font-size: 1.5rem;
    }

    .area{
      width: 100%;
    }

    .cc{
      width: 100%;
    }

    .uo{
      width: 100%;
    }

    
  }

  @media screen and (max-width: 850px) {
    .area{
      width:80%;
    }
    
    .cc{
      width: 80%;
    }
    
    .uo{
      width: 80%;
      
    }

    .but-salvar{
      width: 80%;
      .btn-salvar{
      width: 100%;
    
      }
    }
  }

  @media screen and (max-width: 690px) {
    .area{
      width:100%;
    }
    
    .cc{
      width: 100%;
    }
    
    .uo{
      width: 100%;
      
    }

    .but-salvar{
      width: 100%;
      .btn-salvar{
      width: 100%;
    
      }
    }
  }


  @media screen and (max-width: 525px) {
    h1{
      font-size: 1.5rem;
    }

    width: 90%;
    margin-left: 20px;

    .area{
      width:110%;
    }
    
    .cc{
      width: 110%;
    }
    
    

    .uo{
      width: 110%;
    
    }

    .but-salvar{
      width: 110%;
      
    }

  }

  @media screen and (max-width: 320px) {
    h1{
      font-size: 1rem;
      
    }

    
  }
  

`;