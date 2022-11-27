
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { Content } from './styleArea'
import ButtonDefault from '../../../components/Button/ButtonDefault';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../../service/api';
import { useNavigate } from 'react-router-dom';
import ModalDefaultAprovacao from '../../../components/Modal/ModalAprovacao';


type resposta ={
  id: number;
  area: string;
  centroCusto: string;
  uo: {
    uo: string;
  };
  status: string;
}

function Area(){
  const rote = useNavigate();
  const [areaList, setAreaList] = useState<resposta[]>([])
  const [idList, setIdList] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);
  const [comando, setComando] = useState('desativar')

  useEffect(() => {
    loadAreaAtivo();
    AreaCadastrada();
  }, [])

  function AreaCadastrada(){
    
    const area = localStorage.getItem('@AREA')
    localStorage.removeItem('@AREA')
    if(area != null){
      toast.success('Area ' + area + ' Cadastrada')
    }
  }

  const loadAreaAtivo = async() => {
    try{
      const response = await api.get('/areas/status/ATIVO').then((response) => {
        setAreaList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  const loadAreaDesativado = async() => {
    try{
      const response = await api.get('/areas/status/DESATIVADO').then((response) => {
        setAreaList(response.data);  
      });
    }catch(error:any){
      toast.error("Falha na Conexão")
    }
  }

  function desativar(area: string){
    setComando('desativar')
    setIdList(area)
    setModalVisible(true)
  }


  function ativar(area: string){
    setComando('ativar')
    setIdList(area)
    setModalVisible(true)
  }

  function Novo(){
    rote(`/areas/cadastro`)
  }

  async function desativarArea(){
    const response = await api.put(`/areas/desativar/${idList}`).then(() => {
      toast.success("Area " + idList + " Desativado com Sucesso");
    })
    loadAreaAtivo()
    setModalVisible(false)
  }

  async function ativarBu(){
    const response = await api.put(`/areas/ativar/${idList}`).then(() => {
      toast.success("Area " + idList + " Ativada com Sucesso");
    })
    loadAreaAtivo()
    setModalVisible(false)
  }

  return(
    <Content >
      {modalVisible ? 
          (comando==='desativar' ? 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => desativarArea()} no={() => setModalVisible(false)}>Gostaria de Desativar este item?</ModalDefaultAprovacao> 
            : 
            <ModalDefaultAprovacao onClose={() => setModalVisible(false)}
            yes={() => ativarBu()} no={() => setModalVisible(false)}>Gostaria de Ativar este item?</ModalDefaultAprovacao>
          ) 
      : null}
      <ToastContainer closeOnClick={true} theme={'colored'} autoClose={2000}  pauseOnHover={true} closeButton={false}/>
      <div className='titulo'>
        <h1 className='title'>Area</h1>
        <div className='btn-lista'>
          <AiIcons.AiOutlineReload onClick={loadAreaAtivo}/>
          <button className='botao' onClick={Novo}><ButtonDefault>Novo</ButtonDefault></button>
          <button className='botao' onClick={loadAreaAtivo}><ButtonDefault>Ativos</ButtonDefault></button>
          <button className='botao' onClick={loadAreaDesativado} ><ButtonDefault>Desativados</ButtonDefault></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='title-list'>ID</th>
            <th className='title-list'>Area</th>
            <th className='title-list'>Centro Custo</th>
            <th className='title-list'>Comando</th>
          </tr>
        </thead>
        <tbody>
          {
            areaList.map( areaList => (
              <tr key={areaList.id}>
                <th className='item-list' >{areaList.id}</th>
                <th className='item-list'>{areaList.area}</th>
                <th className='item-list'>{areaList.centroCusto}</th>
                <th className='cmd'>{areaList.status === 'ATIVO' ? <MdIcons.MdDeleteForever onClick={() => desativar(areaList.area)}/> : 
                  <AiIcons.AiFillCheckSquare onClick={() => ativar(areaList.area)}/>}
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Content>
  );
}
export default Area;
