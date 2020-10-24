import React from 'react';
import ProTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className='my-3 p-4 text-center alert alert-primary'>{mensaje}</p>
     );
}
 
Error.proTypes = {
    mensaje: ProTypes.string.isRequired
}

export default Error;