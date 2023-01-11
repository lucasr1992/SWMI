import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../service/api';
import { Content } from './styleColaboradores';
import ButtonDefault from '../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../components/Modal/ModalAprovacao';

type resposta ={
  registro: string;
  nome: string;
  departamento:{
    departamento:string
  };
  status: string;
}

type usuario ={
  acesso:any;
  usuario:any;
}

function Colaborador(user:usuario){
  const rote = useNavigate();
  const [colaboradorList, setColaboradorList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')
  const [cadastro, setCadastro] = useState(false)
  const [edicao, setEdicao] = useState(false)
  

  useEffect(() => {
    loadColaboradorAtivo();
    acessoFunct();
    LoginOn(); 
  }, [user.acesso, user.usuario])

  function acessoFunct(){
    const edit = user.acesso.find((item:any) => item.pagina === "Colaborador")?.edicao;
    const add = user.acesso.find((item:any) => item.pagina === "Colaborador")?.cadastro;
    setCadastro(add)
    setEdicao(edit)
  }

  function Novo(){
    if(cadastro === true){
      rote(`/colaboradores/cadastro`)
    }else{
      toast.warn("Você Não Tem Permissão")
    }
  }

  
  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      rote("/")
    }
  }

  const loadColaboradorAtivo = async() => {
    try{
      const response = await api.get('/colaboradores/status/ATIVO').then((response) => {
        setColaboradorList(response.data);  
        console.log(response.data);
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadColaboradorDesativado = async() => {
    try{
      const response = await api.get('/colaboradores/status/DESATIVADO').then((response) => {
        setColaboradorList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  return(
    <Content >
      
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Colaboradores</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadColaboradorAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault>Novo</ButtonDefault></button>
          <button className='botao' onClick={loadColaboradorAtivo}><ButtonDefault>Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadColaboradorDesativado} ><ButtonDefault>Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>Registro</th>
            <th className='title-list'>Nome</th>
            <th className='title-list'>Departamento</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            colaboradorList.map( colaboradorList => (
              <tr key={colaboradorList.registro}>
                <th className='item-list' >{colaboradorList.registro}</th>
                <th className='item-list'>{colaboradorList.nome}</th>
                <th className='item-list'>{colaboradorList.departamento.departamento}</th>
                  <th className='cmd'>
                    <FaIcons.FaPencilAlt/>
                  </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Content>
  );
};


//#dddada
export default Colaborador;