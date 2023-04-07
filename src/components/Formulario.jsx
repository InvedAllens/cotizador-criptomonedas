import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit=styled.input`
    background-color: #EB455F;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fcfcfc;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition:all 0.3s ease;
    margin-top: 30px;

    &:hover{
        filter:brightness(120%);
        cursor: pointer;
        box-shadow:1px 1px 10px 2px #eb455eda;

    }

`

const Formulario = () => {
    useEffect(()=>{
        const cargarCriptos=async()=>{
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const extraer= await fetch(url)
            const respuesta= await extraer.json()
            console.log(respuesta.Data)
        }
        cargarCriptos()
    },[])
    const [moneda,SelectMoneda]=useSelectMonedas("Selecciona tu moneda",monedas)
  return (
    <form>
        <SelectMoneda/>
        
        <InputSubmit 
            type='submit'
            value={'Cotizar'}
        />
    </form>
  )
}

export default Formulario