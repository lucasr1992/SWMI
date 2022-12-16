import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './stylePlanta';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';

type resposta ={
  id: number;
  planta: string;
  unidade:{
    nome: string;
  }; 
  pais:string;
  status: string;
}

type usuario ={
  acesso:any;
  usuario:any;
}

function Planta(user:usuario){
  const rote = useNavigate();
  const route = useNavigate();
  const [plantaList, setPlantaList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<number>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')
  const [planta, setPlanta] = useState()

  useEffect(() => {
    loadPlantaAtivo();
    PlantaCadastrada();
    LoginOn();
  }, [])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      route("/")
    }
  }


  function PlantaCadastrada(){
    const planta = localStorage.getItem('@PLANTA')
    localStorage.removeItem('@PLANTA')
    if(planta != null){
      toast.success('Planta ' + planta + ' Cadastrada')
    }
  }

  const loadPlantaAtivo = async() => {
    try{
      const response = await api.get('/plantas/status/ATIVO').then((response) => {
        console.log(response)
        setPlantaList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  const loadPlantaDesativado = async() => {
    try{
      const response = await api.get('/plantas/status/DESATIVADO').then((response) => {
        setPlantaList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  async function desativarPlanta(){
    const response = await api.put(`/plantas/desativar/${planta}`).then(() => {
      toast.success("Planta " + planta + " Desativado com Sucesso");
    })
    loadPlantaAtivo()
    setModalVisible(false)
  }

  async function ativarPlanta(){
    const response = await api.put(`/plantas/ativar/${planta}`).then(() => {
      toast.success("Planta " + planta + " Ativada com Sucesso");
    })
    loadPlantaAtivo()
    setModalVisible(false)
  }

  function ativar(planta: any){
    setComando('ativar')
    setIdList(planta.id)
    setPlanta(planta.planta)
    setModalVisible(true)
  }

  function desativar(planta: any){
    setComando('desativar')
    setIdList(planta.id)
    setPlanta(planta.planta)
    setModalVisible(true)
  }

  function Novo(){
    rote(`/plantas/cadastro`)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarPlanta()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarPlanta()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Planta</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadPlantaAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadPlantaAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadPlantaDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Planta</th>
            <th className='title-list'>BU</th>
            <th className='title-list'>Pais</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            plantaList.map( plantaList => (
              <tr key={plantaList.id}>
                <th className='item-list' >{plantaList.id}</th>
                <th className='item-list'>{plantaList.planta}</th>
                <th className='item-list'>{plantaList.unidade.nome}</th>
                <th className='item-list'>{plantaList.pais}</th>
                <th className='cmd'>{plantaList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(plantaList)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(plantaList)}/>}
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Content>
  )
}

export default Planta;