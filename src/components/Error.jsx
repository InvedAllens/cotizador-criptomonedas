import styled from '@emotion/styled'
import React from 'react'
const Texto=styled.div`
    background-color: #6D5D6E;
    color: #fcfcfc;
    padding: 15px;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    text-align: center;
    transition: all 1s ease-in-out;
`
const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error