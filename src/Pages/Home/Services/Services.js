
import useAuth from '../../../hooks/useAuth';
import Servicee from '../../Service/Servicee';



import './Services.css'

const Services = () => {

    const { services } = useAuth();

 
   
    return (
        <div className='service-div'>
            <div className='our-service'>
                <h1 >Our Service</h1>
                <p>Managing capital for institutions and private investors all over the world. Let investment professionals help you.</p>
            </div>
            <div className="services-container ">
                <div className='opacity row row-cols-1 row-cols-md-3 p-4 p-4  '>
                    {services.map((Service) => (
                        <Servicee Service={Service}></Servicee>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;