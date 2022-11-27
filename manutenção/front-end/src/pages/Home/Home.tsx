import { HtmlHTMLAttributes } from 'react';
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as faker from '@faker-js/faker'
import { Content } from './style'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );




interface PageProps extends HtmlHTMLAttributes<HTMLDivElement>{
  
}

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Grafico de Teste 1',
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
  
  

function Home(classe : PageProps){

  return(
    <Content className={classe.className}>
      <h1>Dashboard Teste</h1>
      
      <Bar width={100} height={50} options={options} data={data} />
    </Content>
  );
}
export default Home;
