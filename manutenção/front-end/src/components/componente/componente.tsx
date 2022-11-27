import styled from "styled-components";

type props={
  item?: {
    id: number,
    title: string;
    path: string;
    icon: JSX.Element;
    notificatio: number,
    subNav: {
        title: string;
        path: string;
        icon: JSX.Element;
        cName: string;
        subDropdown: {
            title:  string,
            path:  string,
            icon: JSX.Element;
        }
    }
  }
  ativo?: boolean,  
 
}


export const Divi = styled.div`
  color: white;
`;

function Componente({onClose = () => {}}: any){
  return(
    <Divi  onClick={onClose}>Teste</Divi>
  )
}

export default Componente;


{/* <Componente onClose={() => teste()}/> */}