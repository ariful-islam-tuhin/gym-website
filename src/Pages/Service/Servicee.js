import React from 'react';

import './Service.css'
import { Link } from 'react-router-dom';



const Servicee = (props) => {
    const { name, para, id } = props.Service;

    
    return (
        <div className='use-service '>
          
            <h3>{name}</h3>
            <p>{para}/-</p>
            <Link to={`/servicee/${id}`}>
                <button className='button'>book-now</button>

            </Link>
        </div>
    );
};

export default Servicee;