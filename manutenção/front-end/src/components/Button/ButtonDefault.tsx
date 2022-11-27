import { useEffect, useState, ButtonHTMLAttributes } from 'react'
import { Content } from './style'



interface propDefault extends ButtonHTMLAttributes<HTMLButtonElement>{
  heigthFrom?:any, 
  widthFrom?: any, 
  backColor?:any, 
  textColor?:any,
  hoverColor?: any,
  hoverColorText?: any,
  children: any,
}


function ButtonDefault(p: propDefault ){
  const[heightDefault, setHeightDefault] = useState(null)
  const[widthDefault, setWidthDefault] = useState(null)
  const[backColorDefault, setBackColorDefault] = useState(null)
  const[textColorDefault, setTextColorDefault] = useState(null)
  const[hoverColorDefault, setHoverColorDefault] = useState(null)
  const[hoverColorTextDefault, setHoverColorTextDefault] = useState(null)

  useEffect(() => {
    setProps();
  }, []); 


  function setProps(){
    setHeightDefault(p.heigthFrom)
    setWidthDefault(p.widthFrom)
    setBackColorDefault(p.backColor)
    setTextColorDefault(p.textColor)
    setHoverColorDefault(p.hoverColor)
    setHoverColorTextDefault(p.hoverColorText)
  }

  
  return (
    <Content heigthFrom={heightDefault} widthFrom={widthDefault} 
    backColor={backColorDefault} textColor={textColorDefault} 
    hoverColor={hoverColorDefault} hoverColorText={p.hoverColorText} >
      
      {p.children}     
    </Content>
  );
}

export default ButtonDefault;