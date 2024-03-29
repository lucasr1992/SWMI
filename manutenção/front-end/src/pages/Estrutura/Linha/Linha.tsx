import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleLinha';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';

type resposta ={
  id: number;
  linha: string;
  area:{
    area: string;
  };
  status: string;
}

function Linha(){
  const rote = useNavigate();
  const [linhaList, setLinhaList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadLinhaAtivo();
    LinhaCadastrada();
  }, [])

  function LinhaCadastrada(){
    const uo = localStorage.getItem('@LINHA')
    localStorage.removeItem('@LINHA')
    if(uo != null){
      toast.success('Linha ' + uo + ' Cadastrada')
    }
  }

  const loadLinhaAtivo = async() => {
    try{
      const response = await api.get('/linhas/status/ATIVO').then((response) => {
        setLinhaList(response.data);  
        console.log(response.data);
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadLinhaDesativado = async() => {
    try{
      const response = await api.get('/linhas/status/DESATIVADO').then((response) => {
        setLinhaList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(linha: string){
    setComando('desativar')
    setIdList(linha)
    setModalVisible(true)
  }


  function ativar(linha: string){
    setComando('ativar')
    setIdList(linha)
    setModalVisible(true)
  }

  function Novo(){
    rote(`/linhas/cadastro`)
  }

  async function desativarLinha(){
    const response = await api.put(`/linhas/desativar/${idList}`).then(() => {
      toast.success("Linha " + idList + " Desativada com Sucesso");
    })
    loadLinhaAtivo()
    setModalVisible(false)
  }

  async function ativarLinha(){
    const response = await api.put(`/linhas/ativar/${idList}`).then(() => {
      toast.success("Linha " + idList + " Ativada com Sucesso");
    })
    loadLinhaAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarLinha()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarLinha()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Linha</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadLinhaAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadLinhaAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadLinhaDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Linha</th>
            <th className='title-list'>Area</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            linhaList.map( linhaList => (
              <tr key={linhaList.id}>
                <th className='item-list' >{linhaList.id}</th>
                <th className='item-list'>{linhaList.linha}</th>
                <th className='item-list'>{linhaList.area.area}</th>
                <th className='cmd'>{linhaList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(linhaList.linha)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(linhaList.linha)}/>}
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
export default Linha;