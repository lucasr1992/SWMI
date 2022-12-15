import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleTecnologia';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';
import { number } from 'yup/lib/locale';
import { string } from 'yup';

type resposta ={
  id: number;
  tecnologia: string;
  status: string;
}

function Tecnologia(){
  const rote = useNavigate();
  const route = useNavigate();
  const [tecnologiaList, setTecnologiaList] = useState<resposta[]>([])
  const [idList, setIdList] = useState({
    id: 0,
    tecnologia: '',
  })
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadTecnologiaAtivo();
    TecnologiaCadastrada();
    LoginOn();
  }, [])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      route("/")
    }
  }

  function TecnologiaCadastrada(){
    const tecnologia = localStorage.getItem('@TECNOLOGIA')
    localStorage.removeItem('@TECNOLOGIA')
    if(tecnologia != null){
      toast.success('Turno ' + tecnologia + ' Cadastrado')
    }
  }

  const loadTecnologiaAtivo = async() => {
    try{
      const response = await api.get('/tecnologias/status/ATIVO').then((response) => {
        setTecnologiaList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadTecnologiaDesativado = async() => {
    try{
      const response = await api.get('/tecnologias/status/DESATIVADO').then((response) => {
        setTecnologiaList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(tecnologia: string, id: number){
    setComando('desativar')
    setIdList({
      id: id,
      tecnologia: tecnologia,
    })
    console.log(idList)
    setModalVisible(true)
  }


  function ativar(tecnologia: string, id: number){
    setComando('ativar')
    setIdList({
      id: id,
      tecnologia: tecnologia,
    })
    setModalVisible(true)
  }

  function Novo(){
    rote(`/tecnologias/cadastro`)
  }

  async function desativarTecnologia(){
    const response = await api.put(`/tecnologias/desativar/${idList.tecnologia}`).then(() => {
      toast.success("Tecnologia " + idList.tecnologia + " Desativado com Sucesso");
    })
    loadTecnologiaAtivo()
    setModalVisible(false)
  }

  async function ativarTecnologia(){
    const response = await api.put(`/tecnologias/ativar/${idList.tecnologia}`).then(() => {
      toast.success("Tecnologia " + idList.tecnologia + " Ativado com Sucesso");
    })
    loadTecnologiaAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarTecnologia()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarTecnologia()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Tecnologia</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadTecnologiaAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadTecnologiaAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadTecnologiaDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Tecnologia</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            tecnologiaList.map( tecnologiaList => (
              <tr key={tecnologiaList.id}>
                <th className='item-list' >{tecnologiaList.id}</th>
                <th className='item-list'>{tecnologiaList.tecnologia}</th>
                <th className='cmd'>{tecnologiaList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(tecnologiaList.tecnologia, tecnologiaList.id)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(tecnologiaList.tecnologia ,tecnologiaList.id)}/>}
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
export default Tecnologia;