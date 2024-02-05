import React, {useState, useEffect} from 'react';
// import Register from '../components/Forms/Register/Register';
import './Next.css';
import Heart from '../components/Heart/Heart';

function Next(){

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true);
        }, 1000);
    }, [showPopup]);

    return(
        <div className="main valentine">
            <h2>will you be my</h2>
            <h1>Valentine?</h1>

            <Heart/>
        </div>
    );
}

export default Next;