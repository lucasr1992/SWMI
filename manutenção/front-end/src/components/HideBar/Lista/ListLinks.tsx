import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as GiIcons from 'react-icons/gi'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
  {
    
    id: 0,
    title: 'Home',  
    path: '/',
    icon: <AiIcons.AiFillHome />,
    notificatio: 0,
    tituloVisible: 1,
  },

  {
    id: 1,
    title: 'Registros',
    path: null,
    icon: <TbIcons.TbDatabaseImport />,
    notificatio: 0,
    tituloVisible: true,
    subNav: [
      {
        title: 'Maquinas',
        path: null,
        icon: <GiIcons.GiWashingMachine />,
        subTituloVisible: true,
        subDropdown:[
          {
            title: 'Registro Maq.',
            path: null,
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Classificação Maq.',
            path: null,
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },
        ]
      },

      {
        title: 'Colaborador',
        path: null,
        icon: <BsIcons.BsFillPeopleFill />,
        notificatio: 0,
        subTituloVisible: true,
      },

      {
        title: 'Estrutura',
        path: null,
        icon: <GiIcons.GiFactory />,
        subTituloVisible: true,
        subDropdown:[
          
          {
            title: 'BU',
            path: '/bus',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },
      
          {
            title: 'Planta',
            path: '/plantas',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'UO',
            path: '/uos',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Area',
            path: '/areas',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Linha',
            path: '/linhas',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Tecnologia',
            path: '/tecnologias',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Tipo Equip.',
            path: '/tiposequip',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Especialidade',
            path: '/especialidades',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Cargo',
            path: '/cargos',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },

          {
            title: 'Turno',
            path: '/turnos',
            icon: <GiIcons.GiFactory />,
            subDropVisible:true,
          },
          
        ]
      },
      
    ]
  },


  


  {
    id: 2,
    title: 'Support',
    path: '/teste',
    icon: <IoIcons.IoMdHelpCircle />,
    notificatio: 0,
    tituloVisible: true,
  }
];
