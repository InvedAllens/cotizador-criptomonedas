import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

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
    margin-top: 20px;

    &:hover{
        filter:brightness(120%);
        cursor: pointer;
        box-shadow:1px 1px 10px 2px #eb455eda;

    }

`

const Formulario = ({monedasApp,setMonedasApp}) => {
    const [criptos,setCriptos]=useState([])
    const [error,setError]=useState(false)
    useEffect(()=>{
        const cargarCriptos=async()=>{
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const extraer= await fetch(url)
            const respuesta= await extraer.json()
            const criptomonedas=respuesta.Data.map( criptomoneda=>{
                const objeto={
                    id:criptomoneda.CoinInfo.Name,
                    nombre:criptomoneda.CoinInfo.FullName
                }  
                return objeto
                
            })
            setCriptos(criptomonedas)
        }
        cargarCriptos()
    },[])

    const [moneda,SelectMoneda]=useSelectMonedas("Selecciona tu moneda",monedas)
    const [criptomoneda,SelectCriptomoneda]=useSelectMonedas("Selecciona tu Criptomoneda",criptos)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if([moneda,criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        const monedasForm={
            moneda,
            criptomoneda

        }
        setMonedasApp(monedasForm)  
    }
  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>}
    <form 
        onSubmit={handleSubmit}
    >
        <SelectMoneda/>
        <SelectCriptomoneda/>
        
        <InputSubmit 
            type='submit'
            value={'Cotizar'}
        />
    </form>
    </>
    
  )
}

export default Formulario