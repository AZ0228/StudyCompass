import React, {useState, useEffect} from 'react';
// import Register from '../components/Forms/Register/Register';
import Header from '../components/Header/Header';
import './Main.css';
import calendar from '../../assets/dummycal.png';
import Popup from '../components/Popup/Popup';

function Main(){

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true);
        }, 1000);
    }, [showPopup]);

    return(
        <div className="main">
            <Header />
            <div className="main-container">
                <img src={calendar} alt="calendar" className="calendar"></img>
            </div>
            <div className={`smokescreen ${showPopup ? "activePopup": ""}`}>
                <Popup />
            </div>
        </div>
    );
}

export default Main;