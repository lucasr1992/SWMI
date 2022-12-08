import { SLogo, SSidebar, SSearch,  SDivider, SSidebarButton, SLista, GroupBar } from "./styles";
import { GiTechnoHeart } from 'react-icons/gi'
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai'
import { SidebarData } from '../Lista/ListLinks'
import { useState } from "react";
import { SubMenu } from '../Dropdown/Dropdown'
import Logo from '../../../assets/logo.svg'







function Sidebar({onClose= () => {} }:any){  
  const [sidebarOpen, SetSidebarOpen] = useState(true);
  const [paginaOn, setPaginaOn] = useState(0)

  
  
  function setPage(id: number){
    setPaginaOn(id)
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
        <div className="imgLogo"><GiTechnoHeart /><h1 className="titulo-logo">SWMI</h1></div>
        {/* <div className="imgLogo"><img src={Logo}/></div> */}
        </SLogo>
        {/* <SSearch isOpen={sidebarOpen}>
          <SSearchIcon><AiOutlineSearch/></SSearchIcon>
          <input placeholder="Search"/>
        </SSearch> */}
        <SDivider/>
        {SidebarData.map((item: any, index) => {
          return(
            <>
              <SLista className="pagina" onClick={() => setPage(item.id)} isActive={item.id === paginaOn ? true : false} >
                <SubMenu item={item} key={index} ativo={sidebarOpen}  />
              </SLista>
            </>
          )
        })}
          
        <SDivider/>
      </SSidebar>
        
        
      </GroupBar>
      
  )
}

export default Sidebar;