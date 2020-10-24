import React, { useState,useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImages from './components/ListadoImages';

function App() {

  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas ] = useState(1);



  useEffect( () => {
    const consultarAPI = async () => {
      if(busqueda === '') return;

      const ImagenesPorPagina = 30;
      const key = '17878953-dd32d1573ced6d74a8b32f90f';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=
      ${ImagenesPorPagina}&page=${paginaactual}`
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarImagenes(resultado.hits);

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / ImagenesPorPagina );
      guardarTotalPaginas(calcularTotalPaginas);

      // mover la ppantall hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
  
    }

    consultarAPI()

  },[busqueda,paginaactual])

  // Definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1 ;

    if(nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual); 
  }

  // Definir la pagina Siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1 ;

    if(nuevaPaginaActual > totalpaginas) return;
    guardarPaginaActual(nuevaPaginaActual); 
  }

  return (
    <div className='container'>
        <div className ='jumbotron'>
          <p className='lead text-center'>Buscador de Imagenes</p>

          <Formulario 
            guardarBusqueda={guardarBusqueda}
          />
        </div>

        <div className='row justify-content-center'>
          <ListadoImages 
            imagenes={imagenes}
          />

          {(paginaactual === 1 )? null : (
            <button 
              type='button'
              className='bbtn btn-info mr-1'
              onClick={paginaAnterior}
            >
              &laquo; Anterior 
            </button>
          )}

          {(paginaactual === totalpaginas ) ? null : (
            <button 
              type='button'
              className='bbtn btn-info'
              onClick={paginaSiguiente}
            >
              Siguiente &raquo;
            </button>
          )}
        </div>
    </div>
  );
}

export default App;
