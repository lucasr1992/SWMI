import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useState, useEffect, useRef, useCallback } from 'react'
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import InputDefalt from '../../../components/Input/InputDefalt';
import getErrors from '../../../utils/tratarErrosYup';
import api from '../../../service/api';
import { Content } from './styleCadastro';
import SelectDefault from '../../../components/Select/SelectDefault';

type requestFiled ={
  area: string;
  centrocusto: string;
  uo: {
    id: number;
  };
  status: string;
}

type selectValu = {
  value: number;
  label: string;
}

interface uoProps{
  id: number;
  uo: string;
  status: string;
};

function CadastroArea(){
  const [uoList, setUoList] = useState<uoProps[]>([])
  const [selectValue, setSelectValue] = useState<selectValu[]>([])
  const formRef = useRef<FormHandles>(null);
  const route = useNavigate();
  
  useEffect(() =>{
    loadUoAtiva()
  }, [])

  async function loadUoAtiva(){
    try{
      const list = (await api.get('/uos/status/ATIVO')).data
      const newList = list.map((item: any) => ({
        value: item.id,
        label: item.uo
    }))
    setSelectValue(newList)
    }catch(error:any){
      toast.error("Falha na Conexão Plantas")
    }
  }


  function voltar(){
    route('/areas')
  }

  const salvar = useCallback(async (data: requestFiled) => {
    try{
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        area: Yup.string().required("É Necessario Informar o Nome de uma Area!"),
        uo:   Yup.number().required("Necessario Informar a UO")
      });
      await schema.validate(data, {
        abortEarly: false
      });
      const status = JSON.parse(`{"area": "${data.area}","centroCusto": "${data.centrocusto}","uo": { "id": ${data.uo} }, "status": "ATIVO"}`)
      var res = JSON.parse(JSON.stringify(status, function(a, b) {
        return typeof b === "string" ? b.toUpperCase() : b
      }));      
      const response = await api.post('/areas', res).then((rest) => {
        const request = rest.data;
        
        localStorage.setItem('@AREA', data.area.toUpperCase())
          voltar()
      }).catch((error: any) => {
        const msg = error.response.data.mensagem + " Status: " + error.response.status;
        toast.error(msg)
      })
    }catch(e){
      if (e instanceof Yup.ValidationError) {
        const erro = getErrors(e)
        formRef.current?.setErrors(erro);
        return;
      }
    }  
  }, [])

  

  return(
    <Content>
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1>Cadastro Area</h1>
        <button onClick={voltar}><ButtonDefault  type='button' widthFrom={'5rem'} >Voltar</ButtonDefault></button>
      </div>     
      <Form   ref={formRef} onSubmit={salvar}>
        <div className="area">
          <label>Area</label>
          <InputDefalt name={"area"} id='area' Main={true}  />
        </div>
        <div className="cc">
          <label>Centro de Custo</label>
          <InputDefalt  name={"centrocusto"} Main={true} id='centrocusto' />
        </div>
        <div className="uo">
          <label>UO</label>
          <SelectDefault  options={selectValue} name={'uo'} Main={true}/>
        </div>
        <div className='but-salvar'>
        <button type='submit' className='btn-salvar'><ButtonDefault>Salvar</ButtonDefault></button>
        </div>
      </Form>         
      </Content>
  )
}


export default CadastroArea;