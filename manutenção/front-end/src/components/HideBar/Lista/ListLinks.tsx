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
    visible: 0,
  },

  {
    id: 1,
    title: 'Registros',
    path: null,
    icon: <TbIcons.TbDatabaseImport />,
    notificatio: 0,
    visible: 0,
    subNav: [
      {
        title: 'Maquinas',
        path: null,
        icon: <GiIcons.GiWashingMachine />,
        visible: 0,
        subDropdown:[
          {
            title: 'Registro Maq.',
            path: null,
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Classificação Maq.',
            path: null,
            icon: <GiIcons.GiFactory />,
          },
        ]
      },

      {
        title: 'Colaborador',
        path: null,
        icon: <BsIcons.BsFillPeopleFill />,
        notificatio: 0,
        visible: 0,
      },

      {
        title: 'Estrutura',
        path: null,
        icon: <GiIcons.GiFactory />,
        visible: true,
        subDropdown:[
          
          {
            title: 'BU',
            path: '/bus',
            icon: <GiIcons.GiFactory />,
          },
      
          {
            title: 'Planta',
            path: '/plantas',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'UO',
            path: '/uos',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Area',
            path: '/areas',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Linha',
            path: '/linhas',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Tecnologia',
            path: '/tecnologias',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Tipo Equip.',
            path: '/tiposequip',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Especialidade',
            path: '/especialidades',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Cargo',
            path: '/cargos',
            icon: <GiIcons.GiFactory />,
          },

          {
            title: 'Turno',
            path: '/turnos',
            icon: <GiIcons.GiFactory />,
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
    visible: 0,
  }
];
