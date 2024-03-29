import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleBu';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';

type resposta ={
  id: number;
  business: string;
  nome: string;
  status: string;
}

function Bu(){
  const rote = useNavigate();
  const [buList, setBuList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadBuAtivo();
    BuCadastrada();
  }, [])

  function BuCadastrada(){
    const bu = localStorage.getItem('@BU')
    localStorage.removeItem('@BU')
    if(bu != null){
      toast.success('Unidade de Negócio ' + bu + ' Cadastrada')
    }
  }

  const loadBuAtivo = async() => {
    try{
      const response = await api.get('/unidades/status/ATIVO').then((response) => {
        setBuList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadBuDesativado = async() => {
    try{
      const response = await api.get('/unidades/status/DESATIVADO').then((response) => {
        setBuList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(bu: string){
    setComando('desativar')
    setIdList(bu)
    setModalVisible(true)
  }


  function ativar(bu: string){
    setComando('ativar')
    setIdList(bu)
    setModalVisible(true)
  }

  function Novo(){
    rote(`/bus/cadastro`)
  }

  async function desativarBu(){
    const response = await api.put(`/unidades/desativar/${idList}`).then(() => {
      toast.success("Unidade de Negócio " + idList + " Desativado com Sucesso");
    })
    loadBuAtivo()
    setModalVisible(false)
  }

  async function ativarBu(){
    const response = await api.put(`/unidades/ativar/${idList}`).then(() => {
      toast.success("Unidade de Negócio " + idList + " Ativada com Sucesso");
    })
    loadBuAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarBu()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarBu()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Business Unit</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadBuAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadBuAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadBuDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Simbol.</th>
            <th className='title-list'>Nome</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            buList.map( buList => (
              <tr key={buList.id}>
                <th className='item-list' >{buList.id}</th>
                <th className='item-list'>{buList.business}</th>
                <th className='item-list'>{buList.nome}</th>
                <th className='cmd'>{buList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(buList.business)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(buList.business)}/>}
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
export default Bu;