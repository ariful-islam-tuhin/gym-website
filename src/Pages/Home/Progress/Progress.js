
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


const Progress = ({ done }) => {

    const [style, setStyle] = useState({});


    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        }
        setStyle(newStyle)

    }, 1000);


    return (
        <div className="m-1">
            <div className="container">              
                <div className="progress bg-dark">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={style}>
                        {done}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;