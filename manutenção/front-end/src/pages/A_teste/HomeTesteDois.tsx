
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup'
import InputDefalt from '../../components/Input/InputDefalt';
import getErrors from '../../utils/tratarErrosYup';
import { Content } from './style'


function HomeTesteDois(){
  const formRef = useRef<FormHandles>(null);

  
  useEffect(() =>{
    
  }, [])

 

  const fuct= useCallback( async (data: any) =>{
    try{
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        teste: Yup.string().required("teste erro")
      })
      await schema.validate(data, {
        abortEarly: false,
      });
    

    }catch(err:any){
      if (err instanceof Yup.ValidationError){
        const erro = getErrors(err)
        formRef.current?.setErrors(erro)
        return;
      }
    }
  },[])
  
  



  return(
    <Content>
      <Form ref={formRef} onSubmit={fuct}>
          <InputDefalt Main={true} name='teste' />
          <button type='submit'>Teste</button>
      </Form>
    </Content>
  )

}





export default HomeTesteDois;
