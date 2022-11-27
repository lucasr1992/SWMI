import { InputHTMLAttributes, useState, ChangeEvent, useRef, useEffect, useCallback } from 'react'
import { IconBaseProps } from 'react-icons'
import * as FiIcons from "react-icons/fi"
import * as FaIcons from 'react-icons/fa'
import { useField } from '@unform/core';


import { Content, Error } from './style'
import { registerFont } from 'canvas'

interface propriedades extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  errorFrom?: string
  HeightFrom?: any
  widthFrom?: any
  Main:boolean
}


const InputDefalt: React.FC<propriedades>=({name, icon: Icon, errorFrom, HeightFrom, widthFrom, Main, ...rest}) => {
  const [isFocusedInput, SetIsFocusedInput] = useState(false);
  const [isFillInput, SetIsFillInput] = useState(false);
  const [isErrorInput, SetIsErrorInput] = useState<any>(''); 
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  
  useEffect(() => {
    registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
    });
}, [fieldName, registerField]);
 
  const handleInputFocus = useCallback(() => {
    SetIsFocusedInput(true);
  }, []);

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

 
 
  
  return(
    <Content Width={widthFrom} Height={HeightFrom} isFill={isFillInput} 
    isFocused={isFocusedInput} isError={!!error} Main={Main}>
      {Main && <FaIcons.FaStarOfLife size={8}/>}
      {Icon && <Icon size={18}/> }
      
      <input 
        autoComplete='off'
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
        defaultValue={defaultValue} 
        ref={inputRef} {...rest}
        onChange={handleErro}
      />
      {error && error.includes("log must be a `number` type, but the final value was:") &&  <Error title={"Campo Apenas para Números"}><FiIcons.FiAlertCircle/></Error>}
      {error && !error.includes("log must be a `number` type, but the final value was:") &&  <Error title={error}><FiIcons.FiAlertCircle/></Error>}
    </Content>
  )
}



export default InputDefalt;
