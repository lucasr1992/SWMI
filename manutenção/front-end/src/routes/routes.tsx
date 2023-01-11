import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import { useState, useCallback, useRef, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup'
import getErrors from "../utils/tratarErrosYup";
import api from "../service/api";
import Layout from "../components/HideBar/LayoutSideBarHide/Layout";
import { Container } from './style';


import Home from "../pages/Home/Home";
import Bu from "../pages/Estrutura/BU/Bu";
import CadastroBU from "../pages/Estrutura/BU/CadastroBu";
import Area from "../pages/Estrutura/Area/Area";
import CadastroArea from "../pages/Estrutura/Area/CadastroArea";
import Planta from "../pages/Estrutura/Planta/Planta";
import CadastroPlanta from "../pages/Estrutura/Planta/PlantaCadastro";
import Cargo from "../pages/Estrutura/Cargo/Cargo";
import CadastroCargo from "../pages/Estrutura/Cargo/CadastroCargo";
import Turno from "../pages/Estrutura/Turno/Turno";
import CadastroTurno from "../pages/Estrutura/Turno/CadastroTurno";
import Especialidade from "../pages/Estrutura/Especialidade/Especialidade";
import CadastroEspecialidade from "../pages/Estrutura/Especialidade/CadastroEspecialidade";
import Uo from "../pages/Estrutura/UO/UO";
import CadastroUo from "../pages/Estrutura/UO/CadastroUo";
import Linha from "../pages/Estrutura/Linha/Linha";
import CadastroLinha from "../pages/Estrutura/Linha/CadastroLinha";
import Tecnologia from "../pages/Estrutura/Tecnologia/Tecnologia";
import CadastroTecnologia from "../pages/Estrutura/Tecnologia/CadastroTecnologia";
import TipoEquip from "../pages/Estrutura/TipoEquipamento/Tipo";
import CadastroTipo from "../pages/Estrutura/TipoEquipamento/CadastroTipo";
import HomeTeste from '../pages/A_teste/HomeTeste'
import InputDefalt from "../components/Input/InputDefalt";
import ButtonDefault from "../components/Button/ButtonDefault";
import Colaborador from "../pages/Colaborador/Colaboradores";
import CadastroColaborador from "../pages/Colaborador/CadastroColaboradores";


type request={
  registro: string;
  senha: string;
}

type dadosUsuario ={
  registro: string,
  nome: string,
  uo: number,
  cargo: number,
  departamento: number
}

type usuario={
    registro: string,
    nome: string,
    email: string,
    uo: {
        id: number,
        uo: string,
    },
    senha: string,
    cargo: {
        id: number,
        cargo: string,
    },
    departamento: {
        id: number,
        departamento: string,
    }
}



function AppRoutes(){
  const [login, setLogin] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const [usuario, setUsuario] = useState<dadosUsuario>();
  const [acesso, setAcesso] = useState([]);
  
  useEffect(() => {
    LoginOn();
  })

  function LoginOn(){
    localStorage.setItem('@LOGIN', "LoginOn");
  }
  


  const logar = useCallback(async (data: request) => {
      try{
        const schema = Yup.object().shape({
          registro: Yup.string().required("Necessario Informar o Numero do Registro"),
          senha: Yup.string().required("Necessario Inormar a Senha")
        });
        await schema.validate(data, {
          abortEarly:false
        });
        try{
          var res = JSON.parse(JSON.stringify(data, function(a, b) {
            return typeof b === "string" ? b.toUpperCase() : b
          })); 
          const response = await api.post('/colaboradores/login', res ).then((rest:any) => {
            const request = rest.data;
            
            setUsuario({
              registro: request.registro,
              nome: request.nome,
              uo: request.uo.id,
              cargo: request.cargo.id,
              departamento: request.departamento.id,
            });

            const respAcesso = api.get(`/acessos/${request.cargo.id}`).then((req: any) => {
              const request = req.data;
              setAcesso(request);  
            })

            setLogin(true);
  

          }).catch((error: any) => {
            const msg = error.response.data.mensagem + " Status: " + error.response.status;
            toast.error("Erro de Login")
          })

        }catch(error: any){
          toast.error("Erro de Conexão: ERR_CONNECTION_REFUSED") 
        }        
      }catch(e){
        if(e instanceof Yup.ValidationError){
          const erro = getErrors(e);
          formRef.current?.setErrors(erro);
          return;
        }
      }
  }, [])


 



  
  
  
  return(
    <>
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      {login ? 
        <BrowserRouter>
          <Layout acesso={acesso}>  
            <Routes>    
              <Route path="/teste" element={<HomeTeste/>} />
              <Route path="/" element={<Home usuario={usuario} acesso={acesso}/>} />
              <Route path="/bus" element={<Bu usuario={usuario} acesso={acesso}/>} />
              <Route path="/bus/cadastro/" element={<CadastroBU usuario={usuario} acesso={acesso}/>} />
              <Route path="/bus/cadastro/:id" element={<CadastroBU usuario={usuario} acesso={acesso}/>} />
              <Route path="/areas" element={<Area usuario={usuario} acesso={acesso}/>} />
              <Route path="/areas/cadastro" element={<CadastroArea usuario={usuario} acesso={acesso}/>} />
              <Route path="/plantas" element={<Planta usuario={usuario} acesso={acesso}/>} />
              <Route path="/plantas/cadastro" element={<CadastroPlanta usuario={usuario} acesso={acesso}/>} />
              <Route path="/cargos" element={<Cargo usuario={usuario} acesso={acesso}/>} />
              <Route path="/cargos/cadastro" element={<CadastroCargo usuario={usuario} acesso={acesso}/>} />
              <Route path="/turnos" element={<Turno usuario={usuario} acesso={acesso}/>} />
              <Route path="/turnos/cadastro" element={<CadastroTurno usuario={usuario} acesso={acesso}/>} />
              <Route path="/especialidades" element={<Especialidade usuario={usuario} acesso={acesso}/>} />
              <Route path="/especialidades/cadastro" element={<CadastroEspecialidade usuario={usuario} acesso={acesso}/>} />
              <Route path="/uos" element={<Uo usuario={usuario} acesso={acesso}/>} />
              <Route path="/uos/cadastro" element={<CadastroUo usuario={usuario} acesso={acesso}/>} />
              <Route path="/linhas" element={<Linha usuario={usuario} acesso={acesso}/>} />
              <Route path="/linhas/cadastro" element={<CadastroLinha usuario={usuario} acesso={acesso}/>} />
              <Route path="/tecnologias" element={<Tecnologia usuario={usuario} acesso={acesso}/>} />
              <Route path="/tecnologias/cadastro" element={<CadastroTecnologia usuario={usuario} acesso={acesso}/>} />
              <Route path="/tiposequip" element={<TipoEquip usuario={usuario} acesso={acesso}/>} />
              <Route path="/tiposequip/cadastro" element={<CadastroTipo usuario={usuario} acesso={acesso}/>} />
              <Route path="/colaboradores" element={<Colaborador usuario={usuario} acesso={acesso}/>} />
              <Route path="/colaboradores/cadastro" element={<CadastroColaborador usuario={usuario} acesso={acesso}/>} />
            </Routes>
          </Layout>
        </BrowserRouter> 
      :
        <Container>
          <Form ref={formRef} className="formulario" onSubmit={logar}>
            <div className="registro">
              <label>Registro:</label>
              <InputDefalt name={"registro"} Main={true}/>
            </div>
            <div className="senha">
              <label>Senha:</label>
              <InputDefalt name={"senha"} Main={true}/>
            </div>
            <button className="botao" type="submit"><ButtonDefault>Login</ButtonDefault></button>
           
          </Form>
        </Container>
      }    
    </>
    
 
  );
}

export default AppRoutes