import { useState } from 'react';
import { Content, Burger, MobileMenu } from './style'
import { SidebarData } from '../../HideBar/Lista/ListLinks'
import { Dropdown } from '../SubMenu/SubMenu';

function Navbar(){
  const [burger, setBurger] = useState(false);
  

  const handleClick = () => setBurger(!burger);
  // const closeMobileMenu = () => setClick(false);

  function burgerOn(){
    setBurger(!burger)
  }
  

  return(
    <Content>
      <div className='buger' >
          <Burger visible={burger} onClick={handleClick} > {/*onClick={() => setClick(!click)} */}
            <div />
            <div />
            <div /> 
          </Burger>  
           <MobileMenu visible={burger}>
           {burger && SidebarData.map((item: any, index) => {
              return(
                <>
                  <Dropdown onClose={() => burgerOn()} item={item} key={index}/>
                </>
              )
            })}           
           </MobileMenu>
      </div>      
    </Content>
  )
}

export default Navbar;