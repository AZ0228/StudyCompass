import React, {useState, useEffect} from 'react';
// import Register from '../components/Forms/Register/Register';
import './Next.css';
import Heart from '../components/Heart/Heart';
import '../../assets/fonts.css'
import WordAnimation from '../components/WordAnimation/WordAnimation';

function Next(){

    const [start, setStart] = useState(true);
    const [bg, setBg] = useState(false);
    const [line0, setLine0] = useState(false);
    const [line1, setLine1] = useState(false);
    const [line2, setLine2] = useState(false);
    const [line3, setLine3] = useState(false);
    const [yes, setYes] = useState(false);
    const [no, setNo] = useState(false);

    const [sentence, setSentence] = useState("will you be my");
    const [sentence1, setSentence1] = useState("hey you...");
    const sentenceArray = ["maybe you didn't hear me", "I'll say it again", "seriously though", "ok one last time:"];

    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        if(!start) return;  
        setTimeout(() => {
            setBg(true);
        }, 1000);
        setTimeout(() => {
            setLine0(true);
        }, 2000);
        setTimeout(() => {
            setLine1(true);
        }, 3000);
        setTimeout(() => {
            setLine2(true);
        }, 5000);
        setTimeout(() => {
            setLine3(true);
        }, 6000);
        setTimeout(() => {
            setYes(true);
        }, 6500);
        setTimeout(() => {
            setNo(true);
        }, 7000);
        setStart(false);
    }, [start]);

    const [shesaidyes, setShesaidyes] = useState(false);
    const [shesaidno, setShesaidno] = useState(false);

    const [isChecked, setIsChecked] = useState(false);


    const onYes = () => {
        setTimeout(() => {  
            setShesaidyes(true);
            setLine0(false);
            setLine1(false);
            setLine2(false);
            setLine3(false);
            setYes(false);
            setNo(false);
            setSentence("omg yay")
            setTimeout(() => {
                setLine1(true);
            }, 500);
        }, 1000);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(!isChecked);
        onNo();
    }

    const onNo = () => {
        // setIsChecked(false);
        setShesaidno(true);
        setLine0(false);
        setLine1(false);
        setLine2(false);
        setLine3(false);
        setYes(false);
        setNo(false);
        setTimeout(() => {    
            setSentence1(sentenceArray[index % sentenceArray.length]);
            setIndex(index + 1); 
            setStart(true);
            setIsChecked(false);
        }, 500);
        
    }
    return(
        <div className={`main valentine ${!bg ? "hidden":""} ${shesaidyes ? "red":""}`}>
            {/* <h2 className={`${!line1 ? "hidden":""}`}>will you be my</h2> */}
            <p className={`${!line0 ? "hidden":""}`}>{sentence1}</p>
            <h2>{!line1 ? "": (<WordAnimation sentence={`${sentence}`} delay={300} name="word-animation" />)}</h2>
            <h1 className={`telma ${!line2 ? "hidden":""}`}>Valentine?</h1>
            <div className={`choices ${!line3 ? "hidden":""}`}>
                <div className={`yes ${!yes ? "hidden":""}`}><Heart onclick={onYes} /> <p>yes</p></div>
                <div className={`no ${!no ? "hidden":""}`}><Heart color={"#646464"} checked={isChecked} onclick={handleCheckboxChange}/> <p>no</p></div>
            </div>
        </div>
    );
}

export default Next;