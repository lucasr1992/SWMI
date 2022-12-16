import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleEspecialidade';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';

type resposta ={
  id: number;
  especialidade: string;
  status: string;
}

type usuario ={
  acesso:any;
  usuario:any;
}

function Especialidade(user:usuario){
  const rote = useNavigate();
  const route = useNavigate();
  const [especialidadeList, setEspecialidadeList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    LoginOn();
    loadEspecialidadeAtivo();
    EspecialidadeCadastrada();
    
  }, [])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      route("/")
    }
  }

  function EspecialidadeCadastrada(){
    const especialidade = localStorage.getItem('@ESPECIALIDADE')
    localStorage.removeItem('@ESPECIALIDADE')
    if(especialidade != null){
      toast.success('Especialidade ' + especialidade + ' Cadastrada')
    }
  }

  const loadEspecialidadeAtivo = async() => {
    try{
      const response = await api.get('/especialidades/status/ATIVO').then((response) => {
        setEspecialidadeList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadEspecialidadeDesativado = async() => {
    try{
      const response = await api.get('/especialidades/status/DESATIVADO').then((response) => {
        setEspecialidadeList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(especialidade: string){
    setComando('desativar')
    setIdList(especialidade)
    setModalVisible(true)
  }


  function ativar(especialidade: string){
    setComando('ativar')
    setIdList(especialidade)
    setModalVisible(true)
  }

  function Novo(){
    rote(`/especialidades/cadastro`)
  }

  async function desativarEspecialidade(){
    const response = await api.put(`/especialidades/desativar/${idList}`).then(() => {
      toast.success("Especialidade " + idList + " Desativada com Sucesso");
    })
    loadEspecialidadeAtivo()
    setModalVisible(false)
  }

  async function ativarEspecialidade(){
    const response = await api.put(`/especialidades/ativar/${idList}`).then(() => {
      toast.success("Especialidade " + idList + " Ativada com Sucesso");
    })
    loadEspecialidadeAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarEspecialidade()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarEspecialidade()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Especialidades</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadEspecialidadeAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadEspecialidadeAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadEspecialidadeDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Especialidade</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            especialidadeList.map( especialidadeList => (
              <tr key={especialidadeList.id}>
                <th className='item-list' >{especialidadeList.id}</th>
                <th className='item-list'>{especialidadeList.especialidade}</th>
                <th className='cmd'>{especialidadeList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(especialidadeList.especialidade)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(especialidadeList.especialidade)}/>}
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
export default Especialidade;