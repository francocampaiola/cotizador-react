import React from 'react'
import styled from '@emotion/styled';

const contenedorHeader = styled.header`
  background-color: #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: #FFFFFF;
`

const Header = ({titulo}) => {
  return (
      <header>
          <h1>{titulo}</h1>
      </header>
  )
}

export default Header;