import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleUO';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';

type resposta ={
  id: number;
  uo: string;
  planta:{
    planta: string;
  };
  status: string;
}

function Uo(){
  const rote = useNavigate();
  const [uoList, setUoList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadUoAtivo();
    UoCadastrada();
  }, [])

  function UoCadastrada(){
    const uo = localStorage.getItem('@UO')
    localStorage.removeItem('@UO')
    if(uo != null){
      toast.success('UO ' + uo + ' Cadastrado')
    }
  }

  const loadUoAtivo = async() => {
    try{
      const response = await api.get('/uos/status/ATIVO').then((response) => {
        setUoList(response.data);  
        console.log(response.data);
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadUoDesativado = async() => {
    try{
      const response = await api.get('/uos/status/DESATIVADO').then((response) => {
        setUoList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(uo: string){
    setComando('desativar')
    setIdList(uo)
    setModalVisible(true)
  }


  function ativar(uo: string){
    setComando('ativar')
    setIdList(uo)
    setModalVisible(true)
  }

  function Novo(){
    rote(`/uos/cadastro`)
  }

  async function desativarUo(){
    const response = await api.put(`/uos/desativar/${idList}`).then(() => {
      toast.success("UO " + idList + " Desativado com Sucesso");
    })
    loadUoAtivo()
    setModalVisible(false)
  }

  async function ativarUo(){
    const response = await api.put(`/uos/ativar/${idList}`).then(() => {
      toast.success("Cargo " + idList + " Ativado com Sucesso");
    })
    loadUoAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarUo()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarUo()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>UO</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadUoAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadUoAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadUoDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>UO</th>
            <th className='title-list'>Planta</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            uoList.map( uoList => (
              <tr key={uoList.id}>
                <th className='item-list' >{uoList.id}</th>
                <th className='item-list'>{uoList.uo}</th>
                <th className='item-list'>{uoList.planta.planta}</th>
                <th className='cmd'>{uoList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(uoList.uo)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(uoList.uo)}/>}
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
export default Uo;