import GlobalStyle from './style/globalstyle'; 
import AppRoutes from './routes/routes';
import { MainPage } from './style/style' 


function App() {

  return (
    <MainPage>
      
      <AppRoutes/>
      <GlobalStyle/>
    </MainPage>
  )
}

export default App
