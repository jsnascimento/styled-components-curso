import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background-color: #4287f5;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
width: 100%;
height: 60px;
`

const Item = styled.a `
font-size: 14px;
font-family: 'Read';
font-weight: bold;
color: #fff;
`

export default function header() {
  return(
      <Nav>
          <Item>Home</Item>
          <Item>Sobre</Item>
          <Item>Contato</Item>
      </Nav>
  );
}
