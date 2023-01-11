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


type usuario ={
  acesso:any;
  usuario:any;
}

function Uo(user:usuario){
  const rote = useNavigate();
  const route = useNavigate();
  const [uoList, setUoList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')
  const [cadastro, setCadastro] = useState(false)
  const [edicao, setEdicao] = useState(false)

  useEffect(() => {
    loadUoAtivo();
    UoCadastrada();
    acessoFunct();
    LoginOn();
  }, [user.acesso, user.usuario])

  function acessoFunct(){
    const edit = user.acesso.find((item:any) => item.pagina === "Registros")?.edicao;
    const add = user.acesso.find((item:any) => item.pagina === "Registros")?.cadastro;
    setCadastro(add)
    setEdicao(edit)
  }

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      route("/")
    }
  }

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
    if(edicao === true){
      setComando('desativar')
      setIdList(uo)
      setModalVisible(true)
    }else{
      toast.warn("Você Não Tem Permissão")
    }
  }


  function ativar(uo: string){
    if(edicao === true){
      setComando('ativar')
      setIdList(uo)
      setModalVisible(true)
    }else{
      toast.warn("Você Não Tem Permissão")
    }
  }

  function Novo(){
    if(cadastro === true){
      rote(`/uos/cadastro`)
    }else{
      toast.warn("Você Não Tem Permissão")
    }
  }

  async function desativarUo(){
    const response = await api.put(`/uos/desativar/${idList}`).then(() => {
      toast.success("UO " + idList + " Desativado com Sucesso");
    })
    loadUoAtivo()
    setModalVisible(false)
  }

  async function ativarUo(){
    if(edicao === true){
      const response = await api.put(`/uos/ativar/${idList}`).then(() => {
        toast.success("Cargo " + idList + " Ativado com Sucesso");
      })
      loadUoAtivo()
      setModalVisible(false)
    }else{
      toast.warn("Você Não Tem Permissão")
    }
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