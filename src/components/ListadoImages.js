import React from 'react';
import Imagen from './Imagen';
import ProTypes from 'prop-types';

const ListadoImagenes = ({imagenes}) => {
    return ( 
        <div className='col-12 p-5 row'>
            {imagenes.map( imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}
 

ListadoImagenes.proTypes = {
    imagenes: ProTypes.array.isRequired
}

export default ListadoImagenes;