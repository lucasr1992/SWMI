import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/HideBar/LayoutSideBarHide/Layout";
import Navbar from "../components/Navbar/Header/Navbar";
import Home from "../pages/Home/Home";
import Bu from "../pages/Estrutura/BU/Bu";
import CadastroBU from "../pages/Estrutura/BU/CadastroBu";
import Area from "../pages/Estrutura/Area/Area";
import CadastroArea from "../pages/Estrutura/Area/CadastroArea";
import Planta from "../pages/Estrutura/Planta/Planta";
import CadastroPlanta from "../pages/Estrutura/Planta/PlantaCadastro";
import Cargo from "../pages/Estrutura/Cargo/Cargo";
import CadastroCargo from "../pages/Estrutura/Cargo/CadastroCargo";
import Turno from "../pages/Estrutura/Turno/Turno";
import CadastroTurno from "../pages/Estrutura/Turno/CadastroTurno";
import Especialidade from "../pages/Estrutura/Especialidade/Especialidade";
import CadastroEspecialidade from "../pages/Estrutura/Especialidade/CadastroEspecialidade";
import Uo from "../pages/Estrutura/UO/UO";
import CadastroUo from "../pages/Estrutura/UO/CadastroUo";
import Linha from "../pages/Estrutura/Linha/Linha";
import CadastroLinha from "../pages/Estrutura/Linha/CadastroLinha";
import Tecnologia from "../pages/Estrutura/Tecnologia/Tecnologia";
import CadastroTecnologia from "../pages/Estrutura/Tecnologia/CadastroTecnologia";
import TipoEquip from "../pages/Estrutura/TipoEquipamento/Tipo";
import CadastroTipo from "../pages/Estrutura/TipoEquipamento/CadastroTipo";

import HomeTesteTres from "../pages/A_teste/HomeTesteTres";
import HomeTeste from '../pages/A_teste/HomeTeste'
import HomeTesteQuatro from "../pages/A_teste/HomeTesteQuatro";
import { useState } from "react";



function AppRoutes(){
  const [login, setLogin] = useState(false);

  
  return(
  
    <BrowserRouter>
      <Layout >  
          <Routes>    
              <Route path="/teste" element={<HomeTeste />} />
              <Route path="/" element={<Home />} />
              <Route path="/bus" element={<Bu />} />
              <Route path="/bus/cadastro/" element={<CadastroBU />} />
              <Route path="/bus/cadastro/:id" element={<CadastroBU />} />
              <Route path="/areas" element={<Area />} />
              <Route path="/areas/cadastro" element={<CadastroArea />} />
              <Route path="/plantas" element={<Planta />} />
              <Route path="/plantas/cadastro" element={<CadastroPlanta />} />
              <Route path="/cargos" element={<Cargo />} />
              <Route path="/cargos/cadastro" element={<CadastroCargo />} />
              <Route path="/turnos" element={<Turno />} />
              <Route path="/turnos/cadastro" element={<CadastroTurno />} />
              <Route path="/especialidades" element={<Especialidade />} />
              <Route path="/especialidades/cadastro" element={<CadastroEspecialidade />} />
              <Route path="/uos" element={<Uo />} />
              <Route path="/uos/cadastro" element={<CadastroUo />} />
              <Route path="/linhas" element={<Linha />} />
              <Route path="/linhas/cadastro" element={<CadastroLinha />} />
              <Route path="/tecnologias" element={<Tecnologia />} />
              <Route path="/tecnologias/cadastro" element={<CadastroTecnologia />} />
              <Route path="/tiposequip" element={<TipoEquip />} />
              <Route path="/tiposequip/cadastro" element={<CadastroTipo />} />
          </Routes>
      </Layout>
    </BrowserRouter>
 
  );
}

export default AppRoutes