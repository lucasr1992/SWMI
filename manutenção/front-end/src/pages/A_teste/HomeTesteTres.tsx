import React, { useRef } from 'react';
import { useCallback, useEffect, useState } from 'react';
import * as Yup from 'yup';

import api from '../../service/api';

import { Content } from './style'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getErrors from '../../utils/tratarErrosYup';
import Sel from '../../components/Select/SelectDefault';



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

export default function HomeTesteTres(){
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

  function teste(path: any){
    console.log(path)
  }

  function alerta(){
    alert("teste")
  }

  return(
    <Content>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Teste 3</h1>

                
       <Sel name={'teste'} Main={true} options={itens} />
        <button type='submit'>Versao</button>

        <button onClick={() => teste("teste")}>Teste de ação</button>
      


      </Form>
    </Content>
  )

}

const itens = [  
  {value: 1, label:"HORTOLANDIA"},
  {value: 2, label:"AMPARO"},
  {value: 3, label:"LAVRAS"},
  {value: 4, label:"MAUA"},
]
  




