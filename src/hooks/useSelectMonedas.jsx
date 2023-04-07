import styled from '@emotion/styled'
import React, { useState } from 'react'

const LabelSelect=styled.label`
    color: #FCFCFC;
    display: block;
    font-family: 'Lato',sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin: 15px 0;
`
const Select=styled.select`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    outline: none;
`
const useSelectMonedas = (label,opciones) => {
    const [state,setState]=useState('')

    const selectMoneda=()=>(
        <>
        <LabelSelect>{label}</LabelSelect>
        <Select
            value={state} 
            onChange={(e)=>setState(e.target.value)} 
        >
            <option value='' >Seleccione</option>
            {
                opciones.map((opcion)=>(
                    <option 
                        value={opcion.id} 
                        key={opcion.id}>

                            {opcion.nombre}
                    </option>
                ))
            }
        </Select>
        </>
    )

  return [state,selectMoneda]
}

export default useSelectMonedas