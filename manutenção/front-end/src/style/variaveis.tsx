import styled, { css } from 'styled-components';

export const v = {
  sidebarWidth: '300px',
  smSpacing: '8px',
  mdSpacing: '16px',
  lgSpacing: '24px',
  xlSpacing: '32px',
  xxlSpacing: '48px',
  borderRadius: '6px',

  // thema claro
  bg: "rgb(255,255,255)",
  bgAlpha: "rgba(255,255,255,.3)",
  bg2: "rgb(245, 245, 245)",
  bg3: "rgb(230,230,230)",
  text: "rgb(45,45,45)",
  primary:"rgb(52, 131, 235)",

  //thema dark

  bgD: "rgb(15,15,15)",
  bgAlphaD: "rgba(0, 0, 0,.3)",
  bg2D: "rgb(30, 30, 30)",
  bg3D: "rgb(50, 50, 50)",
  textD: "rgb(210, 210, 210)",
  primaryD: "rgb(52, 131, 235)",

  laranja: '#ff9000',

};

export const btnReset = css `
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;
