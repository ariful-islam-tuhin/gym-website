import { React } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Detaisl.css";


const Details = () => {

    const { serviceeId } = useParams();
    const { services } = useAuth();



    const singleService = services?.find(
        (service) => service.id === parseInt(serviceeId)
    );

  


    return (
        <div className='details-div'>
            <h2>{singleService?.name}</h2>
            <p>{singleService?.para}</p>
        </div>
    );
};

export default Details;