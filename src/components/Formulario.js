import React, { useState } from 'react';
import Error from  './Error';
import ProTypes from 'prop-types';

const Formulario = ({guardarBusqueda}) => {

    const [ termino, guardarTermino ] = useState('');
    const [ error, guardarError ] = useState(false);


    const buscarImagenes = e =>{
        e.preventDefault();

        // validar
        if(termino.trim() === ''){
            guardarError(true);
            return
        }
        guardarError(false);

        // Enviar eltermino de busqueda hacia el componente principal
        guardarBusqueda(termino)
    }


    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className='row'>
                <div className='form-gruop col-md-8'>
                    <input 
                        type='text'
                        className='form-control form=control-lg'
                        placeholder='Buscar una image, ejemplo: futbol o cafe'
                        onChange={e => guardarTermino(e.target.value)}
                    
                    />
                </div>
                <div className='form-gruop col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                    
                    />
                </div>
            </div>

            { error ? <Error mensaje='Agrega un termino de busqueda' />: null }
        </form>
     );
}
 
Formulario.proTypes = {
    guardarBusqueda: ProTypes.func.isRequired
}

export default Formulario;