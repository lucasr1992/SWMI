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
    .div-registro{
      display: flex;
      width:100%;
      label{
        margin-right:5px;
      }
      .registro{
        width:35%;
        margin-right:8px;
      }
    }
    
    .div-email{
      margin-top:15px;
      display: flex;
      width:100%;
      .senha{
        display: flex;
        label{
          margin-right:20px;
        }
        width:45%;
        
      }
      .email-label{
        margin-left: 6px;
        width:8%;
      }
    }
    

    .but-salvar-div{
      margin-top: 20px;
      width: 50%;
      .btn-salvar{
        width: 100%;
      }
    }
  }

  
  

  
  

  @media screen and (max-width: 1000px) {
    h1{
      font-size: 1.5rem;
    }

    

    form{
      .but-salvar-div{
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
  }

  @media screen and (max-width: 320px) {
    h1{
      font-size: 1rem;
      
    }

    
  }
  

`;