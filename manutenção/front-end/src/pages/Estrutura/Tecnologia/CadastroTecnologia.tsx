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
  tecnologia: string;
  status: string;
}

function CadastroTecnologia(){

  
  const formRef = useRef<FormHandles>(null);
  const route = useNavigate();
  const { id }= useParams();
  const [campos, setCampos] = useState<requestFiled>({
    tecnologia:'',
    status:'ATIVO',
  })



  useEffect(() =>{
    LoginOn();
    if(id != undefined){
      findRegister()
    }
  }, [id])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      route("/")
    }
  }

  const findRegister = async() => {
    const resultado = await api.get(`/tecnologias/id/${id}`)
    setCampos({
      tecnologia: resultado.data.tecnologia,
      status:'ATIVO',
    })
  }

  function voltar(){
    route('/tecnologias')
  }

  const handleSubmit = useCallback(async (data: requestFiled) => {
    
    try{
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        tecnologia: Yup.string().required("É Necessario Informar a Tecnologia"),
        
      });
      await schema.validate(data, {
        abortEarly: false
    });      
      try{
        var obj=''
        const registro = JSON.parse(`{"status": "ATIVO"}`)
        obj = {...data, ...registro}
        var res = JSON.parse(JSON.stringify(obj, function(a, b) {
          return typeof b === "string" ? b.toUpperCase() : b
        }));        
        const response = await api.post('/tecnologias', res).then((rest) => {
          const request = rest.data;

         
          localStorage.setItem('@TECNOLOGIA', data.tecnologia.toUpperCase())
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
        <h1>Cadastro Tecnologia</h1>
        <button onClick={voltar}><ButtonDefault  type='button' widthFrom={'5rem'} >Voltar</ButtonDefault></button>
      </div>     
      <Form   ref={formRef} onSubmit={handleSubmit}>
        <div className="tecnologia">
          <label>Tecnologia</label>
          <InputDefalt name='tecnologia'  Main={true} onChange={(e)=>onInputChange(e)} />
        </div>
        <button type='submit' className='btn-salvar'><ButtonDefault>Salvar</ButtonDefault></button>
      </Form>
    </Content>
  )
}




//#302c2c
export default CadastroTecnologia;