import { InputHTMLAttributes, useState, 
  ChangeEvent, useRef, useEffect, useCallback, 
  Component } from 'react';
  import { registerFont } from 'canvas'

import { IconBaseProps } from 'react-icons';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { useField } from '@unform/core';

import { Content, Error } from './style'


interface propriedades extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  errorFrom?: string
  HeightFrom?: any
  widthFrom?: any
  Main:boolean
  options:any
}






const SelectDefault: React.FC<propriedades>=({options, name, icon: Icon, errorFrom, HeightFrom, widthFrom, Main, ...rest}) => {
  const [isFocusedInput, SetIsFocusedInput] = useState(false);
  const [isFillInput, SetIsFillInput] = useState(false);
  const [isErrorInput, SetIsErrorInput] = useState<any>(''); 
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [showDrop, setShowDrop] = useState(false)
  const [ searchValue, setSearchValue] = useState<number>();
  const [ mainValue, setMainValue] = useState()
  const [ mainLabel, setMainLabel] = useState('')
  
  
  

  function handleFocus(){
    document.getElementById("mainInput")?.addEventListener("click", () => {
      document.getElementById("focu")?.focus();
    })
  }
  
  useEffect(() => {
    registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
    });


  }, [fieldName, registerField]);

  const onSearch = (e:any) => {
    setSearchValue(e.target.value);
  }

  const refactDropMenu = () =>{
    if(!searchValue){
      return options
    }else{
      return options.filter(
        (option:any) =>
          option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
      );
    }
  }
  
 
  const handleInputFocus = useCallback(() => {
    SetIsFocusedInput(true);
    handleFocus()
  }, []);

  function searchBlur(){
    setShowDrop(false)
    handleInputBlur()
  }

  const handleErro = useCallback(() => {
    SetIsErrorInput('');
  }, []);
  
  const handleInputBlur = useCallback(() => {
    SetIsFocusedInput(false);

    if (inputRef.current?.value) {
      SetIsFillInput(true);
    }else {
      SetIsFillInput(false);
    }
  }, []);

  
  
  
  
  
  function setMainVal (e: any){
    let newValue: any
    let newLabel: any
    newValue = e.value  
    newLabel = e.label
    SetIsFillInput(true)
    setMainValue(newValue) 
    setMainLabel(newLabel)
    searchBlur();
  }

  function changeShowMenu(){
    if(showDrop === true){
    setShowDrop(false)
    SetIsFocusedInput(false)
    }else{
    setShowDrop(true)
    SetIsFocusedInput(true)      
    }
    
    document.getElementById("mainInput")?.addEventListener("click", () => {
      document.getElementById("focu")?.focus();
    })
  }
  
  function teste(){
    
  }
  return(
    <Content Width={widthFrom} Height={HeightFrom} isFill={isFillInput} 
    isFocused={isFocusedInput} isError={!!error} Main={Main}>
      {Main && <FaIcons.FaStarOfLife  size={8}/>}
      {Icon && <Icon size={18}/> }
      
      <input 
        autoComplete='off'
        className='input-label' 
        placeholder={"Select..."} 
        onChange={handleErro}
        onFocus={handleInputFocus} 
        name={name}
        ref={inputRef} {...rest}
        value={mainLabel}
        onClick={changeShowMenu}
        id="mainInput"
        />

      <input 
        name={name}
        // onFocus={handleInputFocus} 
        defaultValue={defaultValue} 
        ref={inputRef} {...rest}
        onChange={handleErro}
        value={mainValue}
        onClick={changeShowMenu}
        id="mainInput"
        className='input-main'
       />
       

       <IoIcons.IoIosArrowDown cursor={'pointer'} className="seta" onClick={changeShowMenu}/>
       {showDrop && 
          <div className='drop'>
            <div className='container'>
            <div className='search'>
               <input autoComplete='off' onChange={onSearch}  id="focu" /> {/*onBlur={searchBlur}  onChange={onSearch} */}
            </div>
            
              {refactDropMenu().map((option:any) => (
                <div key={option.value} onClick={() => setMainVal(option)} className='drop-iten'>{option.label}</div>
              ))}  
            </div>     
          </div>
          
        }

       

      {error && error.includes("log must be a `number` type, but the final value was:") &&  <Error title={"Campo Apenas para Números"}><FiIcons.FiAlertCircle/></Error>}
      {error && !error.includes("log must be a `number` type, but the final value was:") &&  <Error title={"É Necessario Selecionar um Item"}><FiIcons.FiAlertCircle/></Error>}
    </Content>
  )
}



export default SelectDefault;
