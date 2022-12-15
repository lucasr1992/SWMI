import {  useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai'
import {  useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../../service/api';
import { Content } from './styleTurno';
import ButtonDefault from '../../../components/Button/ButtonDefault';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';
import { number } from 'yup/lib/locale';
import { string } from 'yup';

type resposta ={
  id: number;
  turno: string;
  status: string;
}

function Turno(){
  const rote = useNavigate();
  const [turnoList, setTurnoList] = useState<resposta[]>([])
  const [idList, setIdList] = useState({
    id: 0,
    turno: '',
  })
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadTurnoAtivo();
    TurnoCadastrada();
    LoginOn();
  }, [])

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      rote("/")
    }
  }

  function TurnoCadastrada(){
    const turno = localStorage.getItem('@TURNO')
    localStorage.removeItem('@TURNO')
    if(turno != null){
      toast.success('Turno ' + turno + ' Cadastrado')
    }
  }

  const loadTurnoAtivo = async() => {
    try{
      const response = await api.get('/turnos/status/ATIVO').then((response) => {
        setTurnoList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }


  const loadTurnoDesativado = async() => {
    try{
      const response = await api.get('/turnos/status/DESATIVADO').then((response) => {
        setTurnoList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(turno: string, id: number){
    setComando('desativar')
    setIdList({
      id: id,
      turno: turno,
    })
    setModalVisible(true)
  }


  function ativar(turno: string, id: number){
    setComando('ativar')
    setIdList({
      id: id,
      turno: turno,
    })
    setModalVisible(true)
  }

  function Novo(){
    rote(`/turnos/cadastro`)
  }

  async function desativarTurno(){
    const response = await api.put(`/turnos/desativar/${idList.turno}`).then(() => {
      toast.success("Turno " + idList.turno + " Desativado com Sucesso");
    })
    loadTurnoAtivo()
    setModalVisible(false)
  }

  async function ativarTurno(){
    const response = await api.put(`/turnos/ativar/${idList.turno}`).then(() => {
      toast.success("Turno " + idList.turno + " Ativado com Sucesso");
    })
    loadTurnoAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarTurno()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarTurno()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Turnos</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadTurnoAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault   >Novo</ButtonDefault></button>
          <button className='botao' onClick={loadTurnoAtivo}><ButtonDefault   >Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadTurnoDesativado} ><ButtonDefault   >Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Turno</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            turnoList.map( turnoList => (
              <tr key={turnoList.id}>
                <th className='item-list' >{turnoList.id}</th>
                <th className='item-list'>{turnoList.turno}</th>
                <th className='cmd'>{turnoList.status === 'ATIVO' ? <MdDeleteForever onClick={() => desativar(turnoList.turno, turnoList.id)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(turnoList.turno ,turnoList.id)}/>}
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
export default Turno;