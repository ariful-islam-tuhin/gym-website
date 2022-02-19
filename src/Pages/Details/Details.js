import {React,  useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {

    const {UseServiceId} = useParams();
    const [UseService, setUseService] = useState([]);

 

    useEffect( () => {        
        fetch(`services/${UseServiceId}`)
          .then((res) => res.json())
          .then((data) => setUseService(data));
    },[])

 
    return (
        <div>
            <h2>coming soon {UseServiceId}</h2>
            <h1>{UseService.name}</h1>
            
        </div>
    );
};

export default Details;