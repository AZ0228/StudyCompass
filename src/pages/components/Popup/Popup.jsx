import React, {useState} from 'react';
import './Popup.css';
import compass from '../../../assets/compass.svg';
import { useNavigate } from 'react-router-dom';


function Popup(){
    let navigate =  useNavigate();

    const [prompts, setPrompts] = useState([
        "what is the name of the city you were born in?",
        "what is the name of your first pet?",
        "what is your favorite color?",
        "what is your favorite food?",
        "what is your favorite movie?"

    ]); // [
    
    const [selected, setSelected] = useState(prompts[0]);
    const [loading, setLoading] = useState(false);
    const [num, setNum] = useState(0);

    const onNext = () => {
        if(num === 2){
            navigate('/');
        }
        setNum(num+1);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPrompts(prompts.filter(item => item !== selected))
        }, 1500);
    };

    return(
        <div className="popup">
            <div className={`loader ${loading ? "active" : ""}`}>
                <img src={compass} alt="compass"></img>
            </div>
            <h2>configure your security questions</h2>
            <select onChange={(event)=>{setSelected(event.target.value)}}>
                { prompts.map((prompt, index) => {
                        return <option key={index} value={prompt}>{prompt}</option>
                }
                )}
            </select>
            <input className="securityAnswer" type="text" placeholder='type your answer here'/>
            <button className="next" onClick={onNext}>next</button>
        </div>
    );
}

export default Popup;