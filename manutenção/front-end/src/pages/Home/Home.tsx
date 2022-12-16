import { HtmlHTMLAttributes, useEffect, useState } from 'react';
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as faker from '@faker-js/faker'
import { Content } from './style'
import api from '../../service/api';
import { useNavigate } from 'react-router-dom';
import ButtonDefault from '../../components/Button/ButtonDefault';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );




interface PageProps extends HtmlHTMLAttributes<HTMLDivElement>{
  acesso:any
  usuario:any
}

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'BMZT-001',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Quebras',
        data: labels.map(() => faker.faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(151, 0, 0, 0.5)',
      },
      {
        label: 'Preventivas',
        data: labels.map(() => faker.faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(0, 59, 99, 0.5)',
      },
    ],
  };
  
  
  type props ={
    id: number;
    equipamento: string;
    parametro: string;
    valor: string;
  }

function Home( classe : PageProps ){
  const [areaList, setAreaList] = useState<props>()
  const rota = useNavigate();
  

  function mostrarAcess(){
    console.log(classe.acesso);
    console.log("Usuario ")
    console.log(classe.usuario)
  }

  // useEffect(() => {
  //   let intervalId:any
  //   try{
  //     intervalId = setInterval(() => {
  //       loadAreaAtivo();
  //     }, 1000)
      
  //   }catch(error:any){
  //     clearInterval(intervalId);
  //   }

  //   return () => {
  //     clearInterval(intervalId);
  //   }//limpar "matar o setInterval para não continuar rodando quando mudo de pagina"
  // },[])


 

  useEffect(() => {
    LoginOn();
  })

  function LoginOn(){
    const login = localStorage.getItem('@LOGIN')
    if(login === "LoginOn"){
      localStorage.removeItem('@LOGIN')
      rota("/")
    }
  }
  


  

  const loadAreaAtivo = async() => {    
      const response = await api.get('/esps/busca/1').then((response) => {
        setAreaList(response.data);  
      });
  }

  return(
    <Content className={classe.className}>
      {/* <h1>Dashboard Teste</h1>*/}
      
      {/* <Bar width={50} height={15} options={options} data={data} />  */}
      <button onClick={mostrarAcess}><ButtonDefault>Teste</ButtonDefault></button>
      {/* 
      <h1>Maquina: BMZT-001</h1>
      <h1>Parâmetro: Temperatura</h1>
      <h1>Valor: {areaList?.valor}</h1> */}


    </Content>
  );
}
export default Home;
