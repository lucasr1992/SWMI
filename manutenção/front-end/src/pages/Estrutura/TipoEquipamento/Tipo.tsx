import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleTipo';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';
import { number } from 'yup/lib/locale';
import { string } from 'yup';

type resposta ={
  id: number;
  tipoequipamento: string;
  status: string;
}

type usuario ={
  acesso:any;
  usuario:any;
}

function TipoEquip(user:usuario){
  const rote = useNavigate();
  const route = useNavigate();
  const [tipoList, setTipoList] = useState<resposta[]>([])
  const [idList, setIdList] = useState({
    id: 0,
    tipoequipamento: '',
  })
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadTipoAtivo();
    TipoCadastrada();
    LoginOn();
  }, [])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      route("/")
    }
  }

  function TipoCadastrada(){
    const tipo = localStorage.getItem('@TIPOEQUIPAMENTO')
    localStorage.removeItem('@TIPOEQUIPAMENTO')
    if(tipo != null){
      toast.success('Tipo de Equipamento ' + tipo + ' Cadastrado')
    }
  }

  const loadTipoAtivo = async() => {
    try{
      const response = await api.get('/tiposequip/status/ATIVO').then((response) => {
        setTipoList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadTipoDesativado = async() => {
    try{
      const response = await api.get('/tiposequip/status/DESATIVADO').then((response) => {
        setTipoList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(tipo: string, id: number){
    setComando('desativar')
    setIdList({
      id: id,
      tipoequipamento: tipo,
    })
    setModalVisible(true)
  }


  function ativar(tipo: string, id: number){
    setComando('ativar')
    setIdList({
      id: id,
      tipoequipamento: tipo,
    })
    setModalVisible(true)
  }

  function Novo(){
    rote(`/tiposequip/cadastro`)
  }

  async function desativarTipo(){
    const response = await api.put(`/tiposequip/desativar/${idList.tipoequipamento}`).then(() => {
      toast.success("Tipo de Equipamento " + idList.tipoequipamento + " Desativado com Sucesso");
    })
    loadTipoAtivo()
    setModalVisible(false)
  }

  async function ativarTipo(){
    const response = await api.put(`/tiposequip/ativar/${idList.tipoequipamento}`).then(() => {
      toast.success("Tipo de Equipamento " + idList.tipoequipamento + " Ativado com Sucesso");
    })
    loadTipoAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarTipo()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarTipo()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Tipo de Equipamento</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadTipoAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadTipoAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadTipoDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Tipo de Equip.</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            tipoList.map( tipoList => (
              <tr key={tipoList.id}>
                <th className='item-list' >{tipoList.id}</th>
                <th className='item-list'>{tipoList.tipoequipamento}</th>
                <th className='cmd'>{tipoList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(tipoList.tipoequipamento, tipoList.id)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(tipoList.tipoequipamento ,tipoList.id)}/>}
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
export default TipoEquip;