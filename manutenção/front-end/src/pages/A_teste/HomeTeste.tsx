import React, { useRef } from 'react';
import { useCallback, useEffect, useState } from 'react';
import * as Yup from 'yup';

import api from '../../service/api';

import { Content } from './style'
import { FormHandles } from '@unform/core';
import getErrors from '../../utils/tratarErrosYup';
import Card from '../../components/card/Card'
import { CardComumEletricista } from '../../components/CardEletricista/Cards'


interface campoOcorrencia{
  id: number;
  planta: string;
  regiao: string;
  pais: string;
  status: string;
  teste:string;
};

interface selectValor{
  value:number,
  label:string,
}

interface TesteProp{
  teste:number;
}

export default function HomeTeste(){
  const [repositories, setRepositories] = useState([{value: 0, label: 'teste1'}])  
  const [plantaList, setPlantaList] = useState<campoOcorrencia[]>([])
  const [campos, setCampos] = useState<selectValor>();
  const formRef = useRef<FormHandles>(null);



  const handleSubmit = useCallback(async (data: TesteProp) => {
    console.log(data);
    try{
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        teste: Yup.string().required("É Necessario Informar o Nome de uma Area!"),
      });
      
      await schema.validate(data, {
        abortEarly: false
    }); 
      

      

    }catch(e){
      if (e instanceof Yup.ValidationError) {
        const erro = getErrors(e)
        formRef.current?.setErrors(erro);
        return;
      }
    }
  }, []);





  
  useEffect(() =>{
    loadPlantaAtiva()
  }, [])

  async function loadPlantaAtiva(){
    try{
      const resposta = await api.get('/plantas/status/ATIVO');
      setPlantaList(resposta.data)
      

    }catch(error:any){
      
    }
  }

  
  
  function bjt(){  
   const newList = plantaList.reduce((acc, cur) => {
      let obj = {
        value: cur.id,
        label: cur.planta
      }
      acc.push(obj)
      return acc
    }, [])
    console.log(newList)
  }

  function convert(){
    const newList = plantaList.map((item) => ({
        value: item.id,
        label: item.planta
    }))
    console.log(newList)
  }

  return(
    <Content>
      {/* <Form ref={formRef} onSubmit={handleSubmit}>
        

        <Sel options={itens} name={'teste'} Main={true} />
        <input></input>
        <button type='submit'>Versao</button>

      </Form> */}
      <CardComumEletricista/>
     
   

    </Content>
  )

}

const itens = [  
  {value: 1, label:"HORTOLANDIA"},
  {value: 2, label:"AMPARO"},
  {value: 3, label:"LAVRAS"},
  {value: 4, label:"MAUA"},
]
  




