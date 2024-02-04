import React from 'react';
// import Register from '../components/Forms/Register/Register';
import Header from '../components/Header/Header';
import './Main.css';
import calendar from '../../assets/dummycal.png';

function Main(){
    return(
        <div className="main">
            <Header />
            <div className="main-container">
                <img src={calendar} alt="calendar"></img>
            </div>

        </div>
    );
}

export default Main;