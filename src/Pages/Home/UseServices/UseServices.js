
import { useEffect, useState } from "react";




const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("./datas.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return [services];
    
  
  };



export default UseServices;





// import './UseServices.css'

// import './UseServices.css'
// import { Link } from 'react-router-dom';

// const UseServices = (props) => {
//     const { name, para,id} = props.UseService;
    

//     return (
//         <div className='use-service '>            
//             {/* <i className='icon'> <FaBeer /> </i> */}
//             <h3>{name}</h3>
//             <p>{para}/-</p>
//             <Link to={`/UseService/${id}`}>
//             <button className='button'>book-now</button> 
//             </Link>
           
//         </div>
//     );
// };

// export default UseServices;