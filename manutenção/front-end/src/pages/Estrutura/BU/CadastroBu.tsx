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


type requestFiled ={
  business: string;
  nome: string;
  status: string;
}

function CadastroBU(){

  
  const formRef = useRef<FormHandles>(null);
  const route = useNavigate();
  const { id }= useParams();
  const [campos, setCampos] = useState<requestFiled>({
    business:'',
    nome:'',
    status:'ATIVO',
  })



  useEffect(() =>{
    if(id != undefined){
      findRegister()
    }
  }, [id])

  const findRegister = async() => {
    const resultado = await api.get(`/unidades/id/${id}`)
    setCampos({
      business: resultado.data.business,
      nome: resultado.data.nome,
      status:'ATIVO',
    })
  }

  function voltar(){
    route('/bus')
  }

  const handleSubmit = useCallback(async (data: requestFiled) => {
    
    try{
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        business: Yup.string().required("É Necessario Informar um Código de Unidade de Negócio"),
        nome: Yup.string().required('É Necessario Inserir a Descrição da Unidade de Negócio'),
      });
      await schema.validate(data, {
        abortEarly: false
    });      
      try{
        var obj=''
        const status = JSON.parse(`{"status": "ATIVO"}`)
        obj = {...data, ...status}
        var res = JSON.parse(JSON.stringify(obj, function(a, b) {
          return typeof b === "string" ? b.toUpperCase() : b
        }));        
        const response = await api.post('/unidades', res).then((rest) => {
          const request = rest.data;
          localStorage.setItem('@BU', data.business)
          voltar()
        }).catch((error: any) => {
          const msg = error.response.data.mensagem + " Status: " + error.response.status;
          toast.error(msg)
        })
      }catch(error: any){
        toast.error("Erro de Conexão: ERR_CONNECTION_REFUSED") 
        }
    }catch(e){
      if (e instanceof Yup.ValidationError) {
        const erro = getErrors(e)
        formRef.current?.setErrors(erro);
        return;
      }
    }
  }, []);

  const onInputChange = (e:any)=>{
    formRef.current?.setErrors({});
  }
  
  return(
    <Content>
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1>Cadastro BU</h1>
        <button onClick={voltar}><ButtonDefault  type='button' widthFrom={'5rem'} >Voltar</ButtonDefault></button>
      </div>     
      <Form   ref={formRef} onSubmit={handleSubmit}>
        <div className="bu">
          <label>BU</label>
          <InputDefalt name='business'  Main={true} onChange={(e)=>onInputChange(e)} />
        </div>
        <div className="descricao">
          <label>Descrição</label>
          <InputDefalt  name='nome' Main={true}  onChange={(e)=>onInputChange(e)}/>
        </div>
        <button type='submit' className='btn-salvar'><ButtonDefault>Salvar</ButtonDefault></button>
      </Form>
    </Content>
  )
}




//#302c2c
export default CadastroBU;