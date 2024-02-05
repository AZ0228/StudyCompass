import React, { useState, useEffect } from 'react';

const WordAnimation = ({ sentence, delay, name }) => {
  const words = sentence.split(' ');
  const [visibleWords, setVisibleWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer;
    
    const revealWords = () => {
      if (wordIndex < words.length) {
        timer = setTimeout(() => {
          setVisibleWords((prevVisibleWords) => [...prevVisibleWords, words[wordIndex]]);
          setWordIndex((prevIndex) => prevIndex + 1);
        }, delay);
      }
    };

    revealWords();

    return () => {
      clearTimeout(timer);
    };
  }, [words, delay, wordIndex]);

  return (
    <div className={`${name}`}>
      {visibleWords.map((word, index) => (
        <span key={index} className="animated-word">
        {index > 0 && ' '}{word}
        </span>
      ))}
    </div>
  );
};

export default WordAnimation;
