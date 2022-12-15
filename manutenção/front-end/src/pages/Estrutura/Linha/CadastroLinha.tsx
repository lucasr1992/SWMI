import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup'
import 'react-toastify/dist/ReactToastify.css';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import InputDefalt from '../../../components/Input/InputDefalt';
import getErrors from '../../../utils/tratarErrosYup'
import api from '../../../service/api';
import { Content } from "./styleCadastro";
import SelectDefault from '../../../components/Select/SelectDefault';





type requestFileds = {
  linha: string;
  area:{
    id: number;
  },
  status: string,
}

type selectValu = {
  value: number;
  label: string;
}

function CadastroLinha(){
  const [selectValue, setSelectValue] = useState<selectValu[]>([])
  const formRef = useRef<FormHandles>(null);
  const route = useNavigate();
  
  useEffect(() =>{
    loadLinhaAtiva()
    LoginOn()
  }, [])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      route("/")
    }
  }

  async function loadLinhaAtiva(){
    try{
      const list = (await api.get('/areas/status/ATIVO')).data
      
      const newList = list.map((item: any) => ({
        value: item.id,
        label: item.area
    }))
    setSelectValue(newList)
    }catch(error:any){
      toast.error("Falha na Conexão Plantas")
    }
  }


  function voltar(){
    route('/linhas')
  }


  const salvar = useCallback(async (data: requestFileds) => {
    
    try{
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        linha: Yup.string().required("É Necessario Informar a Linha!"),
        area:   Yup.number().required("Necessario Informar a Area"),
      });
      await schema.validate(data, {
        abortEarly: false
      });
      
      
      // const status = JSON.parse(`{"planta": "${data.planta}","regiao": "${data.regiao}",
      // "pais": "${data.pais},"unidade": { "id": ${data.unidade} }, "status": "ATIVO"}`)
      const registro = JSON.parse(`{"linha": "${data.linha}" ,"area": { "id": ${data.area} }, "status": "ATIVO"}`)     
      var res = JSON.parse(JSON.stringify(registro, function(a, b) {
        return typeof b === "string" ? b.toUpperCase() : b
      }));      
      
      
      const response = await api.post('/linhas', res).then((rest) => {
        const request = rest.data;
        
        localStorage.setItem('@LINHA', data.linha.toUpperCase())
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
        <h1>Cadastro Linha</h1>
        <button onClick={voltar}><ButtonDefault  type='button' widthFrom={'5rem'} >Voltar</ButtonDefault></button>
      </div>     
      <Form   ref={formRef} onSubmit={salvar}>
        <div className="linha">
          <label>Linha</label>
          <InputDefalt name={"linha"} id='area' Main={true}  />
        </div>
        
        <div className="area">
          <label>Area</label>
          <SelectDefault  options={selectValue} name={'area'} Main={true}/>
        </div>
        <div className='but-salvar-div'>
        <button type='submit' className='btn-salvar'><ButtonDefault>Salvar</ButtonDefault></button>
        </div>
      </Form>  
           
      </Content>
  )
}




//#302c2c
export default CadastroLinha;