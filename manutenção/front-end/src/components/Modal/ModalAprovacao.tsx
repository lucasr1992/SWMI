
import { Content, BodyModal } from './style'
import * as CgIcons from 'react-icons/cg'
import ButtonDefault from '../Button/ButtonDefault';

function ModalDefaultAprovacao({children, onClose = () => {}, id = 'modal', yes = () => {}, no = () => {}} : any){
  const handleOutside = (e: any) => {
    if(e.target.id === id) onClose();
  };


  return(
    <Content id={id} onClick={handleOutside}>
      <BodyModal>
        <div className='btn-close'>
          <CgIcons.CgCloseR onClick={onClose} />
        </div>

        <div className='texto'>
          <h1>{children}</h1>
        </div>
        <div className='botoes' >
          <div className='sim' onClick={yes}><ButtonDefault onClick={yes}>Sim</ButtonDefault></div>
          <div className='nao' onClick={no}><ButtonDefault onClick={no} backColor={'#005586'}>Não</ButtonDefault></div>
        </div>
      </BodyModal>
    </Content>
  )
}

export default ModalDefaultAprovacao;