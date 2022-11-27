import { useState } from "react";
import { Link } from "react-router-dom";
import { Content, SLinkIcon, SLinkLabel, SLinkNotification, SLink, ContentSub, SLinkIconNav, SLinkIconSubNav } from './style';


type props={
  item: {
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


type propSub={
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
  ativo?: boolean,
  
}


export function Dropdown( {onClose = () => {}, item, ativo} : any){
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const showSubOff = () => setSubnav(false);

  

  return(
    <Content >
      <ul className="dropdown"  onClick={!item.subNav && onClose}>
        <SLink to={item.path}  onClick={item.subNav && showSubnav}>  
          <SLinkIcon  >{item.icon}</SLinkIcon> 
              { !ativo && <SLinkLabel >{item.title}</SLinkLabel>}
              {!!item.notificatio && !ativo &&(
                <SLinkNotification >{item.notificatio}</SLinkNotification>
              )}         
        </SLink>

        {subnav && item.subNav.map((item: any, index:any) => {
            return(
              <>
                <SubDropdown closeMenu={onClose} subNav={item} ativo={ativo} key={index}/>
              </>
            )
          })}
      </ul>
    </Content>
  )
}


export function SubDropdown({closeMenu = () => {}, subNav, ativo} : any){
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
 
  

  return(
    <ContentSub onClick={!subNav.subDropdown && closeMenu}>
      <div onClick={subNav.subDropdown && showSubnav}>
        <Link className="links" to={subNav.path} ><SLinkIconNav>{subNav.icon}</SLinkIconNav>{subNav.title}</Link> 
        
      </div>
      {!ativo && subnav && subNav.subDropdown.map((item:any, index:any) => {
        return(
            <Link onClick={closeMenu} className="links-drop" to={item.path}><SLinkIconSubNav className="subdrop">{subNav.icon}</SLinkIconSubNav>{item.title}</Link>
        );
      })}
        
    </ContentSub>
    )

    //#C6C6C6
}