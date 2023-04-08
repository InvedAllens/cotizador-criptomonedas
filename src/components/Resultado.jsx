import styled from '@emotion/styled'
import React from 'react'

const Contenedor=styled.div`
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-top: 30px;
`
const Texto=styled.p`
    font-size: 16px;
    span{
        font-weight: 700;
    }
`
const Precio=styled.p`
    font-size: 18px;
    font-weight: 700;
`
const Imagen=styled.img`
    display: block;
    width: 130px;
`
const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado
  return (
    <Contenedor>
        <Imagen
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt='imagen de la criptomoneda'
        
        />
        <div>
            <Precio>Precio Actual: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion en las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
        
    
    </Contenedor>
  )
}

export default Resultado