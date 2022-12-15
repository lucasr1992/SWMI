import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from '../Lista/ListLinks'
import { Content, SLinkContainer, SLink, SLinkIcon, SLinkLabel, SLinkNotification, SLinkIconNav, SLinkIconSubNav, ContentSub } from "./styled";


type props={
  item: {
    id: number,
    title: string;
    path: string;
    icon: JSX.Element;
    notificatio: number,
    visible: boolean,
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
    visible: boolean,
    subDropdown: {
        title:  string,
        path:  string,
        icon: JSX.Element;
    }
  }
  ativo?: boolean,
}




export function SubMenu({item, ativo} : props){
  const [subnav, setSubnav] = useState(false);
  const [pathItem, setPathItem] = useState(true);
  const showSubnav = () => setSubnav(!subnav);

  const showSubOff = () => setSubnav(false);
  // onMouseLeave={showSubOff}
  return(
    <Content>
      
      <SLinkContainer   onMouseLeave={showSubOff}>
      <ul className="dropdown" >
        
        <SLink to={item.path}  onClick={item.subNav && showSubnav}>  
          <SLinkIcon  >{item.icon}</SLinkIcon> 
              { !ativo && <SLinkLabel >{item.title}</SLinkLabel>}
              {!!item.notificatio && !ativo &&(
                <SLinkNotification >{item.notificatio}</SLinkNotification>
              )}         
        </SLink>
        
          {!ativo && subnav && item.subNav.map((item: any, index:any) => {
            return(
              <>
                {/* <Link className="links" to={item.path} key={index}><SLinkIconNav>{item.icon}</SLinkIconNav>{item.title}</Link>  */}
                {/* <SubDropdown item={item} /> */}
                <SubDropdown subNav={item} ativo={ativo} key={index}/>
                
              </>
            )
          })}
        </ul>
        
      </SLinkContainer>
    </Content>
  );
}

export function SubDropdown({subNav, ativo} : propSub){
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
 
  function teste(){
    console.log(subnav)
  }

  return(
    <ContentSub>
      <div onClick={subNav.subDropdown && showSubnav}>
        <Link className="links" to={subNav.path} ><SLinkIconNav>{subNav.icon}</SLinkIconNav>{subNav.title}</Link>
      </div> 
      {!ativo && subnav && subNav.subDropdown.map((item:any, index:any) => {
        return(
          <>
            <Link className="links-drop" to={item.path}><SLinkIconSubNav className="subdrop">{subNav.icon}</SLinkIconSubNav>{item.title}</Link>
          </> 
        )
      })}
        
    </ContentSub>
    )

    //#C6C6C6
}



