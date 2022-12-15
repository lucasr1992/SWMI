import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleCargo';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';

type resposta ={
  id: number;
  cargo: string;
  status: string;
}

function Cargo(){
  const rote = useNavigate();
  const [cargoList, setCargoList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadCargoAtivo();
    CargoCadastrada();
    LoginOn;
  }, [])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      rote("/")
    }
  }

  function CargoCadastrada(){
    const cargo = localStorage.getItem('@CARGO')
    localStorage.removeItem('@CARGO')
    if(cargo != null){
      toast.success('Cargo ' + cargo + ' Cadastrado')
    }
  }

  const loadCargoAtivo = async() => {
    try{
      const response = await api.get('/cargos/status/ATIVO').then((response) => {
        setCargoList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadCargoDesativado = async() => {
    try{
      const response = await api.get('/cargos/status/DESATIVADO').then((response) => {
        setCargoList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(cargo: string){
    setComando('desativar')
    setIdList(cargo)
    setModalVisible(true)
  }


  function ativar(cargo: string){
    setComando('ativar')
    setIdList(cargo)
    setModalVisible(true)
  }

  function Novo(){
    rote(`/cargos/cadastro`)
  }

  async function desativarCargo(){
    const response = await api.put(`/cargos/desativar/${idList}`).then(() => {
      toast.success("Cargo " + idList + " Desativado com Sucesso");
    })
    loadCargoAtivo()
    setModalVisible(false)
  }

  async function ativarCargo(){
    const response = await api.put(`/cargos/ativar/${idList}`).then(() => {
      toast.success("Cargo " + idList + " Ativado com Sucesso");
    })
    loadCargoAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarCargo()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarCargo()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Cargo</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadCargoAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadCargoAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadCargoDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Cargo</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            cargoList.map( cargoList => (
              <tr key={cargoList.id}>
                <th className='item-list' >{cargoList.id}</th>
                <th className='item-list'>{cargoList.cargo}</th>
                <th className='cmd'>{cargoList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(cargoList.cargo)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(cargoList.cargo)}/>}
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
export default Cargo;