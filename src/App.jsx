import styled from '@emotion/styled'
import imagenCriptos from './img/imagen-criptos.png'
import Formulario from './components/Formulario'


function App() {

  const Heading=styled.h1`
    font-family:'Lato',sans-serif;
    color:#FCFCFC;
    font-size:30px;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;
    &::after{
      content: '';
      width: 100px;
      height: 6px;
      background-color: #EB455F;
      display: block;
      margin:10px auto ;
    }
  `
  const Contenedor=styled.div`
    max-width: 900px;
    margin:0 auto;
    width:90%;
    @media screen and (min-width:992px){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    }
  `
  const Imagen=styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
    border: 1px solid #EB455F;
    border-radius: 10px;
    box-shadow:2px 2px 10px 3px #eb455eda;
    padding: 40px;
  `
  return (
    <>
    <Contenedor>
      <Imagen 
        src={imagenCriptos} 
        alt="Imagen de criptomonedas" 
      />
      <div>
        <Heading>Cotizador de Criptomonedas</Heading>
        <Formulario/>
      </div>
    </Contenedor>
    
    </>
  )
}

export default App
