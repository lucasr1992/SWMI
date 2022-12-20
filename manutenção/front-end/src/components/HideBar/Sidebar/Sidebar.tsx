import { SLogo, SSidebar, SSearch,  SDivider, SSidebarButton, SLista, GroupBar } from "./styles";
import { GiTechnoHeart } from 'react-icons/gi'
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai'
import { SidebarData } from '../Lista/ListLinks'
import { useEffect, useState } from "react";
import { SubMenu } from '../Dropdown/Dropdown'

import Logo from '../../../assets/logo.svg'







function Sidebar({acesso, onClose= () => {} }:any){  
  const [sidebarOpen, SetSidebarOpen] = useState(true);
  const [paginaOn, setPaginaOn] = useState(0)
  const [dadosSidebar, setDadosSidebar] = useState(SidebarData);

  
  
  function setPage(id: number){
    setPaginaOn(id)
  }


  useEffect(() => {
    acessoCargo();
  }, [acesso])

  function acessoCargo(){
    var arr: number;
    var meuArray  = acesso;
    var res = meuArray.map((s:any)=>s.id);
    var maior = Math.max.apply(null, res);
    var menor = Math.min.apply(null, res)
    for(arr = menor; arr <= maior; arr++){
      const propriedades = [...SidebarData]
      const pag = acesso.find((item:any) => item.id === arr)?.pagina;
      const status = acesso.find((item:any) => item.id === arr)?.pendenciasVisualizacao;
      const lista = propriedades.find((pagina) => pagina.title === pag)?.id;  
      propriedades[lista || 0].visible=status;
      setDadosSidebar(propriedades)
    }
  }





 


  return(
      
    <GroupBar >
      <SSidebar  isOpen={sidebarOpen}>
        <SSidebarButton isOpen={sidebarOpen} onClick={() => 
          {SetSidebarOpen((sidebarOpen) => !sidebarOpen)
          }}>
            <div className="openButton" onClick={onClose()}>
              <AiOutlineLeft />
            </div>
          
        </SSidebarButton>
        <SLogo isOpen={sidebarOpen}>        
        <div className="imgLogo"><GiTechnoHeart onClick={acessoCargo}/><h1 className="titulo-logo">SWMI</h1></div>
        {/* <div className="imgLogo"><img src={Logo}/></div> */}
        </SLogo>
        {/* <SSearch isOpen={sidebarOpen}>
          <SSearchIcon><AiOutlineSearch/></SSearchIcon>
          <input placeholder="Search"/>
        </SSearch> */}
        <SDivider/>
        {dadosSidebar.map((item: any, index) => {
          return(
            <>
              {item.visible &&
                <SLista className="pagina" onClick={() => setPage(item.id)} isActive={item.id === paginaOn ? true : false} >
                  <SubMenu item={item} key={index} ativo={sidebarOpen}  />
                </SLista>
              }
            </>
          )
        })}
          
        <SDivider/>
      </SSidebar>
        
        
      </GroupBar>
      
  )
}

export default Sidebar;