import { SLayout, SMain } from "./styles";
import Sidebar from "../Sidebar/Sidebar";
import { HTMLAttributes, useState } from "react";
import Navbar from "../../Navbar/Header/Navbar";


interface MyProps extends HTMLAttributes<HTMLDivElement>{
  children: JSX.Element
}


function Layout(props:MyProps){
  const [ isOpen, setIsOpen] = useState(false)
  const showBar = () => setIsOpen(!isOpen);
 

  return(
    <SLayout >
      <Sidebar onClose={() => showBar}/>
      <div className="sidebar">
        <Navbar  />
        <SMain >{props.children}</SMain>
      </div>
    </SLayout>
  )
}

export default Layout;